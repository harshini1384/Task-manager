function Pagination({ page, totalPages, setPage }) {

 return (
  <div className="pagination">
    <button
      className="btn-secondary"
      disabled={page === 0}
      onClick={() => setPage(page - 1)}
    >
      Prev
    </button>

    <span> Page {page + 1} of {totalPages} </span>

    <button
      className="btn-secondary"
      disabled={page + 1 >= totalPages}
      onClick={() => setPage(page + 1)}
    >
      Next
    </button>
  </div>
);
}

export default Pagination;