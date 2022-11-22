import { saveResume } from "@src/controllers/databaseController";
import { Resume } from "@src/types";
import { NextApiRequest, NextApiResponse } from "next";

type RequestBodyType = { resume: Resume; id: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { resume, id }: RequestBodyType = req.body;
    await saveResume(id, resume);
    res.status(200).json({ message: "Successfully saved!" });
  } else {
    res.status(405).json(null);
  }
}
