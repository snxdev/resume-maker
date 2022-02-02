import { useFormikContext } from "formik";

const ButtonGroup = (props) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
    setTimeout(() => {
      window.location.href = "/preview";
    }, 700);
  };

  return (
    <>
      {props.submit ? (
        <button
          className="btn btn-dark my-4 float-right"
          onClick={handleSubmit}
        >
          Generate Resume
        </button>
      ) : (
        <div className="btn btn-dark my-4 float-right" onClick={props.next}>
          Next
        </div>
      )}

      {props.backbtn ? (
        <div
          className="btn btn-outline-secondary my-4 mr-2 float-right"
          onClick={props.prev}
        >
          Back
        </div>
      ) : null}
    </>
  );
};

export default ButtonGroup;
