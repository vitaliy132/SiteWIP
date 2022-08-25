function Main() {
  return (
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

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img id="icon" src="adi1.jpg" alt="kross" />
                <div className="fastBuy">
                  <img src="ic_eye_product.svg" alt="glaz" />
                </div>
                <div className="favoriteBtn">
                  <img src="ic_star_product.svg" alt="glaz" />
                </div>
              </div>
              <div className="productTitle d-flex justify-content-between">
                <div className="cardText">Рюкзак Eastpak Padded Pak'r Midnight</div>
                <div className="cardPrice">UAH 1890</div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img id="icon" src="adi2.jpg" alt="kross2" />
                <div className="fastBuy">
                  <img src="ic_eye_product.svg" alt="glaz" />
                </div>
                <div className="favoriteBtn">
                  <img src="ic_star_product.svg" alt="glaz" />
                </div>
              </div>
              <div className="productTitle d-flex justify-content-between">
                <div className="cardText">Рюкзак Eastpak Padded Pak'r Midnight</div>
                <div className="cardPrice">UAH 1890</div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img id="icon" src="adi3.jpg" alt="kross3" />
                <div className="fastBuy">
                  <img src="ic_eye_product.svg" alt="glaz" />
                </div>
                <div className="favoriteBtn">
                  <img src="ic_star_product.svg" alt="glaz" />
                </div>
              </div>
              <div className="productTitle d-flex justify-content-between">
                <div className="cardText">Рюкзак Eastpak Padded Pak'r Midnight</div>
                <div className="cardPrice">UAH 1890</div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img id="icon" src="adi4.jpg" alt="kross4" />
                <div className="fastBuy">
                  <img src="ic_eye_product.svg" alt="glaz" />
                </div>
                <div className="favoriteBtn">
                  <img src="ic_star_product.svg" alt="glaz" />
                </div>
              </div>
              <div className="productTitle d-flex justify-content-between">
                <div className="cardText">Рюкзак Eastpak Padded Pak'r Midnight</div>
                <div className="cardPrice">UAH 1890</div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img id="icon" src="adi1.jpg" alt="kross" />
                <div className="fastBuy">
                  <img src="ic_eye_product.svg" alt="glaz" />
                </div>
                <div className="favoriteBtn">
                  <img src="ic_star_product.svg" alt="glaz" />
                </div>
              </div>
              <div className="productTitle d-flex justify-content-between">
                <div className="cardText">Рюкзак Eastpak Padded Pak'r Midnight</div>
                <div className="cardPrice">UAH 1890</div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img id="icon" src="adi2.jpg" alt="kross2" />
                <div className="fastBuy">
                  <img src="ic_eye_product.svg" alt="glaz" />
                </div>
                <div className="favoriteBtn">
                  <img src="ic_star_product.svg" alt="glaz" />
                </div>
              </div>
              <div className="productTitle d-flex justify-content-between">
                <div className="cardText">Рюкзак Eastpak Padded Pak'r Midnight</div>
                <div className="cardPrice">UAH 1890</div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img id="icon" src="adi3.jpg" alt="kross3" />
                <div className="fastBuy">
                  <img src="ic_eye_product.svg" alt="glaz" />
                </div>
                <div className="favoriteBtn">
                  <img src="ic_star_product.svg" alt="glaz" />
                </div>
              </div>
              <div className="productTitle d-flex justify-content-between">
                <div className="cardText">Рюкзак Eastpak Padded Pak'r Midnight</div>
                <div className="cardPrice">UAH 1890</div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img id="icon" src="adi4.jpg" alt="kross4" />
                <div className="fastBuy">
                  <img src="ic_eye_product.svg" alt="glaz" />
                </div>
                <div className="favoriteBtn">
                  <img src="ic_star_product.svg" alt="glaz" />
                </div>
              </div>
              <div className="productTitle d-flex justify-content-between">
                <div className="cardText">Рюкзак Eastpak Padded Pak'r Midnight</div>
                <div className="cardPrice">UAH 1890</div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img id="icon" src="adi1.jpg" alt="kross1" />
                <div className="fastBuy">
                  <img src="ic_eye_product.svg" alt="glaz" />
                </div>
                <div className="favoriteBtn">
                  <img src="ic_star_product.svg" alt="glaz" />
                </div>
              </div>
              <div className="productTitle d-flex justify-content-between">
                <div className="cardText">Рюкзак Eastpak Padded Pak'r Midnight</div>
                <div className="cardPrice">UAH 1890</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
