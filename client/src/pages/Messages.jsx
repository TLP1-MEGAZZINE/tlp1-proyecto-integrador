import { useEffect, useState, useContext } from "react"
import { ChatContext } from "../context/ChatProvider"
import Header from "../components/Header"
import Footer from "../components/Footer"


function Messages() {

    const [messages, setMessages] = useState("")
    const { chatState, dispatch } = useContext(ChatContext)

console.log(chatState);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (messages.trim() !== "") {
            // Aquí deberías enviar el mensaje utilizando tu función de enviar mensajes
            // y el estado del chat
            // Ejemplo (puedes necesitar adaptarlo según tu lógica):
            dispatch({
                type: 'NEW_MESSAGE',
                payload: {

                    content: messages,
                    // Puedes agregar más información según tus necesidades
                }
            });
            setMessages("");
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
                        {chatState?.messages?.map((message, index) => (
                            <li key={index}>{message.content}</li>
                        ))}
                    </ul>

                    {/* ESCRIBIR MENSAJE */}
                    <div className="mt-auto">
                        <form onSubmit={handleSendMessage}>

                            <div className="d-flex mb-2">

                                <input type="text"
                                    className="form-control m-2"
                                    placeholder="Escribe tu mensaje..."
                                    value={messages}
                                    onChange={(e) => setMessages(e.target.value)}
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
