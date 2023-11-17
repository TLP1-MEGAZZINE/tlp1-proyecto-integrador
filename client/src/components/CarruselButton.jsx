export const CarruselButton = () => {
    return (
        <div class="text-center d-flex justify-content-center py-2">
            <button class="btn btn-primary mx-5" data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"><i class="fas fa-chevron-left"></i> Anterior</button>

            <button class="btn btn-primary mx-5" data-bs-target="#carouselExampleDark"
                data-bs-slide="next">Siguiente <i class="fas fa-chevron-right"></i></button>
        </div>
    )
}
