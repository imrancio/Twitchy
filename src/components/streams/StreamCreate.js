import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    return (
      <div className="field">
        <label>{label}</label>
        {/* ES6 syntax - takes all key/val pairs and adds them as props */}
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
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
