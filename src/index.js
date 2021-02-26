import React from 'react';
import {render} from "react-dom";
import Highlight from 'react-highlight';

import BootstrapTreeTable from "./lib/BootstrapTreeTable.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/rainbow.css';

import cityData from './data/euroCapitals.json';
import stadiaData from './data/nflStadia.json';

let numberRenderer = function (dataRow, dataField) {
    return dataRow.data[dataField].toLocaleString();
};

const dataTableColumns = [
    {
        dataField: "name",
        heading: "Name",
        filterable: true
    },
    {
        dataField: "capacity",
        heading: "Capacity"
    },
    {
        dataField: "location",
        heading: "Location",
        filterable: true
    },
    {
        dataField: "field",
        heading: "Grass Type"
    },
    {
        dataField: "roof",
        heading: "Roof Type",
    },
    {
        dataField: "team",
        heading: "Team(s)"
    },
    {
        dataField: "year",
        heading: "Year Opened"
    }
];
const dataTableControls = {
    allowSorting: true,
    showPagination: true,
    initialRowsPerPage: 10,
    allowFiltering: true,
    filterInputPlaceholderText: 'Filter...'
};

const treeColumns = [
    {
        dataField: "name",
        heading: "Name",
        filterable: true
    },
    {
        dataField: "population",
        heading: "Random Number",
        sortOrder: 'desc',
        renderer: numberRenderer
    },
    {
        dataField: "bill",
        heading: "Dummy 1"
    },
    {
        dataField: "fred",
        heading: "Dummy 2"
    },
    {
        dataField: "john",
        heading: "Dummy 3"
    }
];
const treeControls = {
    visibleRows: 1,
    allowSorting: true,
    showPagination: true,
    initialRowsPerPage: 10,
    allowFiltering: true,
    showExpandCollapseButton: true
};
const treeTopRows = [
    [
        {
            heading: '',
            colspan: 1,
            alignment: 'center'
        },
        {
            heading: '',
            colspan: 1,
            alignment: 'center'
        },
        {
            heading: 'Dummy Fields',
            colspan: 3,
            alignment: 'center'
        }
    ]
]

function App() {

    const [showValue, setShowValue] = React.useState(2);

    const showDataTable = () => {
        setShowValue(1);
    }

    const showTreeTable = () => {
        setShowValue(2);
    }


    return (
        <div style={{width: "90%", margin: "15px auto"}}>
            <h1>Bootstrap React TreeTable Demo</h1>
            <table>
                <tbody>
                <tr>
                    <td>
                        <button className="btn btn-outline-primary" onClick={showTreeTable.bind(null)}>TreeTable</button>
                    </td>
                    <td>
                        <button className="btn btn-outline-primary" onClick={showDataTable.bind(null)}>DataTable</button>
                    </td>
                </tr>
                </tbody>
            </table>
            <div className={showValue === 2 ? 'shown' : 'hidden'}>
                <h3>TreeTable</h3>
                Notes:
                <ol>
                    <li>Clicking any column heading will sort that column in ascending order - a second click will
                        reverse the sort order. The "Reset Sorting" button will appear when a sort is applied.
                    </li>
                    <li>An initial descending sort is applied to the Random Number column via the <code>columns</code> prop.</li>
                    <li>The Random Number column has a <code>renderer</code> applied to it. In addition, that column is
                        sorted by the output of that renderer, not by the input value.
                    </li>
                    <li>Filtering is allowed on the specified columns, and is case-sensitive.</li>
                </ol>
                <BootstrapTreeTable columns={treeColumns} tableData={cityData} control={treeControls} topRows={treeTopRows}/>
                <table className="table table-bordered">
                    <tbody>
                    <tr>
                        <td>Component declaration</td>
                        <td><Highlight language="javascript">
                            {"<BootstrapTreeTable columns={treeColumns} tableData={cityData} control={treeControls}/>"}
                        </Highlight></td>
                    </tr>
                    </tbody>
                </table>
                <table className="table table-bordered">
                    <tbody>
                    <tr>
                        <th width="10%">Prop Name</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <td>
                            <pre><code>treeColumns</code></pre>
                        </td>
                        <td><Highlight language="javascript">
                            {JSON.stringify(treeColumns, null, 2)}
                        </Highlight></td>
                    </tr>
                    <tr>
                        <td>
                            <pre><code>treeControls</code></pre>
                        </td>
                        <td>
                            <Highlight language="javascript">
                                {JSON.stringify(treeControls, null, 2)}
                            </Highlight>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <pre><code>tableData</code></pre>
                        </td>
                        <td>See the contents of euroCapitals.json in the src/data directory.</td>
                    </tr>
                    <tr>
                        <td>
                            <pre><code>numberRenderer</code></pre>
                            - the renderer function passed in the columns prop
                        </td>
                        <td><Highlight language="javascript">{"function (dataRow, dataField) {\n" +
                        "    return dataRow.data[dataField].toLocaleString();\n" +
                        "};"}</Highlight></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={showValue === 1 ? 'shown' : 'hidden'}>
                <h3>DataTable</h3>
                Notes:
                <ol>
                    <li>Clicking any column heading will sort that column in ascending order - a second click will
                        reverse the sort order. The "Reset Sorting" button will appear when a sort is applied.
                    </li>
                    <li>Filtering is allowed on the Name and Location columns only - this is specified in
                        the <code>columns</code> prop. The paginator adjusts to provide correct
                        navigation and information when the table is filtered. Filtering is case-sensitive.
                    </li>
                </ol>
                <BootstrapTreeTable columns={dataTableColumns} tableData={stadiaData} control={dataTableControls}/>
                <table className="table table-bordered">
                    <tbody>
                    <tr>
                        <td>Component declaration</td>
                        <td><Highlight language="javascript">
                            {"<BootstrapTreeTable columns={dataTableColumns} tableData={stadiaData} control={dataTableControls}/>"}
                        </Highlight></td>
                    </tr>
                    </tbody>
                </table>
                <table className="table table-bordered">
                    <tbody>
                    <tr>
                        <th width="10%">Prop Name</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <td>
                            <pre><code>columns</code></pre>
                        </td>
                        <td><Highlight language="javascript">
                            {JSON.stringify(dataTableColumns, null, 2)}
                        </Highlight></td>
                    </tr>
                    <tr>
                        <td>
                            <pre><code>control</code></pre>
                        </td>
                        <td>
                            <Highlight language="javascript">
                                {JSON.stringify(dataTableControls, null, 2)}
                            </Highlight>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <pre><code>tableData</code></pre>
                        </td>
                        <td>See the contents of nflStadia.json in the src/data directory.</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>);
}
;

render(
    <App/>
    , document.getElementById("root"));

