const updateFormFields = (formRef, index) => {
  switch (index) {
    case 0:
      formRef.current.setFieldTouched("name", true);
      formRef.current.setFieldTouched("email", true);
      formRef.current.setFieldTouched("phone", true);
      formRef.current.setFieldTouched("address", true);
      break;
    case 1:
      formRef.current.values.education.map((obj, index) => {
        formRef.current.setFieldTouched(`education[${index}].institute`, true);
        formRef.current.setFieldTouched(`education[${index}].year`, true);
        formRef.current.setFieldTouched(`education[${index}].degree`, true);
        return true;
      });
      break;
    case 2:
      formRef.current.values.experience.map((obj, index) => {
        formRef.current.setFieldTouched(`experience[${index}].company`, true);
        formRef.current.setFieldTouched(`experience[${index}].year`, true);
        formRef.current.setFieldTouched(`experience[${index}].desig`, true);
        return true;
      });
      break;
    default:
      break;
  }
};

const checkErrors = (formRef, index) => {
  const errors = Object.keys(formRef.current.errors);
  switch (index) {
    case 0:
      if (
        errors.includes("name") ||
        errors.includes("email") ||
        errors.includes("phone") ||
        errors.includes("address")
      ) {
        return false;
      } else return true;
    case 1:
      if (errors.includes("education")) {
        return false;
      } else return true;
    case 2:
      if (errors.includes("experience")) {
        return false;
      } else return true;
    default:
      return false;
  }
};

export { checkErrors, updateFormFields };
