import { FieldArray } from "formik";
import FormikField from "./FormikField";

const MultiInput = (props) => {
  return (
    <FieldArray
      name={props.name}
      render={(arrayHelpers) => (
        <div className="container">
          {/* maps formik state data */}
          {props.data.map((obj, index) => (
            <div key={index} className="row my-3">
              {/* maps fields to formik Field Component */}
              {props.fields.map((field, fieldIndex) => (
                <FormikField
                  key={fieldIndex}
                  type={field.type}
                  name={`${props.name}[${index}].${field.name}`}
                  label={field.label}
                  required={field.required}
                  className="col-md col-sm-12"
                />
              ))}

              {/* remove button for extra added fields only */}
              {index > 0 ? (
                <div className="col-1 mt-md-2">
                  <button
                    className="btn btn-danger mt-md-4"
                    type="button"
                    onClick={() => arrayHelpers.remove(index)}
                  >
                    X
                  </button>
                </div>
              ) : (
                <div className="col-1 mt-md-2" />
              )}
            </div>
          ))}

          {/* add more fields */}
          <button
            className="btn btn-primary "
            type="button"
            onClick={() => arrayHelpers.push(props.initalData)}
          >
            Add More
          </button>
        </div>
      )}
    />
  );
};

export default MultiInput;
