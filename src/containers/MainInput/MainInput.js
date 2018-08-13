import React from "react";
import { Form, Button, Grid } from "semantic-ui-react";
import { EnhancedCustomInputContainer as CustomInput } from "../../components/Input";
import { EnhancedCustomTextAreaContainer as CustomTextArea } from "../../components/TextArea";
import { EnhancedFileInputContainer as FileInput } from "../../components/FileInput";
export var MainInput = () => (
  <div className="MainInput">
    <Grid columns={1} divided>
      <Grid.Row>
        <Grid.Column>
          <CustomInput
            id={"room"}
            label="Habitacion"
            placeholder="Habitacion..."
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <CustomInput id={"piece"} label="Obra" placeholder="Obra..." />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Form>
            <CustomTextArea
              id={"description"}
              placeholder="Descripcion"
              style={{ minHeight: 100 }}
            />
          </Form>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <FileInput
            placeholder={"Foto"}
            id={"photo"}
            icon={"image"}
            text={"Elegir Image"}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <FileInput
            placeholder={"Audio"}
            id={"audio"}
            icon={"headphones"}
            text={"Elegir Audio"}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Button>Subir Informacion</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);
