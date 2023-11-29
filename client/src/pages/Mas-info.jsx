import Footer from '../components/Footer.component'
import Header from '../components/Header.component'
import Slide from '../components/Slide.component';
import {slideData1, slideData2, slideData3} from '../data/InfoContent';


export default function MasInfo() {

    return (
        <>
            <Header />

            <main className="container-fluid">
                {/* INDICADORES DEL CARRUCEL */}

                <div id="carouselExampleDark" className="carousel carousel-dark slide">
                    <div className="carousel-indicators d-flex py-2">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>

                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>

                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>

                    <div className="container p-5 carousel-inner">
                        {/* PRIMER SLIDE */}
                        <Slide
                            title={slideData1.title}
                            active={"active"}
                            subtitle={slideData1.subtitle}
                            listItems={slideData1.listItems}
                        />

                        {/*  SEGUNDO SLIDE */}

                        <Slide
                            title={slideData2.title}
                            subtitle={slideData2.subtitle}
                            listItems={slideData2.listItems}
                        />

                        {/*  TERCER SLIDE */}
                        <Slide
                            title={slideData3.title}
                            subtitle={slideData3.subtitle}
                            listItems={slideData3.listItems}
                        />
                    </div>
                    {/*  BOTONES DEL CARRUCEL */}

                </div>
            </main>

            <Footer />
        </>
    )
};
