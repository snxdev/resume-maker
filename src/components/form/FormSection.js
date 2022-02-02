import Personal from "./Personal";
import Others from "./Others";
import MultiInput from "../multiInput/MultiInput";
import { useFormikContext } from "formik";

const FormSection = ({ index }) => {
  const { values } = useFormikContext();

  switch (index) {
    case 0:
      return <Personal />;
    case 1:
      return (
        <MultiInput
          name="education"
          data={values.education}
          fields={[
            {
              type: "input",
              name: "institute",
              label: "Institute Name",
              required: true,
            },
            {
              type: "input",
              name: "year",
              label: "Year of Passing",
              required: true,
            },
            {
              type: "input",
              name: "degree",
              label: "Degree",
              required: true,
            },
          ]}
        />
      );
    case 2:
      return (
        <MultiInput
          name="experience"
          data={values.experience}
          fields={[
            {
              type: "input",
              name: "company",
              label: "Company Name",
              required: true,
            },
            {
              type: "input",
              name: "year",
              label: "Years of Experience",
              required: true,
            },
            {
              type: "input",
              name: "desig",
              label: "Designation",
              required: true,
            },
          ]}
        />
      );
    case 3:
      return <Others />;

    default:
      return null;
  }
};

export default FormSection;
