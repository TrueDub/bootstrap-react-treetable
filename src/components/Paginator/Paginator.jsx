import React from "react";
import PropTypes from 'prop-types';
import {performCalculations} from "./calculations.js";


export default function Paginator(props) {

    const paginatorData = performCalculations(props.currentPage, props.tableLength, props.rowsPerPage);

    return (
        <nav>
            <ul className='pagination'>
                <li className={paginatorData.firstClasses}>
                    <a href="#!" className='page-link'
                       onClick={props.rowMover.bind(null, paginatorData.firstValue)}> First </a>
                </li>
                <li className={paginatorData.previousClasses}>
                    <a href="#!" className='page-link'
                       onClick={props.rowMover.bind(null, paginatorData.previousValue)}>Previous </a>
                </li>
                <li className={paginatorData.pos1Classes}>
                    <a href="#!" className='page-link'
                       onClick={props.rowMover.bind(null, paginatorData.pos1Value)}>{paginatorData.pos1Value}</a>
                </li>
                <li className={paginatorData.pos2Classes}>
                    <a href="#!" className='page-link'
                       onClick={props.rowMover.bind(null, paginatorData.pos2Value)}>{paginatorData.pos2Value}</a>
                </li>
                <li className={paginatorData.pos3Classes}>
                    <a href="#!" className='page-link'
                       onClick={props.rowMover.bind(null, paginatorData.pos3Value)}>{paginatorData.pos3Value}</a>
                </li>
                <li className={paginatorData.pos4Classes}>
                    <a href="#!" className='page-link'
                       onClick={props.rowMover.bind(null, paginatorData.pos4Value)}>{paginatorData.pos4Value}</a>
                </li>
                <li className={paginatorData.pos5Classes}>
                    <a href="#!" className='page-link'
                       onClick={props.rowMover.bind(null, paginatorData.pos5Value)}>{paginatorData.pos5Value}</a>
                </li>
                <li className={paginatorData.nextClasses}>
                    <a href="#!" className='page-link' id="nextLink"
                       onClick={props.rowMover.bind(null, paginatorData.nextValue)}>Next </a>
                </li>
                <li className={paginatorData.lastClasses}>
                    <a href="#!" className='page-link'
                       onClick={props.rowMover.bind(null, paginatorData.lastValue)}>Last </a>
                </li>
                <li className={'page-item disabled'}><span
                    className='page-link'>Showing {props.displayStartRow} to {props.displayEndRow} of {props.displayTotal} records <span
                    className={props.displayFiltered ? 'shown' : 'hidden'}>(filtered from {props.displayOverallTotal})</span></span>
                </li>
            </ul>
        </nav>
    );
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

