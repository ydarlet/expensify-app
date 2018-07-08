import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses'
import { openModal, closeModal } from '../actions/modal';
import DeleteExpenseModal from './DeleteExpenseModal';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemoveExpense = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.closeModal();
        this.props.history.push('/');
    };
    render () {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button
                        className="button button--secondary"
                        onClick={this.props.openModal}
                    >
                        Remove Expense
                    </button>
                    <DeleteExpenseModal 
                        onRemoveExpense={this.onRemoveExpense}
                    />
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
    modal: state.modal
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
    openModal: () => dispatch(openModal(true)),
    closeModal: () => dispatch(closeModal(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);