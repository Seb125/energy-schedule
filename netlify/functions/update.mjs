import axios from "axios";

export default async () => {
    axios.post("https://energy-guide.adaptable.app/dataupdate")
    console.log("Data Update Triggered!")

    return new Response("Ok");
}

export const config = {
    schedule: "@daily"
}
