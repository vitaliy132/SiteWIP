import { Link, Outlet } from "react-router-dom";
const Layout = () => {
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
            <Link className="whiteNavbar navbar-brand" to="/">
              Navbar
            </Link>
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
                <li className="nav-item mainNavlink">
                  <Link className=" whiteNavbar nav-link active" to="/">
                    Бренды
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="whiteNavbar nav-link active" to="/">
                    Новинки
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="whiteNavbar nav-link active" to="/shoes">
                    Обувь
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="whiteNavbar nav-link active" to="/wear">
                    Одежда
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="whiteNavbar nav-link active" to="/skateboard">
                    Скейтбординг
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  );
};
export { Layout };
