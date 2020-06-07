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
    console.log("Searcher -> handleSubmit -> value", value);
    this.props.handleSubmit(value);
  };

  handleChange = (ev) => {
    console.log("Searcher -> handleChange -> ev.target.value", ev.target.value);
    this.setState({ value: ev.target.value });
  };
  render() {
    return (
      <div className="searcher-form flex align-end justify-center">
        <TextField
          autoComplete="off"
          onSubmit={(ev) => this.handleSubmit(ev)}
          label="Search"
          id="standard-basic"
          placeholder="Enter your song name"
          className="searcher-field"
          onChange={(ev) => this.handleChange(ev)}
        />

        <Button variant="outlined" onClick={(ev) => this.handleSubmit(ev)}>
          Search
        </Button>
      </div>
    );
  }
}
