import { useEffect, useState } from "react"


export const Users = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {

        try {
            const response = await fetch('http://localhost:5000/findAll', {
                method: 'GET',
            });

            if (response.ok) {

                const jsonData = await response.json();
                setUsers(jsonData); // Almacena los datos en el estado
            }
            // Resto del código de manejo de respuesta...
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            {
                users
                    .filter(user => user.rol.rol_name != "particular")
                    .map((user, id_user) => (

                        
                        <div key={id_user} className="d-flex text-muted pt-3 ps-2">
                            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff"
                                    dy=".3em">32x32</text>
                            </svg>

                            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">

                                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                    <div className="d-flex justify-content-between">
                                        <strong className="text-gray-dark">{user.user_name}</strong>
                                        <a href="#">Follow</a>
                                    </div>
                                    <span className="d-block">{user.user_email}</span>
                                    <strong className="text-gray-dark">{user.rol.rol_name}</strong>

                                </div>
                            </div>
                        </div>
                    ))
            }
        </>
    )
}
