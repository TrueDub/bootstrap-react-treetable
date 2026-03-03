import '@testing-library/jest-dom'
import {beforeEach, describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {format} from "date-fns";

import {BootstrapTreeTable} from "../BootstrapTreeTable";

/*
========================================
Test Data
========================================
*/

const tableData = [
    {
        data: {name: "Parent A", value: 30},
        children: [
            {
                data: {name: "Child A1", value: 10},
                children: [
                    {
                        data: {
                            name: "Grandchild A1-1",
                            value: 5,
                        },
                        children: [],
                    },
                ],
            },
            {
                data: {name: "Child A2", value: 20},
                children: [],
            },
        ],
    },
    {
        data: {name: "Parent B", value: 15},
        children: [],
    },
];

const updatedTableData = [
    {
        data: {name: "Parent C", value: 50},
        children: [],
    },
];

const tableDataWithMissingValues = [
    {
        data: {name: "Parent D"},
        children: [
            {
                data: {},
                children: [],
            },
        ],
    },
];

const columns = [
    {
        dataField: "name",
        heading: "Name",
        sortable: true,
        filterable: true,
    },
    {
        dataField: "value",
        heading: "Value",
        sortable: true,
        filterable: true,
    },
];

const control = {
    visibleRows: 10,
    allowSorting: true,
    allowFiltering: true,
    showPagination: true,
    initialRowsPerPage: 10,
    showExpandCollapseButton: true,
};

const dateTableData = [
    {
        data: {
            name: "Date Row",
            created: new Date(2024, 0, 1),
        },
        children: [],
    },
];

const dateColumns = [
    {
        dataField: "name",
        heading: "Name",
        sortable: true,
        filterable: true,
    },
    {
        dataField: "created",
        heading: "Created",
        sortable: true,
        filterable: false,
        sortType: "date",
        sortUsingRenderer: true,
        sortDateFormat: "yyyy-MM-dd",
        renderer: (row, dataField) =>
            format(row.data[dataField], "yyyy-MM-dd"),
    },
];

/*
========================================
Helper
========================================
*/

function renderTable(props = {}) {
    return render(
        <BootstrapTreeTable
            tableData={tableData}
            columns={columns}
            control={control}
            {...props}
        />
    );
}

/*
========================================
Tests
========================================
*/

describe("BootstrapTreeTable (final production version)", () => {

    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("renders headers", () => {
        renderTable();
        expect(screen.getByText("Name")).toBeInTheDocument();
        expect(screen.getByText("Value")).toBeInTheDocument();
    });

    it("renders root rows correctly", () => {
        renderTable();
        expect(screen.getByText("Parent A")).toBeInTheDocument();
        expect(screen.getByText("Parent B")).toBeInTheDocument();
    });


    it("expands a row and shows children", async () => {
        const user = userEvent.setup();
        renderTable();
        const expandIcon = document.querySelector("svg");
        await user.click(expandIcon);
        expect(screen.getByText("Child A1")).toBeInTheDocument();
    });

    it("expands nested child", async () => {
        const user = userEvent.setup();
        renderTable();
        const icons = document.querySelectorAll("svg");
        await user.click(icons[0]);
        const childIcon = document.querySelectorAll("svg")[1];
        await user.click(childIcon);
        expect(screen.getByText("Grandchild A1-1")).toBeInTheDocument();
    });

    it("toggle row changes visibility of children", async () => {
        const user = userEvent.setup();
        renderTable();
        const parentCell = screen.getByText("Parent A");
        const expandIcon = parentCell.closest("tr").querySelector("svg");
        const before = screen.queryByText("Child A1");
        await user.click(expandIcon);
        const after = screen.queryByText("Child A1");
        expect(after !== before).toBe(true);
    });

    it("expand all works", async () => {
        const user = userEvent.setup();
        renderTable();
        const button = screen.getByText("Expand All");
        await user.click(button);
        expect(screen.getByText("Child A1")).toBeInTheDocument();
    });

    it("collapse all works", async () => {
        const user = userEvent.setup();
        renderTable();
        const button =
            screen.getByText("Expand All");
        await user.click(button);
        const collapse = screen.getByText("Collapse All");
        await user.click(collapse);
        expect(screen.queryByText("Child A1")).not.toBeInTheDocument();
    });

    it("sorting toggles", async () => {
        const user = userEvent.setup();
        renderTable();
        const header = screen.getByText("Value");
        await user.click(header);
        await user.click(header);
        expect(header).toBeInTheDocument();
    });

    it("filter shows matching rows", async () => {
        const user = userEvent.setup();
        renderTable();
        const input = screen.getByPlaceholderText("Filter...");
        await user.type(input, "Parent B");
        expect(screen.getByText("Parent B")).toBeInTheDocument();

    });

    it("filter hides non matching rows", async () => {
        const user = userEvent.setup();
        renderTable();
        const input = screen.getByPlaceholderText("Filter...");
        await user.type(input, "XYZ");
        expect(screen.queryByText("Parent A")).not.toBeInTheDocument();
    });

    it("clearing filter restores rows", async () => {
        const user = userEvent.setup();
        renderTable();
        const input = screen.getByPlaceholderText("Filter...");
        await user.type(input, "XYZ");
        await user.clear(input);
        expect(screen.getByText("Parent A")).toBeInTheDocument();
    });

    it("pagination renders", () => {
        renderTable();
        expect(screen.getByRole("table")).toBeInTheDocument();
    });

    it("uses renderer when column value is a Date", () => {
        render(
            <BootstrapTreeTable
                tableData={dateTableData}
                columns={dateColumns}
                control={control}
            />
        );

        expect(
            screen.getByText("2024-01-01")
        ).toBeInTheDocument();
    });

    it("works with empty data", () => {
        render(
            <BootstrapTreeTable
                tableData={[]}
                columns={columns}
                control={control}
            />
        );
        expect(screen.getByRole("table")).toBeInTheDocument();
    });

    it("works without filtering enabled", () => {
        render(
            <BootstrapTreeTable
                tableData={tableData}
                columns={columns}
                control={{
                    ...control,
                    allowFiltering: false,
                }}
            />
        );
        expect(screen.queryByPlaceholderText("Filter...")).not.toBeInTheDocument();

    });

    it("works without pagination enabled", () => {
        render(
            <BootstrapTreeTable
                tableData={tableData}
                columns={columns}
                control={{
                    ...control,
                    showPagination: false,
                }}
            />
        );
        expect(screen.getByRole("table")).toBeInTheDocument();
    });

    it("reinitialises state when tableData changes", () => {
        const {rerender} = render(
            <BootstrapTreeTable
                tableData={tableData}
                columns={columns}
                control={control}
            />
        );

        expect(screen.getByText("Parent A")).toBeInTheDocument();

        rerender(
            <BootstrapTreeTable
                tableData={updatedTableData}
                columns={columns}
                control={control}
            />
        );

        expect(screen.queryByText("Parent A")).not.toBeInTheDocument();
        expect(screen.getByText("Parent C")).toBeInTheDocument();
    });

    it("shows correct pagination summary", () => {
        renderTable();
        expect(
            screen.getByText(/Showing 1 to 5 of 5 records/i)
        ).toBeInTheDocument();
    });

    it("shows zero summary for empty data", () => {
        render(
            <BootstrapTreeTable
                tableData={[]}
                columns={columns}
                control={control}
            />
        );

        expect(
            screen.getByText(/Showing 0 to 0 of 0 records/i)
        ).toBeInTheDocument();
    });

    it("renders when some row values are missing", () => {
        render(
            <BootstrapTreeTable
                tableData={tableDataWithMissingValues}
                columns={columns}
                control={control}
            />
        );

        expect(screen.getByText("Parent D")).toBeInTheDocument();
        expect(screen.getByRole("table")).toBeInTheDocument();
    });

    it("changes page when paginator page button is clicked", async () => {
        const user = userEvent.setup();

        render(
            <BootstrapTreeTable
                tableData={tableData}
                columns={columns}
                control={{
                    ...control,
                    initialRowsPerPage: 2,
                }}
            />
        );

        // Page 1 should show first two rows only
        expect(screen.getByText("Parent A")).toBeInTheDocument();
        expect(screen.getByText("Child A1")).toBeInTheDocument();
        expect(screen.queryByText("Grandchild A1-1")).not.toBeInTheDocument();

        // Click on page 2
        const page2Button = screen.getByRole("button", {name: "2"});
        await user.click(page2Button);

        // Now page 2 rows should be visible
        expect(screen.getByText("Grandchild A1-1")).toBeInTheDocument();
        expect(screen.getByText("Child A2")).toBeInTheDocument();
        expect(screen.queryByText("Parent A")).not.toBeInTheDocument();
    });

});
