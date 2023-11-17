import Footer from '../components/Footer'
import Header from '../components/Header'
import "../Style.css"
import { useNavigate } from "react-router-dom"


export const Index = () => {

  const navigate = useNavigate()

  return (
    <>
      <Header/>

    <div className="landing">
      <article className="mx-auto p-4">
        <div className="mx-4">
          <h1
            className="text-left py-2 text-decoration-underline"
            style={{ marginLeft: "22vh" }}
          >
            ¿Quiénes somos?
          </h1>
          <p className="rounded-2 float-left w-50 text-center py-5 custom-bg">
            Job Unite es una plataforma enfocada en brindar apoyo a jóvenes
            recién graduados en la búsqueda de su primera experiencia laboral.
            Nuestro objetivo principal es conectar a estos jóvenes con
            oportunidades relevantes y facilitarles el acceso al mercado
            laboral.
          </p>
          <div className="py-4 mx-5">
            <a
              href="mas-info"
              className="btn btn-primary py-4"
              style={{ marginLeft: "28vh" }}
            >
              Más información
            </a>
          </div>
        </div>
      </article>
    </div>

      <Footer />
    </>
  )
}
