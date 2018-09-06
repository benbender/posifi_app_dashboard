import { connect } from "react-redux";
import { EnhancedSaveButton } from "./EnhancedSaveButton";
import { SAVE_DATA } from "../../state/actions";
var mapStateToProps = state => ({
  loading: state.loading
});

var mapActionsToProps = {
  login: () => ({
    type: SAVE_DATA
  })
};

export var EnhancedSaveButtonContainer = connect(
  mapStateToProps,
  mapActionsToProps
)(EnhancedSaveButton);
EnhancedSaveButtonContainer.displayName = "connect(EnhancedSaveButton)";
