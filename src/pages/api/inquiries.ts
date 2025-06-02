import type { NextApiRequest, NextApiResponse } from "next";
import mongoDbConnect from "@/lib/dbConnect";
import db from "../../consts/db";

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const client = await mongoDbConnect;

    const collection = client
      .db(db.dbName)
      .collection(db.collections.inquiries);
    const result = await collection.insertOne(req.body);

    res.status(200).json({});
  } catch (error) {
    res.status(500).send({});
  }
}
