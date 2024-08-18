import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-briefcase-alt"></i>

        <h3 className="about__title">Projects</h3>
        <span className="about__subtitle">2+ Projects</span>
      </div>

      <div className="about__box">
        <i class="bx bx-award"></i>

        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">
          Bachelor's Degree in CSE(AI & ML)
        </span>
      </div>

      <div className="about__box">
        <i class="bx bx-bulb"></i>
        <h3 className="about__title">Skills</h3>
        <span className="about__subtitle">Focused on data analytics</span>
      </div>
    </div>
  );
};

export default Info;
