import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const state = useSelector((state) => state.CartReducer);
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bolder fs-3" to="/">
          lA COLECTION
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          <div className="butons">
            <button className="btn btn-outline-dark ms-2">
              <i className="fa fa-sign-in"></i> Sign in
            </button>
            <button className="btn btn-outline-dark ms-2">
              <i className="fa fa-sign-out"></i> Sign out
            </button>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2 ">
              <i className="fa fa-shopping-cart"></i> Cart (
              <span>{state.length}</span>)
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
