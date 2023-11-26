import { useEffect, useState, useContext } from "react"
import { ChatContext } from "../context/ChatProvider"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Users } from "../components/Users"


function Messages() {

    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState("")
    const { chatState } = useContext(ChatContext)

    // useEffect(() => {
    //     const obtenerDatos = async () => {
    //         try {
    //             const resultado = await fetchFunction("findAll", "GET");
    //             setUsers(resultado);
    //         } catch (error) {
    //             console.log("Hubo un error:", error);
    //         }
    //     };
    //     obtenerDatos();
    // }, []);

    const [text, setText] = useState("")

    const sendMessage = (message) => {
        const newMessage = {
            text: message,
            timestamp: new Date().toLocaleTimeString(),
        };
        setMessages([...messages, newMessage]);
        // Aquí puedes enviar el mensaje al servidor o realizar otras acciones necesarias
        console.log("Mensaje enviado: ", newMessage);
    };


    const handleSendMessage = (e) => {
        e.preventDefault();
        if (messages.trim() != "") {

            sendMessage(messages)
            setMessages("")
        }
    };

    useEffect(() => {
        // Código para manejar mensajes entrantes...
    }, []);

    return (
        <>

            <Header />

            <article className="d-flex flex-row justify-content-center">

                <section className="d-flex flex-column">
                    {/*CONTACTOS*/}
                    <aside className="bg-primary pe-5 ps-3 flex-grow-1">
                        <h5 className="text-light">Usuarios</h5>
                        <div className="d-flex flex-column">
                            <ul>

                                {/*                  {chatState.users.map((user) => (
                                    <li key={user.id_user}>
                                        <span className={`badge text-bg-${user.online ? 'success' : 'danger'}`}> o &nbsp;</span> &nbsp; {user.user_name}
                                    </li>
                                ))} */}
                            </ul>
                        </div>
                    </aside>
                </section>


                <section className="d-flex flex-column flex-grow-1 bg-secondary">

                    {/* CONTACTO */}
                    <section className="bg-light d-flex flex-row">
                        <div className="d-flex align-items-center m-3">
                            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#007bff"></rect>
                                <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                            </svg>
                            <h2>Sala de chat</h2> <br />
                        </div>
                    </section>


                    {/* MENSAJES */}
                    <ul className="overflow-auto" >
                        {/*  {messages.map((message, id) => (
                            <div key={id} className="d-flex text-muted mt-3 flex-row-reverse">
                                <svg className="bd-placeholder-img flex-shrink-0 ms-2 rounded" width="32" height="32"
                                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                    preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#007bff"></rect>
                                    <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                                </svg>
                                <div className="alert alert-primary">
                                    <p>
                                        {message} <br />
                                        <span className="text-muted">10:30pm</span>
                                    </p>
                                </div>
                            </div>
                        ))} */}
                    </ul>

                    {/* ESCRIBIR MENSAJE */}
                    <div className="mt-auto">
                        <form onSubmit={handleSendMessage}>

                            <div className="d-flex mb-2">

                                <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                                    className="form-control m-2"
                                    placeholder="Escribe tu mensaje..."
                                />
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </div>

                        </form>
                    </div>

                </section>

            </article>

            <Footer />
        </>
    )
}

export default Messages
