import { Field, ErrorMessage } from "formik";
import TagsInput from "react-tagsinput";
import "../../assets/styles/css/TagsInputStyles.css";

const FormikField = (props) => {
  if (props.type === "input") {
    return (
      <div className={props.className} key={props.key}>
        {/* label for field */}
        <label htmlFor={props.name}>
          {props.label} {props.required ? <sup>*</sup> : null}
        </label>

        {/* render field */}
        <Field
          name={props.name}
          placeholder={props.placeholder || props.label}
          className="form-control mb-2"
        />

        {/* display error */}
        <ErrorMessage name={props.name} />
      </div>
    );
  }
  if (props.type === "textarea") {
    return (
      <div className={props.className}>
        <label htmlFor={props.name}>{props.label}</label>
        <Field
          name={props.name}
          placeholder={props.label}
          className="form-control"
          rows="3"
          component="textarea"
        />
        <ErrorMessage name={props.name} />
      </div>
    );
  }
  if (props.type === "tags") {
    return (
      <div className="mt-3">
        <label htmlFor="skills">{props.label}</label>
        <TagsInput
          style={{ width: "100%" }}
          renderInput={props.render}
          value={props.values}
          onChange={props.onChange}
        />
        <ErrorMessage name="skills" />
      </div>
    );
  }
  if (props.type === "text") {
  } else {
    return null;
  }
};

export default FormikField;
