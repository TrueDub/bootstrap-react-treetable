import React from 'react';
import {render} from "react-dom";
import Highlight from 'react-highlight';

import BootstrapTreeTable from "./lib/BootstrapTreeTable.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/rainbow.css';

import cityData from './data/euroCapitals.json';

let numberRenderer = function (dataRow, dataField) {
    return dataRow.data[dataField].toLocaleString();
};

const dataTableColumns = [
    {
        dataField: "name",
        heading: "Name"
    },
    {
        dataField: "size",
        heading: "Size"
    },
    {
        dataField: "description",
        heading: "Description",
        filterable: true
    },
    {
        dataField: "type",
        heading: "Type"
    },
    {
        dataField: "date",
        heading: "Date",
        sortType: 'date',
        sortDateFormat: 'dd-MMM-yyyy',
        sortOrder: 'desc'
    }
];
const dataTableData = [
    {data: {name: 'fred869', size: 869, description: 'desc2407', type: 'black', date: '01-Jan-2018'}},
    {data: {name: 'fred743', size: 743, description: 'desc2343', type: 'black', date: '02-Jan-2018'}},
    {data: {name: 'fred8', size: 8, description: 'desc713', type: 'white', date: '03-Sep-2018'}},
    {data: {name: 'fred6', size: 6, description: 'desc971', type: 'white', date: '04-Sep-2018'}},
    {data: {name: 'fred578', size: 578, description: 'desc2560', type: 'white', date: '05-Sep-2018'}},
    {data: {name: 'fred695', size: 695, description: 'desc400', type: 'black', date: '06-Sep-2018'}},
    {data: {name: 'fred477', size: 477, description: 'desc1735', type: 'black', date: '07-Jan-2018'}},
    {data: {name: 'fred814', size: 814, description: 'desc2005', type: 'white', date: '08-Jan-2018'}},
    {data: {name: 'fred556', size: 556, description: 'desc811', type: 'white', date: '09-Jan-2018'}},
    {data: {name: 'fred212', size: 212, description: 'desc2766', type: 'white', date: '10-Jan-2018'}},
    {data: {name: 'fred979', size: 979, description: 'desc12', type: 'black', date: '11-Jan-2018'}},
    {data: {name: 'fred237', size: 237, description: 'desc1985', type: 'black', date: '12-Jan-2018'}},
    {data: {name: 'fred3', size: 3, description: 'desc346', type: 'black', date: '13-Jan-2018'}},
    {data: {name: 'fred792', size: 792, description: 'desc927', type: 'white', date: '14-Jan-2018'}},
    {data: {name: 'fred755', size: 755, description: 'desc490', type: 'black', date: '15-Jan-2018'}},
    {data: {name: 'fred26', size: 26, description: 'desc34', type: 'white', date: '16-Jan-2018'}},
    {data: {name: 'fred810', size: 810, description: 'desc786', type: 'white', date: '03-Mar-2018'}},
    {data: {name: 'fred827', size: 827, description: 'desc887', type: 'black', date: '03-Apr-2018'}},
    {data: {name: 'fred79', size: 79, description: 'desc803', type: 'black', date: '19-Jan-2018'}},
    {data: {name: 'fred473', size: 473, description: 'desc388', type: 'black', date: '21-Jan-2018'}},
    {data: {name: 'fred663', size: 663, description: 'desc2483', type: 'black', date: '22-Jan-2018'}},
    {data: {name: 'fred356', size: 356, description: 'desc1004', type: 'white', date: '23-Jan-2018'}},
    {data: {name: 'fred120', size: 120, description: 'desc1603', type: 'white', date: '24-Jan-2018'}},
    {data: {name: 'fred527', size: 527, description: 'desc618', type: 'black', date: '25-Jan-2018'}},
    {data: {name: 'fred771', size: 771, description: 'desc2515', type: 'black', date: '26-Jan-2018'}},
    {data: {name: 'fred891', size: 891, description: 'desc2613', type: 'black', date: '27-Jan-2018'}},
    {data: {name: 'fred851', size: 851, description: 'desc788', type: 'black', date: '28-Jan-2018'}},
    {data: {name: 'fred245', size: 245, description: 'desc1173', type: 'black', date: '29-Jan-2018'}},
    {data: {name: 'fred301', size: 301, description: 'desc419', type: 'black', date: '30-Jan-2018'}},
    {data: {name: 'fred986', size: 986, description: 'desc1929', type: 'white', date: '31-Jan-2018'}},
    {data: {name: 'fred2', size: 2, description: 'desc2972', type: 'white', date: '01-Feb-2018'}},
    {data: {name: 'fred473', size: 473, description: 'desc1975', type: 'black', date: '02-Feb-2018'}},
    {data: {name: 'fred622', size: 622, description: 'desc1639', type: 'white', date: '03-Feb-2018'}},
    {data: {name: 'fred566', size: 566, description: 'desc1450', type: 'white', date: '04-Feb-2018'}},
    {data: {name: 'fred568', size: 568, description: 'desc904', type: 'white', date: '05-Feb-2018'}},
    {data: {name: 'fred770', size: 770, description: 'desc1035', type: 'white', date: '06-Feb-2018'}}
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
    allowFiltering: true
};

function App() {

    const [showValue, setShowValue] = React.useState(2);

    const showDataTable = () => {
        setShowValue(1);
    }

    const showTreeTable = () => {
        setShowValue(2);
    }


    return (
        /*<div style={{width: "90%", margin: "15px auto"}}>*/
        <div className="container">
            <h1>Bootstrap React TreeTable Demo</h1>
            <div className="table-responsive">
                <table className="table">
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
            </div>
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
                </ol>
                <BootstrapTreeTable columns={treeColumns} tableData={cityData} control={treeControls}/>
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
                    <li>An initial sort is applied to the Date column via the <code>columns.sortOrder</code> prop. In
                        addition, the <code>sortType</code> of <code>date</code> is specified, with
                        a <code>sortDateFormat</code> of <code>DD-MMM-YYYY</code>. This causes this column to be sorted
                        as dates, with the supplied format being used in the conversion to Date objects by <a
                            href="http://momentjs.com">Moment.js</a>.
                    </li>
                    <li>Filtering is allowed on the Description column only - this is specified in
                        the <code>columns</code> prop. The paginator adjusts to provide correct
                        navigation and information when the table is filtered.
                    </li>
                </ol>
                <BootstrapTreeTable columns={dataTableColumns} tableData={dataTableData} control={dataTableControls}/>
                <table className="table table-bordered">
                    <tbody>
                    <tr>
                        <td>Component declaration</td>
                        <td><Highlight language="javascript">
                            {"<BootstrapTreeTable columns={dataTableColumns} tableData={dataTableData} control={dataTableControls}/>"}
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
                        <td><Highlight className='javascript'>
                            {JSON.stringify(dataTableData, null, 2)}
                        </Highlight></td>
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

