import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="sticky-top bg-dark-subtle">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <h3>
                <i
                  className="fa-brands fa-napster fa-flip"
                  style={{ color: "#0e0628" }}
                ></i>
                Musicana
              </h3>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggler"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav me-auto mb-2 mb-lg-2">
                <li className="nav-item me-2">
                  <button className="btn btn-outline-warning">
                    welcome offer: 1 month trial @ $1
                  </button>
                </li>
                <li className="nav-item me-2">
                  <button className="btn btn-outline-info">
                    Get musicana plus
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-secondary">
                    Sign_up/Login
                  </button>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink
                className="nav-link text-black"
                to="/"
                activeClassName="active"
              >
                All
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-black"
                to="/trending"
                activeClassName="active"
              >
                Trending Songs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-black"
                to="/new"
                activeClassName="active"
              >
                New Songs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-black"
                to="/old"
                activeClassName="active"
              >
                Old Songs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-black"
                to="/mymusic"
                activeClassName="active"
              >
                My Music
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
