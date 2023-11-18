import { env } from "../config/config";

export const fetchFunction = async (route, method, payload) => {
    const url = `${env.SERVER_PATH}/${route}`;

    if (method === "GET") {
        const response = await fetch(url, {
            method: method,
        });

        return response.json();
    } else {
        // METODO POST
        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json"
                    // "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            return data;
        } catch {
            console.log(error);
        }
    }
}
