import image from "../../images/programmer1.png";
import image2 from "../../images/programmer2.png";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/actions/userActions";
import { Link } from "react-router-dom";
import "./HomeScreen.css";
import axios from "axios";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.user);
  const [resume, setResume] = useState();

  useEffect(() => {
    dispatch(getUser());
    axios
      .get("/api/resume")
      .then((response) => {
        setResume(response);
        console.log(response);
        console.log(resume);
      })
      .catch((error) => console.log(error));
  }, [dispatch]);
  return (
    <div className="homescreen">
      <div className="left__box">
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
        <div className="intro__box">
          <h1 className="intro__heading">Hi, I'm </h1>
          <h1 className="intro__name">Hasnat Farooq</h1>
          <h3 className="intro__desc">I am a JavaScript Developer</h3>
          <div className="intro__btns">
            <Link to="/contact" className="intro__btn1">
              <span>Let's Talk!</span>
              <i class="fas fa-arrow-circle-right"></i>
            </Link>
          </div>
        </div>
        <div className="mobile_image__box">
          <img src={image2} className="image__mobile" />
        </div>
      </div>
      <div className="image__box">
        <img className="home__image" src={image} alt="Image" />
      </div>
    </div>
  );
};

export default HomeScreen;
