import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        onClick={this.props.onLike}
        className={classes}
        aria-hidden='true'
        style={{ cursor: "pointer" }}
      ></i>
    );
  }
}

export default Like;
