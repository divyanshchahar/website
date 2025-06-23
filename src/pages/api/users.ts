// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "@/lib/dbConnect";
import ReferalCodes from "@/models/ReferalCodes";
import Users from "@/models/Users";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      try {
        await dbConnect();
        const token = await getToken({ req });

        if (token?.email === req.body.email) {
          const refCode = await ReferalCodes.findOne({ assignedTo: "" });

          const user = await Users.create({
            ...req.body,
            refCode: refCode.code,
          });

          refCode.assignedTo = user._id.toString();

          const updatedRefCode = await refCode.save();

          return res.status(201).json({ ...user });
        }

        res.status(401).json({});
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }

      break;

    case "GET":
      try {
        const token = await getToken({ req });

        if (token?.email) {
          const user = await Users.findOne({ email: token?.email });

          console.log(user._id.toString());

          res.status(200).json({ ...user });
          return;
        }

        res.status(401).end();
      } catch (error) {
        res.status(500).json(error);
      }

      break;

    case "PUT":
      res.status(200).json({ success: true, data: "PUT" });
      break;

    case "DELETE":
      res.status(200).json({ success: true, data: "DELETE" });
      break;

    default:
      res.status(200).json({ success: true, data: "DEFAULT" });
      break;
  }
}
