import PropTypes from "prop-types";
import {performCalculations} from "./calculations.js";

export default function Paginator({
                                      currentPage,
                                      tableLength,
                                      rowsPerPage,
                                      rowMover,
                                      displayStartRow,
                                      displayEndRow,
                                      displayTotal,
                                      displayFiltered,
                                      displayOverallTotal,
                                  }) {
    const {
        first,
        previous,
        pages,
        next,
        last,
    } = performCalculations(currentPage, tableLength, rowsPerPage);

    const moveTo = (page) => () => rowMover(page);
    const hasClass = (classNames, className) => classNames.split(" ").includes(className);
    const isFirstDisabled = hasClass(first.classes, "disabled");
    const isLastDisabled = hasClass(last.classes, "disabled");

    return (
        <nav aria-label="Table pagination">
            <ul className="pagination justify-content-center">
                <li className={first.classes}>
                    <button type="button" className="page-link" onClick={moveTo(first.value)}
                            disabled={isFirstDisabled}>
                        First
                    </button>
                </li>

                <li className={previous.classes}>
                    <button type="button" className="page-link" onClick={moveTo(previous.value)}
                            disabled={isFirstDisabled}>
                        Previous
                    </button>
                </li>

                {pages.map(({value, classes}) => {
                    const isActive = hasClass(classes, "active");
                    return (
                        <li
                            key={value}
                            className={classes}
                            aria-current={isActive ? "page" : undefined}
                        >
                            <button type="button" className="page-link" onClick={moveTo(value)}>
                                {value}
                            </button>
                        </li>
                    )
                })}

                <li className={next.classes}>
                    <button type="button" className="page-link" onClick={moveTo(next.value)} disabled={isLastDisabled}>
                        Next
                    </button>
                </li>

                <li className={last.classes}>
                    <button type="button" className="page-link" onClick={moveTo(last.value)} disabled={isLastDisabled}>
                        Last
                    </button>
                </li>

                <li className="page-item disabled">
                    <span className="page-link">
                        Showing {displayStartRow} to {displayEndRow} of {displayTotal} records{" "}
                        {displayFiltered && (
                            <span>(filtered from {displayOverallTotal})</span>
                        )}
                    </span>
                </li>
            </ul>
        </nav>
    );
}

Paginator.propTypes = {
    currentPage: PropTypes.number.isRequired,
    tableLength: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    rowMover: PropTypes.func.isRequired,
    displayStartRow: PropTypes.number.isRequired,
    displayEndRow: PropTypes.number.isRequired,
    displayTotal: PropTypes.number.isRequired,
    displayFiltered: PropTypes.bool,
    displayOverallTotal: PropTypes.number,
};
