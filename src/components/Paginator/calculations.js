export const Calculations = () => {
    const performCalculations = (currentPage, tableLength, rowsPerPage) => {
        let totalNumberOfPages = Math.ceil(tableLength / rowsPerPage);
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
            firstClasses: defineExtraItemClasses(currentPage, totalNumberOfPages, 'first'),
            previousValue: previousValue,
            previousClasses: defineExtraItemClasses(currentPage, totalNumberOfPages, 'previous'),
            pos1Value: pos1Value,
            pos1Classes: defineListItemClasses(pos1Value, currentPage, totalNumberOfPages),
            pos2Value: pos2Value,
            pos2Classes: defineListItemClasses(pos2Value, currentPage, totalNumberOfPages),
            pos3Value: pos3Value,
            pos3Classes: defineListItemClasses(pos3Value, currentPage, totalNumberOfPages),
            pos4Value: pos4Value,
            pos4Classes: defineListItemClasses(pos4Value, currentPage, totalNumberOfPages),
            pos5Value: pos5Value,
            pos5Classes: defineListItemClasses(pos5Value, currentPage, totalNumberOfPages),
            nextValue: nextValue,
            nextClasses: defineExtraItemClasses(currentPage, totalNumberOfPages, 'next'),
            lastValue: lastValue,
            lastClasses: defineExtraItemClasses(currentPage, totalNumberOfPages, 'last'),
            totalNumberOfPages: totalNumberOfPages
        }
    }

    const defineExtraItemClasses = (currentPage, totalNumberOfPages, type) => {
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

    const defineListItemClasses = (posValue, currentPage, totalNumberOfPages) => {
        let classes = 'page-item'; //default class.
        if (posValue <= 0 || posValue > totalNumberOfPages) {
            classes += ' disabled hidden';
        }
        if (posValue === currentPage) {
            classes += ' active';
        }
        return classes;
    }

    return {performCalculations};
}