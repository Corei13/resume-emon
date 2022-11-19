import { saveResume } from "@src/controllers/databaseController";
import { Resume } from "@src/types";
import { NextApiRequest, NextApiResponse } from "next";

type RequestBodyType = { resume: Resume; username: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { resume, username }: RequestBodyType = req.body;
    await saveResume(username, resume);
    res.status(200).json({ message: "Successfully saved!" });
  } else {
    res.status(405).json(null);
  }
}
