import { connect } from "react-redux";
import { EnhancedSaveButton } from "./EnhancedSaveButton";
import { SAVE_DATA_REQUEST } from "../../state/actions";
var mapStateToProps = state => ({
  loading: state.loading
});

var mapActionsToProps = {
  upload: () => ({
    type: SAVE_DATA_REQUEST
  })
};

export var EnhancedSaveButtonContainer = connect(
  mapStateToProps,
  mapActionsToProps
)(EnhancedSaveButton);
EnhancedSaveButtonContainer.displayName = "connect(EnhancedSaveButton)";
