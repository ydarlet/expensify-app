import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../actions/modal';
import Modal from 'react-modal';

export class DeleteExpenseModal extends React.Component {
    render () {
        return (
            <Modal
                isOpen={this.props.modal === true}
                onRequestClose={this.props.closeModal}
                contentLabel="Delete Expense"
                closeTimeoutMS={200}
                className="modal"
                shouldCloseOnEsc={true}
                shouldReturnFocusAfterClose={true}
            >
                <div className="box-layout box-layout--no-background">
                    <div className="box-layout__box box-layout__box--dark-blue box-layout__box--delete-expense">
                        <div>
                            <h3 className="modal-title">Are you sure ?</h3>
                            <p>You will not be able to recover this expense.</p>
                            <button 
                                className="button button--secondary button--margin-right" 
                                onClick={this.props.closeModal}
                            >
                                Cancel
                            </button>
                            <button 
                                className="button button--confirm"
                                onClick={this.props.onRemoveExpense}
                            >
                                Yes, delete it!
                            </button>
                        </div>
                    </div>
                </div>

            </Modal>
        );
    };
};

const mapStateToProps = (state, props) => ({
    modal: state.modal
});

const mapDispatchToProps = (dispatch, props) => ({
    openModal: () => dispatch(openModal(true)),
    closeModal: () => dispatch(closeModal(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteExpenseModal);