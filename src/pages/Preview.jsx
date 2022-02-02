import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Preview = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    objective: "",
    declaration: "",
    education: [{ institute: "", year: "", degree: "" }],
    experience: [{ company: "", year: "", desig: "" }],
    skills: [],
  });

  useEffect(() => {
    // fetch data from localstorage
    const resumeData = JSON.parse(localStorage.getItem("resumeData"));
    if (resumeData) setFormValues(resumeData);
  }, []);

  return (
    <div>
      <Link class="btn btn-link text-light mt-1" to="/editor">
        Back To Editor
      </Link>
      <page>
        {/* Header Start*/}
        <h1 className="text-uppercase mb-3 text-dark">{formValues.name}</h1>
        <div className="font-weight-light">
          {formValues.email ? (
            <span className="mr-3">
              <b>Email:</b> {formValues.email}
            </span>
          ) : null}
          {formValues.phone ? (
            <span className="mr-3">
              <b>Phone:</b> {formValues.phone}
            </span>
          ) : null}
        </div>

        {formValues.address ? (
          <pre className="mt-3">{formValues.address}</pre>
        ) : null}
        {/* Header END*/}

        {/* Objectives */}
        {formValues.objective ? (
          <div className="mt-5">
            <h5 className="text-primary">Objectives</h5>

            <p className="mt-3 mx-auto">{formValues.objective}</p>
          </div>
        ) : null}

        {/* Skills */}
        {formValues.skills.length !== 0 ? (
          <div className="mt-5">
            <h5 className="text-primary">Skills</h5>
            <div className="mt-3 mx-auto">
              {formValues.skills.map((skill, skillIndex) =>
                formValues.skills.indexOf(skill) ===
                formValues.skills.length - 1 ? (
                  <span key={skillIndex}>{skill}</span>
                ) : (
                  <span key={skillIndex}>{skill}, </span>
                )
              )}
            </div>
          </div>
        ) : null}

        {/* Experience */}
        <div className="mt-5">
          <h5 className="text-primary">Experience</h5>
          <ul className="mt-3  mx-auto">
            {formValues.experience.map((obj, index) => (
              <li className="my-3" key={index}>
                <b className="mr-1">{obj.company}</b>
                <span className="text-secondary mr-2">({obj.year})</span>
                <span className="text-secondary">{obj.desig}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div className="mt-5">
          <h5 className="text-primary">Education</h5>
          <ul className="mt-3  mx-auto">
            {formValues.education.map((obj, index) => (
              <li className="my-3" key={index}>
                <b className="mr-1">{obj.institute}</b>
                <span className="text-secondary mr-2">({obj.year})</span>
                <span className="text-secondary">{obj.degree}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Declaration */}
        {formValues.declaration ? (
          <div className="mt-5">
            <h5 className="text-primary">Declaration</h5>
            <p className="mt-3 mx-auto">{formValues.declaration}</p>
          </div>
        ) : null}

        {/* Footer */}
        {formValues.declaration ? (
          <div className="mt-5">
            <h4 className="text-dark mr-5 float-right">{formValues.name}</h4>
          </div>
        ) : null}
      </page>
    </div>
  );
};

export default Preview;
