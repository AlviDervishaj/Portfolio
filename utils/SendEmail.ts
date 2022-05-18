import sgMail from "@sendgrid/mail";

// Helpers
import { Email } from "./SendEmailHelpers";

sgMail.setApiKey(
  process.env.EMAIL_GRID_TOKEN ? process.env.EMAIL_GRID_TOKEN : ""
);

export const sendEmail = async (
  username: string,
  email: string
): Promise<Email> => {
  const mailOptions = {
    to: email,
    from: {
      email: "alvidervishaj9@gmail.com",
      name: "Alvi Dervishaj",
    },
    templateId: process.env.TEMPLATE_ID ? process.env.TEMPLATE_ID : "",
    dynamic_template_data: {
      first_name: username,
    },
  };
  try {
    await sgMail.send(mailOptions);
    return {
      code: 0,
      info: "You're in! Keep an eye out for a welcome email! No confirmation is necessary.",
    };
  } catch (error: any) {
    return { error, code: 1, info: "Please try again later !" };
  }
};
