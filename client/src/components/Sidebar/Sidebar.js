import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/userActions";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
const Sidebar = ({ show, click }) => {
  const sidebarClass = ["sidebar"];
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (show) {
    sidebarClass.push("show");
  }
  return (
    <div className={sidebarClass.join(" ")}>
      <div className="sidebar__wrapper">
        <div className="sidebar__header">
          {loading ? (
            <h3>Loading...</h3>
          ) : error ? (
            <h3>Something went wrong</h3>
          ) : (
            user.data.map((user) => (
              <>
                <img
                  className="header__image"
                  src={user.image}
                  alt="profile Image"
                />
                <h2 className="header__name">{user.name}</h2>
                <p className="header__bio">{user.role}</p>
              </>
            ))
          )}
        </div>
        <div className="sidebar__items" onClick={click}>
          <NavLink to="/" exact={true} activeClassName="active">
            <span>
              <i className="fas fa-home"></i>
            </span>{" "}
            Home{" "}
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            <span>
              <i className="fas fa-user-alt"></i>
            </span>{" "}
            About{" "}
          </NavLink>
          <NavLink to="/projects" activeClassName="active">
            <span>
              <i className="far fa-check-circle"></i>
            </span>
            Projects{" "}
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            <span>
              <i className="fas fa-mobile-alt"></i>
            </span>
            Contact{" "}
          </NavLink>
        </div>
        <div className="social__icons">
          <a href="https://web.facebook.com/hasnat.farooq.948">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/hassnaatfarooq/">
            <i class="fab fa-linkedin"></i>
          </a>
          <Link to="/contact">
            <i class="fas fa-envelope"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
