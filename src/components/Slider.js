import React from 'react'

export default function Slider() {
    return (
        <div className='slider'>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img className='img-fluid' src="https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/311994816_184133047606891_5832331248230295990_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFpENAlIbmU2IVLfZ2tUHuQN-FIutkxcns34Ui62TFye0tXKY8rK89ZeGZ7sSW2D2TyHujxQSI63ZIebGs-Rcr4&_nc_ohc=Mf8-F8o_M1kAX9pCAYM&_nc_zt=23&_nc_ht=scontent-lcy1-1.xx&oh=00_AfBELV6YfiqH4JNfR-lO0EpeD-peOvnvqeqduiuE60hPBw&oe=639B8041" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img className='img-fluid' src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/312542149_184133117606884_4371453948891888360_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeF9LO6-iwT05eRWO_RmgMTnFzo19L5wL28XOjX0vnAvb0Fw_Z4PgDUYrY8FVlKmBgWMtqHMrmgx1qcrB9Qzi1_E&_nc_ohc=-YYxWYI43dMAX-LTsxf&tn=pSFaInRIEVUOSWmG&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&oh=00_AfDnpkQBWkHwv1ftbaUBKeRIcKPizF1_UtoULiQ5X0mCZA&oe=639C6924" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img className='img-fluid' src="https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/312505735_184132917606904_1530408781759122017_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHJDoObD-pOy9L1Rhpjm1wPOoR-2g_eGX86hH7aD94ZfzZ4e__IMfM1Cz-3YexDMsvtdew-RnLfNj5g53e9r4h8&_nc_ohc=lW3mR_eRKggAX_9d05i&_nc_zt=23&_nc_ht=scontent-lcy1-1.xx&oh=00_AfDTavMYrT_VybNfj3cA8QCDqiBVAhR-nHQ0sxEVw7wJ9g&oe=639C37B1" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
