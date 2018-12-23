import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        {/* ES6 syntax - takes all key/val pairs and adds them as props */}
        <input {...input} />
      </div>
    );
  }

  // Field passes additional props to component
  render() {
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
