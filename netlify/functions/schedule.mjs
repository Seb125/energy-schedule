import axios from "axios";

export default async () => {
    axios.get("")
    console.log("Data Update Triggered!")

    return new Response("Ok");
}

export const config = {
    schedule: "@hourly"
}