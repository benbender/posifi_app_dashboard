import withHandlers from "recompose/withHandlers";
import compose from "recompose/compose";
import { SaveButton } from "./SaveButton";

var enhance = compose(
  withHandlers({
    onClick: ({ upload }) => e => {
      upload();
    }
  })
);

export var EnhancedSaveButton = enhance(SaveButton);
EnhancedSaveButton.displayName = "enhance(SaveButton)";
