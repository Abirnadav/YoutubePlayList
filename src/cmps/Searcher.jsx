import React, { Component } from "react";
import { TextField } from "@material-ui/core";

export default class Searcher extends Component {
  state = {
    value: "",
  };
  handleSubmit = (ev) => {
    ev.preventDefault();
  };

  handleChange = (ev) => {
    this.setState({ value: ev.target.value });
  };
  render() {
    return (
      <form
        noValidate
        autoComplete="off"
        onSubmit={(ev) => this.handleSubmit(ev)}
      >
        <TextField
          id="standard-basic"
          label="Standard"
          onChange={(ev) => this.handleChange(ev)}
        />
      </form>
    );
  }
}
