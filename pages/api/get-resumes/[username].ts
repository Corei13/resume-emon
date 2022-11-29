import { getAllResumes } from "@src/controllers/databaseController";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (session) {
    if (req.method === "GET") {
      const { username } = req.query;
      const resumes = await getAllResumes(username as string);
      if (resumes) {
        return res.status(200).json(resumes);
      } else {
        return res.status(404);
      }
    }
  } else {
    return res.status(401).json("Unauthorized User");
  }
}
