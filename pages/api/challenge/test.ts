import { saveCodeBlocks } from "@src/controllers/databaseController";
import { CodeBlocks } from "@src/types";
import { NextApiRequest, NextApiResponse } from "next";

type RequestBodyType = {
  id: string;
  codeBlocks: CodeBlocks;
  username: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CodeBlocks | { message: string } | null>
) {
  if (req.method === "POST") {
    const { codeBlocks }: RequestBodyType = req.body;

    await saveCodeBlocks(codeBlocks);
    res.status(200).json({ message: "Successfully saved!" });
  } else {
    res.status(405).json(null);
  }
}
