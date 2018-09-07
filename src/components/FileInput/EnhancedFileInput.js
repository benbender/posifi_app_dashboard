import withHandlers from "recompose/withHandlers";
import compose from "recompose/compose";
import { FileInput } from "./FileInput";

var enhance = compose(
  withHandlers({
    onFileChange: ({ onLoad }) => key => e => {
      const files = e.target.files;
      var goFiles = Array.from(files).map(file => {
        return {
          name: file.name,
          type: file.type.split("/")[0],
          fileUrl: window.URL.createObjectURL(file)
        };
      });
      if (files) {
        onLoad(goFiles);
      } else {
        alert("File uploaded is not valid.");
      }
    }
  })
);

export var EnhancedFileInput = enhance(FileInput);
EnhancedFileInput.displayName = "enhance(FileInput)";
