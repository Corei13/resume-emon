import { getCodeBlocks, getUser } from "@src/controllers/databaseController";
import { CodeBlocks } from "@src/types";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CodeBlocks | { message: string } | null>
) {
  const session = await getSession({ req });
  if (session) {
    if (req.method === "GET") {
      const email = session.user?.email;
      const user = await getUser(email as string);
      const { username, challenge } = req.query;
      if (user?.username === username) {
        const codeBlocks = await getCodeBlocks(
          username as string,
          Number(challenge)
        );

        return res.status(200).json(codeBlocks);
      } else {
        return res.status(403).json({ message: "Forbidden request" });
      }
    }
  } else {
    return res.status(401).json({ message: "Unauthorized user" });
  }
}
