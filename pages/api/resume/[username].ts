import databaseController from "@src/controllers/databaseController";
import { Resume } from "@src/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Resume | null>
) {
  if (req.method === "GET") {
    const { username } = req.query;
    const resume = await databaseController.getResume(username as string);
    res.status(200).json(resume);
  } else {
    res.status(405).json(null);
  }
}
