import { createEmptyResume } from "@src/controllers/databaseController";
import { NextApiRequest, NextApiResponse } from "next";

type RequestBodyType = { username: string; title: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, username }: RequestBodyType = req.body;
    const id = await createEmptyResume(title, username);
    res.status(200).json({ id });
  } else {
    res.status(405).json(null);
  }
}
