import React from "react";
import T from "prop-types";
import { Input } from "semantic-ui-react";

export var CustomInput = ({ key, onTextChange, value, label, placeholder }) => (
  <Input
    onChange={onTextChange(key)}
    value={value}
    label={label}
    placeholder={placeholder}
  />
);

CustomInput.propTypes = {
  value: T.string.isRequired,
  label: T.string,
  placeholder: T.string
};
