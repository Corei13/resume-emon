import { getUser, saveCodeBlocks } from "@src/controllers/databaseController";
import { CodeBlocks } from "@src/types";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

type RequestBodyType = {
  id: string;
  codeBlocks: CodeBlocks;
  username: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CodeBlocks | { message: string } | null>
) {
  const session = await getSession({ req });
  if (session) {
    const email = session.user?.email;
    const user = await getUser(email as string);
    if (req.method === "POST") {
      const { codeBlocks }: RequestBodyType = req.body;
      if (user?.username === codeBlocks.username) {
        await saveCodeBlocks(codeBlocks);

        return res.status(200).json({ message: "Successfully saved!" });
      } else {
        return res.status(403).json({ message: "Forbidden request" });
      }
    }
  } else {
    return res.status(401).json({ message: "Unauthorized user" });
  }
}
