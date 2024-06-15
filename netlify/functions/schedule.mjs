import axios from "axios";
import emailjs from "@emailjs/browser";

export default async () => {
  try {
    await axios.get("https://localhost:3000/emailjs")
    console.log("Data Update Triggered!")
  } catch (error) {
    console.log(error);
  }

  return new Response("Ok");
};

export const config = {
    schedule: "@daily"
}