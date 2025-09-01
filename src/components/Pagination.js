import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    const visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1)
        .slice(Math.max(0, currentPage - 3), currentPage + 2);

    return (
        <div className="pagination">
            <button
                className="btn btn-sm btn-outline-primary me-1"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}>
                   Start
            </button>
            <button
                className="btn btn-sm btn-outline-primary me-1"
                onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                disabled={currentPage === 1}>
                     Prev
            </button>
            {visiblePages.map(page => (
                <button
                    key={page}
                    className={`btn btn-sm me-1 ${page === currentPage ? 'active' : ''}`}
                    onClick={() => setCurrentPage(page)}>
                    {page}
                </button>
            ))}
            <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="btn btn-sm btn-outline-primary me-1">
                Next
            </button>
            <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} className="btn btn-sm btn-outline-primary">
                End
            </button>
        </div>
    );
};

export default Pagination;