import { getAllResumes } from "@src/controllers/databaseController";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { username } = req.query;
    const resumes = await getAllResumes(username as string);
    if (resumes) {
      return res.status(200).json(resumes);
    } else {
      return res.status(404);
    }
  }
}
