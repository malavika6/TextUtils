import { type } from "@testing-library/user-event/dist/type";
import React from "react";

export default function (props) {
  return (
    props.alert && (
      <div className={'alert alert-${props.alert.type} alert-dismissible fade show'} role="alert">
        <strong>{props.alert.type}</strong>:{props.alert.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}
