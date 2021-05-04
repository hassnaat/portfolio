import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/userActions";
import "./Navbar.css";

const Navbar = ({ click, hide }) => {
  const navbarClass = ["navbar"];
  if (hide === false) {
    navbarClass.push("show__navbar");
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const { loading, error, user } = useSelector((state) => state.user);
  return (
    <div className={navbarClass.join(" ")}>
      {loading ? (
        <h4>Loading...</h4>
      ) : error ? (
        <h4>Connection Error</h4>
      ) : (
        <>
          {user.data.map((user) => (
            <div className="navbar__profile" onClick={click}>
              <img
                className="navbar__image"
                src={user.image}
                alt="profile Image"
              />
              <div className="navbar__info">
                <h3 className="info__name">{user.name}</h3>
                <p className="info__role">{user.role}</p>
              </div>
            </div>
          ))}
        </>
      )}
      <div className="toggle" onClick={click}>
        <span className="toggle__bar"></span>
        <span className="toggle__bar"></span>
        <span className="toggle__bar"></span>
      </div>
    </div>
  );
};

export default Navbar;
