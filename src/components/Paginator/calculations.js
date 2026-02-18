const BASE_CLASS = 'page-item';
const WINDOW_SIZE = 5;

const clamp = (value, min, max) =>
    Math.min(Math.max(value, min), max);

export const performCalculations = (currentPage, tableLength, rowsPerPage) => {
    const totalPages = Math.max(1, Math.ceil(tableLength / rowsPerPage));
    const safePage = clamp(currentPage, 1, totalPages);

    const firstValue = 1;
    const lastValue = totalPages;
    const previousValue = clamp(safePage - 1, 1, totalPages);
    const nextValue = clamp(safePage + 1, 1, totalPages);

    // Calculate window bounds
    let start = safePage - Math.floor(WINDOW_SIZE / 2);
    let end = start + WINDOW_SIZE - 1;

    if (start < 1) {
        start = 1;
        end = Math.min(WINDOW_SIZE, totalPages);
    }

    if (end > totalPages) {
        end = totalPages;
        start = Math.max(1, end - WINDOW_SIZE + 1);
    }

    const pages = Array.from({length: WINDOW_SIZE}, (_, i) => {
        const value = start + i;
        return {
            value,
            classes: defineListItemClasses(value, safePage, totalPages)
        };
    });

    return {
        first: {
            value: firstValue,
            classes: defineExtraItemClasses(safePage, totalPages, 'first')
        },
        previous: {
            value: previousValue,
            classes: defineExtraItemClasses(safePage, totalPages, 'previous')
        },
        pages,
        next: {
            value: nextValue,
            classes: defineExtraItemClasses(safePage, totalPages, 'next')
        },
        last: {
            value: lastValue,
            classes: defineExtraItemClasses(safePage, totalPages, 'last')
        },
        totalPages
    };
};

const defineExtraItemClasses = (currentPage, totalPages, type) => {
    const classes = [BASE_CLASS];

    const disabled =
        (type === 'first' || type === 'previous') && currentPage === 1 ||
        (type === 'next' || type === 'last') && currentPage === totalPages;

    if (disabled) classes.push('disabled');

    return classes.join(' ');
};

const defineListItemClasses = (value, currentPage, totalPages) => {
    const classes = [BASE_CLASS];

    if (value < 1 || value > totalPages) {
        classes.push('disabled', 'hidden');
    }

    if (value === currentPage) {
        classes.push('active');
    }

    return classes.join(' ');
};
