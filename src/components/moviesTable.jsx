import React from "react";
import Like from "./common/like";
import Table from "./common/table";

class MoviesTable extends React.Component {
  columns = [
    { fieldName: "title", label: "Title" },
    { fieldName: "genre.name", label: "Genre" },
    { fieldName: "numberInStock", label: "Stock" },
    { fieldName: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <div>
        <Table
          data={movies}
          onSort={onSort}
          sortColumn={sortColumn}
          columns={this.columns}
        />
      </div>
    );
  }
}

export default MoviesTable;
