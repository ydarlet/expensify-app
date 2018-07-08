import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import expensesNbr from '../selectors/expenses-nbr';

export const ExpensesSummary = ({ expenseCount, expensesTotal, expensesNbr }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const expensesNotShowingNbr = expensesNbr - expenseCount;
    const expensesNotShowingWord = expensesNotShowingNbr === 1 ? 'expense' : 'expenses';
    const expensesNotShowingSentence = `Not showing ${expensesNotShowingNbr} ${expensesNotShowingWord} because of filters.`;
    const formatedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 
                    className="page-header__title">Viewing 
                    <span> {expenseCount}</span> {expenseWord} totalling 
                    <span> {formatedExpensesTotal}</span>
                </h1>
                <h5 className="page-header__sub-title">
                {
                    expensesNotShowingNbr == 0 ? (
                        'Showing all expenses, no filters in place.'
                    ) : expensesNotShowingSentence
                }
                </h5>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div> 
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        expensesNbr: expensesNbr(state.expenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);