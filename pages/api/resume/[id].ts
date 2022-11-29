import { getResume } from "@src/controllers/databaseController";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (session) {
    if (req.method === "GET") {
      const { id } = req.query;
      const resume = await getResume(id as string);
      res.status(200).json(resume);
    } else {
      res.status(405).json(null);
    }
  } else {
    return res.status(401).json({ message: "Unauthorized user" });
  }
}
