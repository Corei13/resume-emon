import { getUser, saveResume } from "@src/controllers/databaseController";
import { Resume } from "@src/types";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

type RequestBodyType = { resume: Resume; id: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (session) {
    const email = session.user?.email;
    const user = await getUser(email as string);

    if (req.method === "POST") {
      const { resume, id }: RequestBodyType = req.body;
      if (user?.username === resume.username) {
        await saveResume(id, resume);

        return res.status(200).json({ message: "Successfully saved!" });
      } else {
        return res.status(403).json({ message: "Forbidden request" });
      }
    } else {
      res.status(405).json(null);
    }
  } else {
    return res.status(401).json({ message: "Unauthorized user" });
  }
}
