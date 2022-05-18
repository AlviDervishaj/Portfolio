import { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../utils/SendEmail";

type Data = {
  info: string;
  code: number;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST")
    return res.json({ info: "Not Found !", code: 404 });
  // get username and email
  const { username, email }: { username: string; email: string } = req.body;
  // send email to this user
  const _response: Data = await sendEmail(username, email);
  return res.json(_response);
}
