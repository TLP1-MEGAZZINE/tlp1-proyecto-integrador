import { env } from "../config/config";

export const fetchFileFunction = async (route, payload) => {
    const link = `${env.SERVER_PATH}/${route}`;

    console.log("PAYLOAD");
    console.log(payload);

    // Crear un objeto FormData
    const formData = new FormData();

    // Añadir el archivo al formData
    formData.append("url", payload.url);
    formData.append("id_user", payload.id_user);
    if (payload.post_title || payload.post_content) {
        formData.append("post_title", payload.post_title);
        formData.append("post_content", payload.post_content);
    }

    console.log("FORM DATA");
    console.log(formData);

    const response = await fetch(link, {
        method: "POST",
        body: formData
    });

    const data = await response.json();
    return data;
}
