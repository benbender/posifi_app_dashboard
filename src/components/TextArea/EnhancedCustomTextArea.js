import withHandlers from "recompose/withHandlers";
import compose from "recompose/compose";
import { CustomTextArea } from "./CustomTextArea";

var enhance = compose(
  withHandlers({
    onTextChange: ({ onChange }) => key => e => {
      console.log(key);
      onChange(key, e.target.value);
    }
  })
);

export var EnhancedCustomTextArea = enhance(CustomTextArea);
EnhancedCustomTextArea.displayName = "enhance(CustomTextArea)";
