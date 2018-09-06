import React from "react";
import { Form } from "semantic-ui-react";
import { EnhancedCustomInputContainer as CustomInput } from "../../components/Input";
import { EnhancedCustomTextAreaContainer as CustomTextArea } from "../../components/TextArea";
import { EnhancedFileInputContainer as FileInput } from "../../components/FileInput";
import { EnhancedSaveButtonContainer as Button } from "../../components/SaveButton";
export var MainInput = () => (
  <div className="MainInput">
    {"Pagina para subir informacion de Obras"}
    <hr />
    <CustomInput
      className={"CustomInput"}
      id={"room"}
      label="Habitacion"
      placeholder="Habitacion..."
    />

    <CustomInput
      className={"CustomInput"}
      id={"piece"}
      label="Obra"
      placeholder="Obra..."
    />

    <Form>
      <CustomTextArea
        id={"description"}
        placeholder="Descripcion"
        style={{ minHeight: 100 }}
      />
    </Form>

    <FileInput
      className={"FileInput"}
      placeholder={"Foto"}
      idType={"photo"}
      icon={"image"}
      text={"Elegir Imagen"}
    />

    <FileInput
      className={"FileInput"}
      placeholder={"Audio"}
      idType={"audio"}
      icon={"headphones"}
      text={"Elegir Audio"}
    />

    <Button>Subir Informacion</Button>
  </div>
);
