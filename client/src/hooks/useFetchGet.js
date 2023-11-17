import { useState, useEffect } from "react";

export const useFetchData = (url) => {
    const [data, setData] = useState([])

    const fetchData = async () => {

        try {
            const response = await fetch(url, {
                method: 'GET',
            });

            if (response.ok) {
                const jsonData = await response.json();
                setData(jsonData); // Almacena los datos en el estado
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    return data
}
