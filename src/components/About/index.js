import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import ProfileImg from "../../assets/img/profile-pic.jpg";

function About() {
  const [links] = useState([
    {
      link: "about me",
    },
  ]);

  const [currentSection] = useState(links[0]);

  return (
    <React.Fragment>
      <header className="hero">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">
                {capitalizeFirstLetter(currentSection.link)}
              </h1>
              <hr className="divider mb-4" />
            </div>
            <div className="col-lg-8 align-self-baseline team-member">
              <img
                className=" rounded-circle mt-5"
                src={ProfileImg}
                alt="Profile avatar"
              />
              <p className="text-white-75 mt-5">
                Hello! My name is Micah Duehring. I'm a Full Stack Web Developer. Since I was younger,
                I have had a dream and a passion to one day be in the industry
                of software development!
              </p>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
export default About;
