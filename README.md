# bootstrap-react-treetable
A React component that presents a simple TreeTable, allowing the user to supply styling and rendering options. A default styling (using Bootstrap 4) is also available. XXX

## Installation
Run the following command:
`npm install bootstrap-react-treetable --save`
or
`yarn add bootstrap-react-treetable --save`

## Usage

Firstly, import the component as follows:

`import BootstrapTreeTable from 'bootstrap-react-treetable';`

Then include it in your components as follows:

`<BootstrapTreeTable tableData={this.props.tableData} columns={columns} control={control}/>`

See our [Demo page](https://truedub.github.io/bootstrap-react-treetable/index.html) to see the component in action.

BootstrapTreeTable expects data in the following format:

```javascript
[
    {
        data: {
            name: "name0",
            dataType: "string0",
            example: "ex0",
            description: "desc0"
        },
        children: [
            {
                data: {
                    name: "name0-0",
                    dataType: "string0-0",
                    example: "ex0-0",
                    description: "desc0-0"
                },
                children: []
            }, {
                data: {
                    name: "name0-1",
                    dataType: "string0-1",
                    example: "ex0-1",
                    description: "desc0-1"
                },
                children: []
            }, {
                data: {
                    name: "name0-2",
                    dataType: "string0-2",
                    example: "ex0-2",
                    description: "desc0-2"
                },
                children: [
                    {
                        data: {
                            name: "name0-2-1",
                            dataType: "string0-2-1",
                            example: "ex0-2-1",
                            description: "desc0-2-1"
                        },
                        children: []
                    }
                ]
            }
        ]
    },
    {
        data: {
            name: "name1",
            dataType: "string1",
            example: "ex1",
            description: "desc1 &euro; &euro;"
        },
        children: []
    },
    {
        data: {
            name: "name2",
            dataType: "string2",
            example: "ex2",
            description: "desc2 &euro; &euro; &euro; &euro;"
        },
        children: []
    }
]
```

### Configuration options

Obviously, the tableData prop is required. There is one other required prop:

**columns** is an array of objects, describing the columns to be rendered. The options within a column object are:

| Attribute Name | Type | Description | Example | Required |
| -------------- | ---- | ----------- | ------- | -------- |
| dataField      | String | the field that holds the data to be displayed | name | Yes |
| heading        | String | the column header to be used - if not supplied, the dataField is used instead. | Name | No |
| fixedWidth     | Boolean | Should the column be defined with a fixed width? | false | No |
| percentageWidth | Number | The percentage width this column will be allocated, should fixedWidth be true | 25 | No |
| styleClass     | String | A CSS class to be applied to the TD element for this field | whatever | No |
| renderer       | function | A function to be applied to the data - see further detail below | whatever | No |
| sortable       | Boolean | Is this field sortable? Default is yes | false | No |
| sortUsingRenderer | Boolean | When sorting, sort using the output of the renderer | false | No |
| sortOrder      | String | Indicates that the table should be sorted by this field in this order - values are 'asc' or 'desc' | asc | No |
| sortType       | String | Indicates the data type this field should be sorted as - options are string, date or number | string | No |
| sortDateFormat | String | The format of the date to be sorted (assuming sortType is date). This uses Moment, so the formats are specified [here](https://momentjs.com/docs/#/parsing) | string | No |  
| filterable     | Boolean | Should this column be included when filtering the data? | true | No |  

Further control of how the table is displayed can be provided using the **control** prop.

| Attribute Name | Type | Description | Example | Required |
| -------------- | ---- | ----------- | ------- | -------- |
| visibleRows    | Number | Number of levels to display automatically - default is 1 | 2 | No |
| showExpandCollapseButton     | Boolean | Should the Expand All/Collapse All button be displayed? | false | No |
| allowSorting   | boolean | Enable or disable sorting on this table - default is false | false | No |
| allowFiltering | boolean | Enable or disable filtering on this table - default is false | false | No |
| filterInputPlaceholderText | string | Text to display as the placeholder in the filter input box | Filter... | No |
| showPagination | boolean | Paginate the table, and provide a set of links at the bottom for navigation | false | No |
| initialRowsPerPage | number | Number of rows to display when paginated | 10 | No |

#### Rendering option

A function can be provided on a per-column basis to control the display of the data from that column.

This function should accept 2 parameters:

1. dataRow - the entire row of data being operated on
2. dataField - the name of the field within that row to be displayed

Thus the actual data for the column will be provided as `dataRow.data[dataField]`

The function should return a simple type (string, number etc) or HTML - see the example below:

````javascript
let descriptionRenderer = function (dataRow, dataField) {
    return <span dangerouslySetInnerHTML={{__html: dataRow.data[dataField]}}></span>
};
````

#### Styling

The component is styled using Bootstrap 4 classes. Bootstrap 4 is a peer dependency, so it needs to be provided by the project using this one.

### Sorting
The table can be sorted by default, simply set the `sortOrder` attribute of the relevant column.

Clicking the header of any column will sort by that column, in ascending order. Clicking again will sort in descending order. Appropriate icons are used to indicate the sort order.

You can prevent sorting of a specific column by simply setting the `sortable` attribute of the relevant column to false.

### Use as a simple DataTable

To use this component as a simple datatable (i.e. no expandable capabilities), simply provide a `tableData` prop with no `children` attributes.  

## Release History

| Release | Description | Release date |
| ------- | ----------- | ------------ |
|  1.0.2  | Audit fixes | 01-Oct-2019 |
|  1.0.1  |  | 26-Jun-2019 |
|  1.0.0  | First release | 22-Feb-2019 |
|  1.0.0-rc.1  | First release candidate of 1.0.0 | 22-Feb-2019 |
