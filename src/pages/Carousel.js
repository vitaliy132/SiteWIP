const Carousel = () => {
  return (
    <>
      <main>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="slide1.jpg" className="d-block w-100" alt="slide" />
              <div className="carousel-caption d-none d-md-block">
                <h2>POP TRADING COMPANY</h2>
              </div>
            </div>
            <div className="carousel-item">
              <img src="slide2.jpg" className="d-block w-100" alt="slide2" />
              <div className="carousel-caption d-none d-md-block">
                <h2>CALL ME 917</h2>
              </div>
            </div>
            <div className="carousel-item">
              <img src="slide3.jpg" className="d-block w-100" alt="slide3" />
              <div className="carousel-caption d-none d-md-block">
                <h2>MARKET</h2>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="mainPictures d-flex justify-content-center ">
          <div className="main-new-product-body">
            <img src="IMG_3483.jpg" width={562} height={560} alt="NEW" />
            <h3>NEW</h3>
            <a className="buttonMain" href="/">
              ДИВИТИСЬ
            </a>
          </div>
          <div className="main-new-product-body">
            <img src="IMG_3479.jpg" width={562} height={560} alt="SALE" />
            <h3>SALE</h3>
            <a className="buttonMain" href="/">
              ДИВИТИСЬ
            </a>
          </div>
        </div>
      </main>
      ;
    </>
  );
};
export { Carousel };
