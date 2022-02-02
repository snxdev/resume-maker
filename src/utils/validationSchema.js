import * as Yup from "yup";

const educationSchema = Yup.object().shape({
  institute: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  year: Yup.number()
    .typeError("Invalid Year")
    .positive("Year Must be Positive")
    .integer("Year Must Be An Integer")
    .moreThan(1000, "Invalid  Year")
    .required("Required"),
  degree: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const experienceSchema = Yup.object().shape({
  company: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  year: Yup.string().required("Required"),
  desig: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const resumeSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  address: Yup.string().min(2, "Too Short!"),
  phone: Yup.string()
    .matches("^[0-9]*$", "Invalid Phone Number")
    .length(10, "Invalid Phone Number"),
  email: Yup.string().email("Invalid email"),
  objective: Yup.string().min(10, "Too Short!"),
  declaration: Yup.string().min(10, "Too Short!"),
  education: Yup.array().of(educationSchema).required(),
  experience: Yup.array().of(experienceSchema).required(),
});

export default resumeSchema;
