import { useEffect, useState, useRef } from "react"
import { io } from "socket.io-client"
import Header from "../components/Header"
import Footer from "../components/Footer"
import dayjs from "dayjs"

const user_name = localStorage.getItem("user_name")

const socket = io("http://localhost:5000")



function Messages() {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");
    const [connectedUsers, setConnectedUsers] = useState(new Set());

    const nuevaHora = dayjs().format('HH:mm');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMessages(prevMessages => [...prevMessages, { user_name, text, nuevaHora }]);
        }, 60000); // 60000 milisegundos = 1 minuto

        return () => clearInterval(intervalId);
    }, [text]);

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit("message", { user_name, text, nuevaHora });
        setText("");
    }

    useEffect(() => {
        socket.on("message", (data) => {
            if (data === "") return;
            setMessages(prev => [...prev, data]);
            setConnectedUsers(prevUsers => new Set([...prevUsers, data.user_name]));
        });

        return () => {
            socket.off("message");
        }
    }, []);

    const messagesListRef = useRef();

    useEffect(() => {
        if (messagesListRef.current) {
            messagesListRef.current.scrollTop = messagesListRef.current.scrollHeight;
        }
    }, [messages]);


    return (
        <>

            <Header />

            <article className="d-flex flex-row justify-content-center">

                <section className="d-flex flex-column">
                    {/*CONTACTOS*/}
                    <aside className="bg-primary pt-3 pe-5 ps-3 flex-grow-1 justify-content-center">
                        <h5 className="text-light">Usuarios conectados</h5>
                        <div className="d-flex flex-column">
                            <ul>
                                <div className="list-group d-flex">
                                    {Array.from(connectedUsers).map((connectedUser, index) => (
                                        <>
                                            <div className="list-group-item d-flex">
                                                <i class="bi bi-person mx-2"></i>
                                                <li className="list-unstyled" key={index}>{connectedUser}</li>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </ul>
                        </div>
                    </aside>
                </section>


                <section className="d-flex flex-column flex-grow-1 bg-secondary">

                    {/* CONTACTO */}
                    <section className="bg-light d-flex flex-row">
                        <div className="d-flex align-items-center m-2">
                            <div className="d-flex me-3">
                                <i class="bi bi-chat" style={{ fontSize: '2rem' }}></i>
                                <h2>Chat Room</h2>
                            </div>
                        </div>
                    </section>


                    {/* MENSAJES */}
                    <ul className="overflow-auto" style={{ maxHeight: '270px' }} >
                        {messages.map((message, id) => (
                            <div key={id} className={`d-flex text-muted mt-3 ${message.user_name === user_name ? "flex-row-reverse" : "flex-row"}`}>
                                <svg className="bd-placeholder-img flex-shrink-0 mx-2 rounded" width="32" height="32"
                                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                    preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#007bff"></rect>
                                    <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                                </svg>
                                <div className={message.user_name === user_name ? "alert alert-primary" : "alert alert-secondary"}>
                                    <h6>{message.user_name}</h6>
                                    <p>
                                        {message.text} <br />
                                        <span className="text-muted">{message.nuevaHora}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </ul>

                    {/* ESCRIBIR MENSAJE */}
                    <div className="mt-auto">
                        <form onSubmit={handleSubmit}>

                            <div className="d-flex mb-2">

                                <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                                    className="form-control m-2"
                                    placeholder="Escribe tu mensaje..."
                                />
                                <button type="submit" className="btn btn-primary"><i class="bi bi-arrow-right-square-fill"></i>Enviar</button>

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
