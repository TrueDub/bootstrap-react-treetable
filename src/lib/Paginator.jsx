import React from "react";
import PropTypes from 'prop-types';

class Paginator extends React.Component {

    performCalculations(currentPage, tableLength) {
        let totalNumberOfPages = Math.ceil(tableLength / this.props.rowsPerPage);
        let firstValue = 1;
        let previousValue = currentPage - 1 < 1 ? 1 : currentPage - 1;
        let pos1Value = 1;
        let pos2Value = 2;
        let pos3Value = 3;
        let pos4Value = 4;
        let pos5Value = 5;
        let nextValue = currentPage + 1;
        let lastValue = totalNumberOfPages;
        if (currentPage > 3) {
            previousValue = currentPage - 1;
            pos1Value = currentPage - 2;
            pos2Value = currentPage - 1;
            pos3Value = currentPage;
            pos4Value = currentPage + 1;
            pos5Value = currentPage + 2;
            nextValue = currentPage + 1;
        }
        if (totalNumberOfPages - currentPage === 0) {
            previousValue = currentPage - 1;
            pos1Value = currentPage - 4;
            pos2Value = currentPage - 3;
            pos3Value = currentPage - 2;
            pos4Value = currentPage - 1;
            pos5Value = currentPage;
            nextValue = currentPage + 1;
        } else if (totalNumberOfPages - currentPage === 1) {
            previousValue = currentPage - 1;
            pos1Value = currentPage - 3;
            pos2Value = currentPage - 2;
            pos3Value = currentPage - 1;
            pos4Value = currentPage;
            pos5Value = currentPage + 1;
            nextValue = currentPage + 1;
        }
        return {
            firstValue: firstValue,
            firstClasses: this.defineExtraItemClasses(currentPage, totalNumberOfPages, 'first'),
            previousValue: previousValue,
            previousClasses: this.defineExtraItemClasses(currentPage, totalNumberOfPages, 'previous'),
            pos1Value: pos1Value,
            pos1Classes: this.defineListItemClasses(pos1Value, currentPage, totalNumberOfPages),
            pos2Value: pos2Value,
            pos2Classes: this.defineListItemClasses(pos2Value, currentPage, totalNumberOfPages),
            pos3Value: pos3Value,
            pos3Classes: this.defineListItemClasses(pos3Value, currentPage, totalNumberOfPages),
            pos4Value: pos4Value,
            pos4Classes: this.defineListItemClasses(pos4Value, currentPage, totalNumberOfPages),
            pos5Value: pos5Value,
            pos5Classes: this.defineListItemClasses(pos5Value, currentPage, totalNumberOfPages),
            nextValue: nextValue,
            nextClasses: this.defineExtraItemClasses(currentPage, totalNumberOfPages, 'next'),
            lastValue: lastValue,
            lastClasses: this.defineExtraItemClasses(currentPage, totalNumberOfPages, 'last'),
            totalNumberOfPages: totalNumberOfPages
        }
    }

    defineExtraItemClasses(currentPage, totalNumberOfPages, type) {
        let classes = 'page-item'; //default class.
        if (type === 'first' || type === 'previous') {
            if (currentPage === 1) {
                classes += ' disabled';
            }
        } else if (type === 'next' || type === 'last') {
            if (currentPage === totalNumberOfPages) {
                classes += '  disabled';
            }
        }
        return classes;
    }

    defineListItemClasses(posValue, currentPage, totalNumberOfPages) {
        let classes = 'page-item'; //default class.
        if (posValue <= 0 || posValue > totalNumberOfPages) {
            classes += ' disabled hidden';
        }
        if (posValue === currentPage) {
            classes += ' active';
        }
        return classes;
    }


    render() {
        const paginatorData = this.performCalculations(this.props.currentPage, this.props.tableLength);
        return (
            <nav>
                <ul className='pagination'>
                    <li className={paginatorData.firstClasses}>
                        <a href="#!" className='page-link'
                           onClick={this.props.rowMover.bind(null, paginatorData.firstValue)}> First </a>
                    </li>
                    <li className={paginatorData.previousClasses}>
                        <a href="#!" className='page-link'
                           onClick={this.props.rowMover.bind(null, paginatorData.previousValue)}>Previous </a>
                    </li>
                    <li className={paginatorData.pos1Classes}>
                        <a href="#!" className='page-link'
                           onClick={this.props.rowMover.bind(null, paginatorData.pos1Value)}>{paginatorData.pos1Value}</a>
                    </li>
                    <li className={paginatorData.pos2Classes}>
                        <a href="#!" className='page-link'
                           onClick={this.props.rowMover.bind(null, paginatorData.pos2Value)}>{paginatorData.pos2Value}</a>
                    </li>
                    <li className={paginatorData.pos3Classes}>
                        <a href="#!" className='page-link'
                           onClick={this.props.rowMover.bind(null, paginatorData.pos3Value)}>{paginatorData.pos3Value}</a>
                    </li>
                    <li className={paginatorData.pos4Classes}>
                        <a href="#!" className='page-link'
                           onClick={this.props.rowMover.bind(null, paginatorData.pos4Value)}>{paginatorData.pos4Value}</a>
                    </li>
                    <li className={paginatorData.pos5Classes}>
                        <a href="#!" className='page-link'
                           onClick={this.props.rowMover.bind(null, paginatorData.pos5Value)}>{paginatorData.pos5Value}</a>
                    </li>
                    <li className={paginatorData.nextClasses}>
                        <a href="#!" className='page-link'
                           onClick={this.props.rowMover.bind(null, paginatorData.nextValue)}>Next </a>
                    </li>
                    <li className={paginatorData.lastClasses}>
                        <a href="#!" className='page-link'
                           onClick={this.props.rowMover.bind(null, paginatorData.lastValue)}>Last </a>
                    </li>
                    <li className={'page-item disabled'}><span
                        className='page-link'>Showing {this.props.displayStartRow} to {this.props.displayEndRow} of {this.props.displayTotal} records <span
                        className={this.props.displayFiltered ? 'shown' : 'hidden'}>(filtered from {this.props.displayOverallTotal})</span></span>
                    </li>
                </ul>
            </nav>
        );
    }
}

Paginator.propTypes = {
    currentPage: PropTypes.number,
    tableLength: PropTypes.number,
    rowsPerPage: PropTypes.number,
    rowMover: PropTypes.func,
    displayStartRow: PropTypes.number,
    displayEndRow: PropTypes.number,
    displayTotal: PropTypes.number,
    displayFiltered: PropTypes.bool,
    displayOverallTotal: PropTypes.number
};

export default Paginator;
