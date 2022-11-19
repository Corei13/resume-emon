import { getCodeBlocks } from "@src/controllers/databaseController";
import { CodeBlocks } from "@src/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CodeBlocks | { message: string } | null>
) {
  if (req.method === "GET") {
    const { username, challengeId } = req.query;

    const codeBlocks = await getCodeBlocks(
      username as string,
      Number(challengeId)
    );
    res.status(200).json(codeBlocks);
  }
}
