import { env } from "../config/config";

export const fetchFunction = async (route, method, payload) => {
    const url = `${env.SERVER_PATH}/${route}`;

    if (method === "GET") {
        const response = await fetch(url, {
            method: method,
        });

        return response.json();
    } else {
        const data = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (data.ok) {
            const jsonResponse = await data.json();
            return jsonResponse;
        } else {
            // Manejar el caso en el que la respuesta no es exitosa
            throw new Error(`Error en la solicitud: ${data.statusText}`);
        }
    }
}
