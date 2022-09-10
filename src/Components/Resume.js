import React from "react";
import resume from "../Components/rajGems.pdf";
const price = [{ key: "EF VVS", price: "" }];
const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Pricing</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item" style={{ textAlign: "center" }}>
            <h3>PRICING OF +000 to -11 Sizes </h3>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <h5>All International qualities </h5>{" "}
              </div>
            </div>

            <div>
              <div style={{ fontSize: "20px" }}>
                <b>EF VVS</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>700$</em>
              </div>
              <div style={{ fontSize: "20px" }}>
                <b>EF VVS-VS </b>
                <span> - </span> <em style={{ fontSize: "25px" }}>625$ </em>
              </div>
              <div style={{ fontSize: "20px" }}>
                <b>EF VS</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>600$</em>
              </div>
              <br />
              <div style={{ fontSize: "20px" }}>
                <b>VVS-FG </b>
                <span> - </span> <em style={{ fontSize: "25px" }}>625$ </em>
              </div>
              <div style={{ fontSize: "20px" }}>
                <b>VVS-VS FG</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>575$</em>
              </div>
              <div style={{ fontSize: "20px" }}>
                <b>VS1 FG</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>550$ </em>
              </div>
              <div style={{ fontSize: "20px" }}>
                <b>VS2 FG</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>525$</em>
              </div>
              <div style={{ fontSize: "20px" }}>
                <b>VS-SI FG</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>475$</em>
              </div>
              <div style={{ fontSize: "20px" }}>
                <b>SI1 FG</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>425$</em>
              </div>
              <div style={{ fontSize: "20px" }}>
                <b>SI2-3 FG</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>375$</em>
              </div>

              <div style={{ fontSize: "20px" }}>
                <b>SI3-I1 FG</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>325$</em>
              </div>
              <div style={{ fontSize: "20px" }}>
                <b>I1 FG</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>275$</em>
              </div>
              <br />
              <div style={{ fontSize: "20px" }}>
                <b>GH/VVS-VS</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>450$</em>
              </div>
              <div style={{ fontSize: "20px" }}>
                <b>GH/VS</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>400$</em>
              </div>

              <div style={{ fontSize: "20px" }}>
                <b>GH/VS-SI</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>375$</em>
              </div>
              <div style={{ fontSize: "20px" }}>
                <b>GH/SI</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>325$ </em>
              </div>

              <div style={{ fontSize: "20px" }}>
                <b>GH/SI-I1</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>275$ </em>
              </div>

              <div style={{ fontSize: "20px" }}>
                <b>GH/I1</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>250$ </em>
              </div>
              <br />
              <div style={{ fontSize: "20px" }}>
                <b>HI/VVS-VS</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>400$ </em>
              </div>
              <div style={{ fontSize: "20px" }}>
                <b>HI/VS</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>375$</em>
              </div>
              <div style={{ fontSize: "20px" }}>
                <b>HI/VS-SI</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>325$ </em>
              </div>

              <div style={{ fontSize: "20px" }}>
                <b>HI/SI1</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>300$ </em>
              </div>
              <div style={{ fontSize: "20px" }}>
                <b>HI/SI2-3</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>275$</em>
              </div>
              <div style={{ fontSize: "20px" }}>
                <b>HI/I1</b>
                <span> - </span> <em style={{ fontSize: "25px" }}>225$</em>
              </div>
              <br />
              <h5>PRICES MAY VARY ACCORDING TO THE MARKET </h5>
              <div style={{ paddingLeft: "20px" }}>
                <a href={resume} download>
                  <i className="fa fa-download"></i>Download Price list
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
