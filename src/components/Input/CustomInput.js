import React from "react";
import T from "prop-types";
import { Input } from "semantic-ui-react";

export var CustomInput = ({ id, onTextChange, value, label, placeholder }) => (
  <Input
    onChange={onTextChange(id)}
    value={value}
    label={label}
    placeholder={placeholder}
  />
);

CustomInput.propTypes = {
  value: T.string,
  label: T.string,
  placeholder: T.string
};
