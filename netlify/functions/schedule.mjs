import axios from "axios";
import emailjs from "@emailjs/browser";

export default async () => {
  try {
    axios.get("https://cleaner-tomorrow.adaptable.app/sendmail")
    console.log("Data Update Triggered!")
  } catch (error) {
    console.log(error);
  }

  return new Response("Ok");
};

export const config = {
    schedule: "@daily"
}