import axios from "axios";

export default async () => {
    axios.post("https://energy-guide.adaptable.app/report")
    console.log("Data Update Triggered!")

    return new Response("Ok");
}

export const config = {
    schedule: "@hourly"
}