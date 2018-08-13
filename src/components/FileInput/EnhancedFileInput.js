import withHandlers from "recompose/withHandlers";
import compose from "recompose/compose";
import { FileInput } from "./FileInput";

var enhance = compose(
  withHandlers({
    onFileChange: ({ onLoad }) => key => e => {
      const file = e.target.files[0];
      if (file) {
        const localImageUrl = window.URL.createObjectURL(file);
        onLoad(key, localImageUrl);
      } else {
        alert("File uploaded is not valid.");
      }
    }
  })
);

export var EnhancedFileInput = enhance(FileInput);
EnhancedFileInput.displayName = "enhance(FileInput)";
