import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

export default class Searcher extends Component {
  state = {
    value: "",
  };
  handleSubmit = (ev) => {
    ev.preventDefault();
    let { value } = this.state;
    this.props.handleSubmit(value);
  };

  handleChange = (ev) => {
    this.setState({ value: ev.target.value });
  };
  render() {
    return (
      <>
        <TextField
          autoComplete="off"
          onSubmit={(ev) => this.handleSubmit(ev)}
          placeholder="Search"
          id="standard-basic"
          label="Search"
          className="searcher-field"
          onChange={(ev) => this.handleChange(ev)}
        />

        <Button variant="outlined" onClick={(ev) => this.handleSubmit(ev)}>
          Search
        </Button>
      </>
    );
  }
}
