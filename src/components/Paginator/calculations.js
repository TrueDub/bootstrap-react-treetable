const BASE_CLASS = 'page-item';
const WINDOW_SIZE = 5;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const performCalculations = (currentPage, tableLength, rowsPerPage) => {
    const totalNumberOfPages = Math.max(1, Math.ceil(tableLength / rowsPerPage));
    const safePage = clamp(currentPage, 1, totalNumberOfPages);

    const firstValue = 1;
    const lastValue = totalNumberOfPages;
    const previousValue = clamp(safePage - 1, 1, totalNumberOfPages);
    const nextValue = clamp(safePage + 1, 1, totalNumberOfPages);

    // Determine page window
    let start = safePage - Math.floor(WINDOW_SIZE / 2);
    let end = start + WINDOW_SIZE - 1;

    if (start < 1) {
        start = 1;
        end = Math.min(WINDOW_SIZE, totalNumberOfPages);
    }

    if (end > totalNumberOfPages) {
        end = totalNumberOfPages;
        start = Math.max(1, end - WINDOW_SIZE + 1);
    }

    const pages = Array.from({length: WINDOW_SIZE}, (_, i) => start + i);

    const buildListItem = (value) => ({
        value,
        classes: defineListItemClasses(value, safePage, totalNumberOfPages)
    });

    return {
        firstValue,
        firstClasses: defineExtraItemClasses(safePage, totalNumberOfPages, 'first'),

        previousValue,
        previousClasses: defineExtraItemClasses(safePage, totalNumberOfPages, 'previous'),

        pos1Value: pages[0],
        pos1Classes: buildListItem(pages[0]).classes,

        pos2Value: pages[1],
        pos2Classes: buildListItem(pages[1]).classes,

        pos3Value: pages[2],
        pos3Classes: buildListItem(pages[2]).classes,

        pos4Value: pages[3],
        pos4Classes: buildListItem(pages[3]).classes,

        pos5Value: pages[4],
        pos5Classes: buildListItem(pages[4]).classes,

        nextValue,
        nextClasses: defineExtraItemClasses(safePage, totalNumberOfPages, 'next'),

        lastValue,
        lastClasses: defineExtraItemClasses(safePage, totalNumberOfPages, 'last'),

        totalNumberOfPages
    };
};

const defineExtraItemClasses = (currentPage, totalNumberOfPages, type) => {
    const classes = [BASE_CLASS];

    const isDisabled =
        (type === 'first' || type === 'previous') && currentPage === 1 ||
        (type === 'next' || type === 'last') && currentPage === totalNumberOfPages;

    if (isDisabled) classes.push('disabled');

    return classes.join(' ');
};

const defineListItemClasses = (value, currentPage, totalNumberOfPages) => {
    const classes = [BASE_CLASS];

    if (value < 1 || value > totalNumberOfPages) {
        classes.push('disabled', 'hidden');
    }

    if (value === currentPage) {
        classes.push('active');
    }

    return classes.join(' ');
};
