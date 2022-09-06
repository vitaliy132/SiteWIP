import "./App.css";

import { Routes, Route } from "react-router-dom";
import Wear from "./pages/Wear";

function Header() {
  return (
    <>
      <header>
        <div className="header-top-black d-flex justify-content-center  px-3 py-2 bg-dark text-light">
          <div>
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <ul className="header-top-left nav col-12 col-lg-auto    text-small">
                <li>
                  <a href="/" className="magaz">
                    {" "}
                    Магазин в центре Киева{" "}
                  </a>
                </li>
                <li>
                  <a href="/" className="telef ">
                    {" "}
                    +38 067 322 22 21{" "}
                  </a>
                </li>
                <li>
                  <a href="/" className=" grafik">
                    понедельник - суббота с 11:00 до 19:00; воскресенье с 11:00 до 18:00
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-top-right d-block">
            <div className="header-btn-login">
              <a href="/" className=" entryButton ">
                Вход
              </a>
            </div>
          </div>
        </div>
        <nav className=" navbar navbar-expand-lg  ">
          <div className="container-fluid mainHeader">
            <a className="whiteNavbar navbar-brand" href="/">
              Navbar
            </a>
            <button
              className="navbar-toggler navbar-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="  navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className=" navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="whiteNavbar nav-link active" href="/">
                    Бренды
                  </a>
                </li>
                <li className="nav-item">
                  <a className="whiteNavbar nav-link active" href="/">
                    Новинки
                  </a>
                </li>
                <li className="nav-item">
                  <a className="whiteNavbar nav-link active" href="/">
                    Обувь
                  </a>
                </li>
                <li className="nav-item">
                  <a className="whiteNavbar nav-link active" href="/wear">
                    Одежда
                  </a>
                </li>
                <li className="nav-item">
                  <a className="whiteNavbar nav-link active" href=".pages/Skateboard">
                    Скейтбординг
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
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
      </header>
      <Routes>
        <Route path="/wear" exact element={<Wear />} />
      </Routes>
    </>
  );
}

export default Header;
