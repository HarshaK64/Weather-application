import PropTypes from "prop-types";

const FormContainer = ({
  placeholder,
  onChange,
  value,
  handleSubmit,
  buttonName,
  title
}) => {
  return (
    <div className="form-container">
      <h1 className="title">{title}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button type="submit">{buttonName}</button>
      </form>
    </div>
  );
};

FormContainer.propTypes = {
  placeholder: PropTypes.string,
  title: PropTypes.string,
  handleSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  buttonName: PropTypes.string
};

export default FormContainer;
