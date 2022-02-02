import { useFormikContext } from "formik";
import FormikField from "../multiInput/FormikField";
import SkillsInput from "../skillsInput/SkillsInput";

const Others = () => {
  const { values, setFieldValue } = useFormikContext();

  const handleChanges = (skills) => {
    setFieldValue("skills", skills);
  };

  return (
    <div className="container">
      <FormikField type="textarea" name="objective" label="Objective" />
      <FormikField
        type="tags"
        render={SkillsInput}
        label="Skills"
        values={values.skills}
        onChange={handleChanges}
      />
      <FormikField
        type="textarea"
        name="declaration"
        label="Declaration"
        className="mt-3"
      />
    </div>
  );
};

export default Others;
