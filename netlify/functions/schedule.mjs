import axios from "axios";

export default async () => {
    axios.get("https://energy-guide.adaptable.app/sendmail")
    console.log("Data Update Triggered!")

    return new Response("Ok");
}

export const config = {
    schedule: "@daily"
}