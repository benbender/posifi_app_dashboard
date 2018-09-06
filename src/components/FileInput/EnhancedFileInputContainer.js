import { connect } from "react-redux";
import { EnhancedFileInput } from "./EnhancedFileInput";
import { SET_FILE } from "../../state/actions";
var mapStateToProps = (state, ownProps) => ({
  value: ownProps.idType === "photo" ? state.imageName : state.audioName
});

var mapActionsToProps = {
  onLoad: (key, value, name) => ({
    type: SET_FILE,
    payload: { key, value, name }
  })
};

export var EnhancedFileInputContainer = connect(
  mapStateToProps,
  mapActionsToProps
)(EnhancedFileInput);
EnhancedFileInputContainer.displayName = "connect(EnhancedFileInput)";
