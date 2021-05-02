import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = fieldName => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.fieldName === fieldName) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.order = "asc";
      sortColumn.fieldName = fieldName;
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.fieldName !== sortColumn.fieldName) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  render() {
    return (
      <thead>
        <tr className="clickabla">
          {this.props.columns.map(column => (
            <th
              key={column.fieldName || column.key}
              onClick={() => this.raiseSort(column.fieldName)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
