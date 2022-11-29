import {
  createEmptyResume,
  getUser,
} from "@src/controllers/databaseController";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

type RequestBodyType = { username: string; title: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (session) {
    if (req.method === "POST") {
      const email = session.user?.email;
      const user = await getUser(email as string);
      const { title, username }: RequestBodyType = req.body;
      if (user?.username === username) {
        const id = await createEmptyResume(title, username);
        res.status(200).json({ id });
      } else {
        return res.status(401).json({ message: "Forbidden request" });
      }
    } else {
      res.status(405).json(null);
    }
  } else {
    return res.status(401).json({ message: "Unauthorized user" });
  }
}
