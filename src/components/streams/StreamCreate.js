import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  // show error after touch and still empty
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        {/* ES6 syntax - takes all key/val pairs and adds them as props */}
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    // semantic ui - form must have class error to show error messages
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        {/* Field passes additional props to component */}
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  // invalid form
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  // valid form returns empty object
  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);
