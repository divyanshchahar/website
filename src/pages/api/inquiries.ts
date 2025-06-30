import type { NextApiRequest, NextApiResponse } from "next";
// import mongoDbConnect from "@/lib/dbConnect";
// import db from "../../consts/db";
import Inquiries from "@/models/Inquiries";
import dbConnect from "@/lib/dbConnect";

type Data = object;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await dbConnect();

    const inquiry = await Inquiries.create({ ...req.body });

    return res.status(201).json({ ...inquiry });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
