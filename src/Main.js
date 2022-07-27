function Main() {
  return (
    <main>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="slide1.jpg" class="d-block w-100" alt="slide" />
            <div class="carousel-caption d-none d-md-block">
              <h2>POP TRADING COMPANY</h2>
            </div>
          </div>
          <div class="carousel-item">
            <img src="slide2.jpg" class="d-block w-100" alt="slide2" />
            <div class="carousel-caption d-none d-md-block">
              <h2>CALL ME 917</h2>
            </div>
          </div>
          <div class="carousel-item">
            <img src="slide3.jpg" class="d-block w-100" alt="slide3" />
            <div class="carousel-caption d-none d-md-block">
              <h2>MARKET</h2>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img id="icon" src="adi1.jpg" alt="kross" />
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img id="icon" src="adi2.jpg" alt="kross2" />
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img id="icon" src="adi3.jpg" alt="kross3" />
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img id="icon" src="adi4.jpg" alt="kross4" />
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img id="icon" src="adi1.jpg" alt="kross" />
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img id="icon" src="adi2.jpg" alt="kross2" />
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img id="icon" src="adi3.jpg" alt="kross3" />
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img id="icon" src="adi4.jpg" alt="kross4" />
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img id="icon" src="adi1.jpg" alt="kross1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
