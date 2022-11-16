import databaseController from "@src/controllers/databaseController";
import { CodeBlocks } from "@src/types";
import { NextApiRequest, NextApiResponse } from "next";

type RequestBodyType = { codeBlocks: CodeBlocks; username: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CodeBlocks | { message: string } | null>
) {
  if (req.method === "GET") {
    const username = "test";
    const codeBlocks = await databaseController.getCodeBlocks(
      username as string
    );
    res.status(200).json(codeBlocks);
  } else if (req.method === "POST") {
    const { codeBlocks, username }: RequestBodyType = req.body;
    await databaseController.saveCodeBlocks(username, codeBlocks);
    res.status(200).json({ message: "Successfully saved!" });
  } else {
    res.status(405).json(null);
  }
}
