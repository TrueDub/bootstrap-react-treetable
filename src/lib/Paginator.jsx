import React from "react";
import PropTypes from 'prop-types';

class Paginator extends React.Component {

    constructor(props) {
        super(props);
        let data = this.performCalcs(this.props.currentPage, this.props.tableLength);
        this.state = {
            pos1Value: data.pos1Value,
            pos2Value: data.pos2Value,
            pos3Value: data.pos3Value,
            pos4Value: data.pos4Value,
            pos5Value: data.pos5Value,
            pos1Classes: data.pos1Classes,
            pos2Classes: data.pos2Classes,
            pos3Classes: data.pos3Classes,
            pos4Classes: data.pos4Classes,
            pos5Classes: data.pos5Classes,
            totalNumberOfPages: data.totalNumberOfPages,
            displayStartRow: this.props.displayStartRow,
            displayEndRow: this.props.displayEndRow,
            displayTotal: this.props.displayTotal,
            displayFiltered: this.props.displayFiltered,
            displayOverallTotal: this.props.displayOverallTotal
        }
    }

    componentWillReceiveProps(nextProps) {
        let data = this.performCalcs(nextProps.currentPage, nextProps.tableLength);
        this.setState({
            pos1Value: data.pos1Value,
            pos2Value: data.pos2Value,
            pos3Value: data.pos3Value,
            pos4Value: data.pos4Value,
            pos5Value: data.pos5Value,
            totalNumberOfPages: data.totalNumberOfPages,
            currentPage: data.currentPage,
            pos1Classes: this.defineListItemClasses(data.pos1Value, data.currentPage, data.totalNumberOfPages),
            pos2Classes: this.defineListItemClasses(data.pos2Value, data.currentPage, data.totalNumberOfPages),
            pos3Classes: this.defineListItemClasses(data.pos3Value, data.currentPage, data.totalNumberOfPages),
            pos4Classes: this.defineListItemClasses(data.pos4Value, data.currentPage, data.totalNumberOfPages),
            pos5Classes: this.defineListItemClasses(data.pos5Value, data.currentPage, data.totalNumberOfPages),
            displayStartRow: nextProps.displayStartRow,
            displayEndRow: nextProps.displayEndRow,
            displayTotal: nextProps.displayTotal,
            displayFiltered: nextProps.displayFiltered,
            displayOverallTotal: nextProps.displayOverallTotal
        });
    }

    performCalcs(currentPage, tableLength) {
        let pos1Value = 1;
        let pos2Value = 2;
        let pos3Value = 3;
        let pos4Value = 4;
        let pos5Value = 5;
        if (currentPage > 3) {
            pos1Value = currentPage - 2;
            pos2Value = currentPage - 1;
            pos3Value = currentPage;
            pos4Value = currentPage + 1;
            pos5Value = currentPage + 2;
        }
        let totalNumberOfPages = Math.ceil(tableLength / this.props.rowsPerPage);
        if (totalNumberOfPages - currentPage === 0) {
            pos1Value = currentPage - 4;
            pos2Value = currentPage - 3;
            pos3Value = currentPage - 2;
            pos4Value = currentPage - 1;
            pos5Value = currentPage;
        } else if (totalNumberOfPages - currentPage === 1) {
            pos1Value = currentPage - 3;
            pos2Value = currentPage - 2;
            pos3Value = currentPage - 1;
            pos4Value = currentPage;
            pos5Value = currentPage + 1;
        }
        return {
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
            totalNumberOfPages: totalNumberOfPages
        }
    }

    displayPageNumber(posValue, currentPage, totalNumberOfPages) {
        if (posValue <= 0) {
            return false;
        }
        if (posValue > totalNumberOfPages) {
            return false;
        }
        return true;
    }

    defineListItemClasses(posValue, currentPage, totalNumberOfPages) {
        if (posValue <= 0 || posValue > totalNumberOfPages) {
            return 'hidden';
        }
        let classes = 'page-item';
        if (posValue === currentPage) {
            classes = 'page-item active';
        }
        return classes;
    }


    render() {
        return (
            <div>
                <nav>
                    <ul className='pagination justify-content-center'>
                        <li className={this.state.listItemClasses}>
                            <a href="#!" className='page-link'
                               onClick={this.props.rowMover.bind(null, 1)}> First </a>
                        </li>
                        <li className='page-item'>
                            <a href="#!" className='page-link'
                               onClick={this.props.rowMover.bind(null, this.state.currentPage - 1)}>Previous </a>
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
                        <li className='page-item'>
                            <a href="#!" className='page-link'
                               onClick={this.props.rowMover.bind(null, this.state.currentPage + 1)}>Next </a>
                        </li>
                        <li className='page-item'>
                            <a href="#!" className='page-link'
                               onClick={this.props.rowMover.bind(null, this.state.totalNumberOfPages)}>Last </a>
                        </li>
                        <li className={'page-item disabled'}><span
                            className='page-link'>Showing {this.state.displayStartRow} to {this.state.displayEndRow} of {this.state.displayTotal} records <span
                            className={this.state.displayFiltered ? 'shown' : 'hidden'}>(filtered from {this.state.displayOverallTotal})</span></span>
                        </li>
                    </ul>
                </nav>
            </div>
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