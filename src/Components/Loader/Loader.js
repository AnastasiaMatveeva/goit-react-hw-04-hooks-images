import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class Loaders extends Component {
  render() {
    return (
      <div className="Loader">
        <Loader type="Hearts" color="#00BFFF" height={50} width={50} />
      </div>
    );
  }
}
