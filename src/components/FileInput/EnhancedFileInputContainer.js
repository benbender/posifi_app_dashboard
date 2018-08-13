import { connect } from "react-redux";
import { EnhancedFileInput } from "./EnhancedFileInput";
import { SET_INPUT } from "../../state/actions";
var mapStateToProps = () => ({});

var mapActionsToProps = {
  onLoad: (key, value) => ({
    type: SET_INPUT,
    payload: { key, value }
  })
};

export var EnhancedFileInputContainer = connect(
  mapStateToProps,
  mapActionsToProps
)(EnhancedFileInput);
EnhancedFileInputContainer.displayName = "connect(EnhancedFileInput)";
