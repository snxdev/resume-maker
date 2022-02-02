import { Formik, Form } from "formik";
import { useState, useEffect } from "react";
import resumeSchema from "../../utils/validationSchema";

const EditorForm = (props) => {
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
    // check local storage for saved data
    const resumeData = JSON.parse(localStorage.getItem("resumeData"));
    if (resumeData) setFormValues(resumeData);
  }, []);

  return (
    <Formik
      innerRef={props.innerRef}
      enableReinitialize={true}
      initialValues={formValues}
      validationSchema={resumeSchema}
      validateOnBlur={true}
      validateOnMount={true}
      onSubmit={(values) =>
        setTimeout(() => {
          const json = JSON.stringify(values);
          localStorage.setItem("resumeData", json);
        }, 500)
      }
      render={({ values }) => <Form>{props.children}</Form>}
    />
  );
};

export default EditorForm;
