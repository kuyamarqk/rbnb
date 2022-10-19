import { connect } from "react-redux";
import { create, receiveErrors, clearErrors } from "../../actions/restaurant_actions";
import RestaurantForm from "./restaurant_form";

import { openModal, closeModal } from "../../actions/modal_actions";


const mSTP = ({errors}) => {
  return {
    errors: errors.session,
    formType: "Add Restaurant",
  };
};

const mDTP = dispatch => {
  return {
    action: (rest) => dispatch(create(rest)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(RestaurantForm);
