import React from "react";
import { Input, Label, Icon } from "semantic-ui-react";

export var FileInput = ({ id, icon, onFileChange, text, placeholder }) => (
  <div>
    <Input placeholder={placeholder} />
    <Label width="4" as="label" htmlFor="file" size="big">
      <Icon name={icon} />
      {text}
    </Label>
    <input onChange={onFileChange(id)} hidden id="file" type="file" />
  </div>
);
