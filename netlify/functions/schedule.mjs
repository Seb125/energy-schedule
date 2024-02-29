import axios from "axios";

export default async () => {
    axios.post("https://energy-guide.adaptable.app/report", {data: "data"})
    console.log("Data Update Triggered!")

    return new Response("Ok");
}

export const config = {
    schedule: "@daily"
}