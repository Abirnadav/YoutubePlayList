import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

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
        className="searcher-form"
      >
        <TextField
          placeholder="Search"
          id="standard-basic"
          label="Standard"
          onChange={(ev) => this.handleChange(ev)}
        />

        <Button variant="outlined">Search</Button>
      </form>
    );
  }
}
