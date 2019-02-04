import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FaTrash from "react-icons/lib/fa/trash";
import "./CardOptions.scss";

class CardOptions extends Component {
  static propTypes = {
    card: PropTypes.shape({ _id: PropTypes.string.isRequired }).isRequired,
    listId: PropTypes.string.isRequired,
    isCardNearRightBorder: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  deleteCard = () => {
    const { dispatch, listId, card } = this.props;
    dispatch({
      type: "DELETE_CARD",
      payload: { cardId: card._id, listId }
    });
  };

  render() {
    const { isCardNearRightBorder } = this.props;

    return (
      <div
        className="options-list"
        style={{
          alignItems: isCardNearRightBorder ? "flex-end" : "flex-start"
        }}
      >
        <div>
          <button onClick={this.deleteCard} className="options-list-button">
            <div className="modal-icon">
              <FaTrash />
            </div>
            &nbsp;Delete
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(CardOptions);
