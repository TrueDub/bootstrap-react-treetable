import {describe, expect, it, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";

import Paginator from "../Paginator";

const defaultProps = {
    currentPage: 3,
    tableLength: 100,
    rowsPerPage: 10,
    rowMover: vi.fn(),
    displayStartRow: 21,
    displayEndRow: 30,
    displayTotal: 100,
    displayFiltered: false,
    displayOverallTotal: 100,
};

const renderPaginator = (props = {}) =>
    render(<Paginator {...defaultProps} {...props} />);

describe("Paginator rendering", () => {
    it("renders pagination navigation", () => {
        renderPaginator();
        expect(screen.getByRole("navigation", {name: /table pagination/i})).toBeInTheDocument();
    });

    it("renders page buttons", () => {
        renderPaginator();

        expect(screen.getByRole("button", {name: "First"})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: "Previous"})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: "Next"})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: "Last"})).toBeInTheDocument();
    });

    it("renders page numbers", () => {
        renderPaginator();

        // window around page 3 → [1,2,3,4,5]
        expect(screen.getByRole("button", {name: "3"})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: "4"})).toBeInTheDocument();
    });
});

describe("Paginator state", () => {
    it("marks the current page as active", () => {
        renderPaginator({ currentPage: 3 });

        const button = screen.getByRole("button", { name: "3" });

        expect(button.closest("li")).toHaveClass("active");
    });



    it("disables First and Previous on first page", () => {
        renderPaginator({currentPage: 1});

        expect(screen.getByRole("button", {name: "First"})).toBeDisabled();
        expect(screen.getByRole("button", {name: "Previous"})).toBeDisabled();
    });

    it("disables Next and Last on last page", () => {
        renderPaginator({currentPage: 10});

        expect(screen.getByRole("button", {name: "Next"})).toBeDisabled();
        expect(screen.getByRole("button", {name: "Last"})).toBeDisabled();
    });
});

describe("Paginator interactions", () => {
    it("calls rowMover with page number when clicking page", async () => {
        const user = userEvent.setup();
        const rowMover = vi.fn();

        renderPaginator({rowMover});

        await user.click(screen.getByRole("button", {name: "4"}));

        expect(rowMover).toHaveBeenCalledOnce();
        expect(rowMover).toHaveBeenCalledWith(4);
    });

    it("moves to next page when clicking Next", async () => {
        const user = userEvent.setup();
        const rowMover = vi.fn();

        renderPaginator({currentPage: 3, rowMover});

        await user.click(screen.getByRole("button", {name: "Next"}));

        expect(rowMover).toHaveBeenCalledWith(4);
    });

    it("moves to previous page when clicking Previous", async () => {
        const user = userEvent.setup();
        const rowMover = vi.fn();

        renderPaginator({currentPage: 3, rowMover});

        await user.click(screen.getByRole("button", {name: "Previous"}));

        expect(rowMover).toHaveBeenCalledWith(2);
    });
});

describe("Paginator display text", () => {
    it("shows record range", () => {
        renderPaginator();

        expect(
            screen.getByText(/showing 21 to 30 of 100 records/i)
        ).toBeInTheDocument();
    });

    it("shows filtered text when displayFiltered is true", () => {
        renderPaginator({
            displayFiltered: true,
            displayOverallTotal: 250,
        });

        expect(
            screen.getByText(/filtered from 250/i)
        ).toBeInTheDocument();
    });
});

