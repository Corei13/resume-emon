import { getUser, saveUser } from "@src/controllers/databaseController";
import { User } from "@src/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | { message: string } | null>
) {
  if (req.method === "GET") {
    const { email } = req.query;
    const user = await getUser(email as string);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404);
    }
  } else {
    const { userName, email }: { userName: string; email: string } = req.body;
    const savedUser = await saveUser(userName, email);
    if (savedUser) {
      return res.status(200).json(savedUser);
    } else {
      return res.status(404).json({ message: "user exist" });
    }
  }
}
