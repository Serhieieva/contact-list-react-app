import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ model, getAnotherPage }) => {
    const { next, prev } = model;

    return <div className="pagination">
        <button className="btn btn-outline-secondary" onClick={() => {getAnotherPage(prev)}} disabled={!prev}>
            previous
        </button>
        <button className="btn btn-outline-secondary" onClick={() => {getAnotherPage(next)}} disabled={!next}>
            next
        </button>
    </div>
};

Pagination.propTypes = {
    model: PropTypes.shape({
        next: PropTypes.string,
        prev: PropTypes.string
    }),
    getAnotherPage: PropTypes.func.isRequired,
};

export default Pagination;
