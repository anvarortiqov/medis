import React, { useState } from 'react';
import "./style.css"
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const Pagination = ({ total, current, onChange }) => {
    const [currentPage, setCurrentPage] = useState(current || 1);
    const totalPages = Math.ceil(total / 1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        onChange(page);
    };

    const handlePrev = () => {
        if (currentPage > 1) handlePageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) handlePageChange(currentPage + 1);
    };

    // Generate the pagination items
    const renderPaginationItems = () => {
        const items = [];
        const start = Math.max(1, currentPage - 2);
        const end = Math.min(totalPages, currentPage + 2);

        // Show dots before the first item if needed
        if (start > 1) {
            items.push(
                <li key="start-dots" className="dots">
                    ...
                </li>
            );
        }

        // Render page numbers
        for (let i = start; i <= end; i++) {
            items.push(
                <li
                    key={i}
                    className={`pagination-item ${i === currentPage ? 'active' : ''
                        }`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </li>
            );
        }

        // Show dots after the last item if needed
        if (end < totalPages) {
            items.push(
                <li key="end-dots" className="dots">
                    ...
                </li>
            );
        }

        return items;
    };

    return (
        <div className="pagination-container">
            <button
                className="pagination-btn prev"
                onClick={handlePrev}
                disabled={currentPage === 1}
            >
                <GoArrowLeft />
            </button>
            <ul className="pagination-list">{renderPaginationItems()}</ul>
            <button
                className="pagination-btn next"
                onClick={handleNext}
                disabled={currentPage === totalPages}
            >
                
                <GoArrowRight />
            </button>
        </div>
    );
};

export default Pagination;
