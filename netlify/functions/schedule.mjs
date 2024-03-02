import axios from "axios";
import emailjs from "@emailjs/browser";

export default async () => {
  try {
    const data = await axios.get("http://localhost:3000/emailjs");
    emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);

    // Send email with CC included
    const response = await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      data.data.messages[0]
    );

    const responseTwo = await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      data.data.messages[1]
    );

    const responseThree = await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      data.data.messages[2]
    );

    const responseFour = await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      data.data.messages[3]
    );

    console.log(response);
    res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error);
  }

  return new Response("Ok");
};

export const config = {
    schedule: "@daily"
}