import {
  getCodeBlocks,
  saveCodeBlocks,
} from "@src/controllers/databaseController";
import { CodeBlocks } from "@src/types";
import { NextApiRequest, NextApiResponse } from "next";

type RequestBodyType = { codeBlocks: CodeBlocks; username: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CodeBlocks | { message: string } | null>
) {
  if (req.method === "GET") {
    const username = "test";
    const codeBlocks = await getCodeBlocks(username as string);
    res.status(200).json(codeBlocks);
  } else if (req.method === "POST") {
    const { codeBlocks, username }: RequestBodyType = req.body;
    await saveCodeBlocks(username, codeBlocks);
    res.status(200).json({ message: "Successfully saved!" });
  } else {
    res.status(405).json(null);
  }
}
