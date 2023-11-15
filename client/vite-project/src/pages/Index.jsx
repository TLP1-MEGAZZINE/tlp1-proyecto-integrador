import Footer from '../components/Footer'
import Header2 from '../components/Header2'
import "../Style.css"
import { useNavigate } from "react-router-dom"


export const Index = () => {

  const navigate = useNavigate()

  return (
    <>
      <Header2 />

      <article className="mx-auto p-4">
        <div className="mx-4 d-flex">
          <h1 className="py-2">¿Quienes somos?</h1>

          <p className="rounded-2 float-left w-50 text-center py-5 custom-bg">Job Unite es una plataforma
            enfocada en brindar apoyo a jóvenes recién graduados en la búsqueda de su primera
            experiencia laboral <br />
            Nuestro objetivo principal es conectar a estos jóvenes con oportunidades
            relevantes y facilitarles el acceso al mercado laboral.
          </p>

          <div className="py-4 mx-5">
            <a href="#" onClick={() => navigate("/mas-info")} className="btn btn-primary py-4" style={{ marginLeft: "28vh" }}>Más información</a>
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
