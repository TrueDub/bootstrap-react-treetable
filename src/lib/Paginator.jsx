import React from "react";
import PropTypes from 'prop-types';

class Paginator extends React.Component {

    constructor(props) {
        super(props);
        let data = this.performCalcs(this.props.currentPage, this.props.tableLength);
        this.state = {
            firstValue: data.firstValue,
            previousValue: data.previousValue,
            pos1Value: data.pos1Value,
            pos2Value: data.pos2Value,
            pos3Value: data.pos3Value,
            pos4Value: data.pos4Value,
            pos5Value: data.pos5Value,
            nextValue: data.nextValue,
            lastValue: data.lastValue,
            firstClasses: data.firstClasses,
            previousClasses: data.previousClasses,
            pos1Classes: data.pos1Classes,
            pos2Classes: data.pos2Classes,
            pos3Classes: data.pos3Classes,
            pos4Classes: data.pos4Classes,
            pos5Classes: data.pos5Classes,
            nextClasses: data.nextClasses,
            lastClasses: data.lastClasses,
            totalNumberOfPages: data.totalNumberOfPages,
            displayStartRow: this.props.displayStartRow,
            displayEndRow: this.props.displayEndRow,
            displayTotal: this.props.displayTotal,
            displayFiltered: this.props.displayFiltered,
            displayOverallTotal: this.props.displayOverallTotal
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        let data = this.performCalcs(nextProps.currentPage, nextProps.tableLength);
        this.setState({
            firstValue: data.firstValue,
            previousValue: data.previousValue,
            pos1Value: data.pos1Value,
            pos2Value: data.pos2Value,
            pos3Value: data.pos3Value,
            pos4Value: data.pos4Value,
            pos5Value: data.pos5Value,
            nextValue: data.nextValue,
            lastValue: data.lastValue,
            totalNumberOfPages: data.totalNumberOfPages,
            //currentPage: data.currentPage,
            firstClasses: data.firstClasses,
            previousClasses: data.previousClasses,
            pos1Classes: data.pos1Classes,
            pos2Classes: data.pos2Classes,
            pos3Classes: data.pos3Classes,
            pos4Classes: data.pos4Classes,
            pos5Classes: data.pos5Classes,
            nextClasses: data.nextClasses,
            lastClasses: data.lastClasses,
            displayStartRow: nextProps.displayStartRow,
            displayEndRow: nextProps.displayEndRow,
            displayTotal: nextProps.displayTotal,
            displayFiltered: nextProps.displayFiltered,
            displayOverallTotal: nextProps.displayOverallTotal
        });
    }

    performCalcs(currentPage, tableLength) {
        let totalNumberOfPages = Math.ceil(tableLength / this.props.rowsPerPage);
        let firstValue = 1;
        let previousValue = 1;
        let pos1Value = 1;
        let pos2Value = 2;
        let pos3Value = 3;
        let pos4Value = 4;
        let pos5Value = 5;
        let nextValue = 2;
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
        return (
            <nav>
                <ul className='pagination'>
                    <li className={this.state.firstClasses}>
                        <a href="#!" className='page-link'
                           onClick={this.props.rowMover.bind(null, this.state.firstValue)}> First </a>
                    </li>
                    <li className={this.state.previousClasses}>
                        <a href="#!" className='page-link'
                           onClick={this.props.rowMover.bind(null, this.state.previousValue)}>Previous </a>
                    </li>
                    <li className={this.state.pos1Classes}>
                        <a href="#!" className='page-link'
                           onClick={this.props.rowMover.bind(null, this.state.pos1Value)}>{this.state.pos1Value}</a>
                    </li>
                    <li className={this.state.pos2Classes}>
                        <a href="#!" className='page-link'
                           onClick={this.props.rowMover.bind(null, this.state.pos2Value)}>{this.state.pos2Value}</a>
                    </li>
                    <li className={this.state.pos3Classes}>
                        <a href="#!" className='page-link'
                           onClick={this.props.rowMover.bind(null, this.state.pos3Value)}>{this.state.pos3Value}</a>
                    </li>
                    <li className={this.state.pos4Classes}>
                        <a href="#!" className='page-link'
                           onClick={this.props.rowMover.bind(null, this.state.pos4Value)}>{this.state.pos4Value}</a>
                    </li>
                    <li className={this.state.pos5Classes}>
                        <a href="#!" className='page-link'
                           onClick={this.props.rowMover.bind(null, this.state.pos5Value)}>{this.state.pos5Value}</a>
                    </li>
                    <li className={this.state.nextClasses}>
                        <a href="#!" className='page-link'
                           onClick={this.props.rowMover.bind(null, this.state.nextValue)}>Next </a>
                    </li>
                    <li className={this.state.lastClasses}>
                        <a href="#!" className='page-link'
                           onClick={this.props.rowMover.bind(null, this.state.lastValue)}>Last </a>
                    </li>
                    <li className={'page-item disabled'}><span
                        className='page-link'>Showing {this.state.displayStartRow} to {this.state.displayEndRow} of {this.state.displayTotal} records <span
                        className={this.state.displayFiltered ? 'shown' : 'hidden'}>(filtered from {this.state.displayOverallTotal})</span></span>
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