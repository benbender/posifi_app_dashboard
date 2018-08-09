import React from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import { EnhancedCustomInputContainer as CustomInput } from "../../components/Input";

export var MainInput = () => (
  <div className="MainInput">
    <CustomInput  key={"room"}label="Habitacion" placeholder="Search..." />
    <CustomInput key={"piece"} label="Obra" placeholder="Search..." />
    <Form>
      <TextArea placeholder="Tell us more" style={{ minHeight: 100 }} />
    </Form>
    <CustomInput label="Audio" action="Search" placeholder="Search..." />
    <CustomInput label="Imagen" action="Search" placeholder="Search..." />
    <Button>Click Here</Button>
  </div>
);
