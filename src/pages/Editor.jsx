import Header from "../components/header/Header";
import { useState, useRef } from "react";
import EditorForm from "../components/form/EditorForm";
import FormSection from "../components/form/FormSection";
import ButtonGroup from "../components/buttonGroup/ButtonGroup";
import { checkErrors, updateFormFields } from "../utils/validationFunction";

const Sections = [
  "Personal Details",
  "Education",
  "Work Experience",
  "Other Skills",
];

const Editor = () => {
  const [form, setForm] = useState(0);
  const formRef = useRef();

  const changeEditorSection = (index) => {
    setForm(index);
  };

  const generateResume = () => {
    formRef.current.submitForm();
  };

  const prevSection = () => {
    setForm(form - 1);
  };

  const nextSection = () => {
    // sets touch property of fields and runs validation checking
    updateFormFields(formRef, form);
    formRef.current.validateForm();

    if (form < Sections.length - 1 && checkErrors(formRef, form)) {
      setForm(form + 1);
    }
  };

  return (
    <>
      <Header
        active="editor"
        onClick={changeEditorSection}
        generate={generateResume}
      />
      <div className="container my-5">
        <h4 className="mb-4">{Sections[form]}</h4>
        <div className="dropdown-divider mb-4"></div>
        <EditorForm innerRef={formRef}>
          <FormSection index={form} />
          <ButtonGroup
            next={nextSection}
            prev={prevSection}
            submit={Sections.length - 1 === form}
            backbtn={form !== 0}
          />
        </EditorForm>
      </div>
    </>
  );
};

export default Editor;
