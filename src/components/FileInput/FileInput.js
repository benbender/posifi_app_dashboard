import React from "react";
import { Input, Label, Icon } from "semantic-ui-react";

export var FileInput = ({
  className,
  idType,
  icon,
  onFileChange,
  text,
  value,
  placeholder
}) => (
  <div className={className}>
    <Input value={value} placeholder={placeholder} />
    <Label width="4" as="label" htmlFor="file" size="big">
      <Icon name={icon} />
      {text}
    </Label>
    <input onChange={onFileChange(idType)} hidden id="file" type="file" />
  </div>
);
