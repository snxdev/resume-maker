import FormikField from "../multiInput/FormikField";

const Personal = () => {
  return (
    <div className="container">
      <div className="row">
        <FormikField
          className="col-md col-sm-12"
          name="name"
          type="input"
          label="Full Name"
          placeholder="eg: Jhon Doe"
          required
        />
      </div>

      <div className="row my-4">
        <FormikField
          className="col-md col-sm-12"
          name="email"
          type="input"
          label="Email"
          placeholder="jhon@example.com"
        />
        <FormikField
          className="col-md col-sm-12"
          name="phone"
          type="input"
          label="Phone"
          placeholder="+(91) 000 - 0000000"
        />
      </div>

      <div className="row">
        <FormikField
          className="col-md col-sm-12"
          name="address"
          type="textarea"
          label="Address"
        />
      </div>
    </div>
  );
};

export default Personal;
