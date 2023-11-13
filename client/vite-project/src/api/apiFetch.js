import { env } from "../config/config";

export const fetchFunction = async (route, method = "GET", payload) => {

    const url = `${env.SERVER_PATH}/${route}`;


    if (method === "GET") {
        const response = await fetch(url, {
            method: method,
        });
    } else {
        const response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
    }
}