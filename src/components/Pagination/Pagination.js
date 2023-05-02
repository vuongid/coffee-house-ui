import ReactPaginate from 'react-paginate';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

function Pagination({ onPageChange, pageCount }) {
    return (
        <ReactPaginate
            previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
            nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={onPageChange}
            containerClassName={cx('pagination')}
            pageClassName={cx('page-item')}
            pageLinkClassName={cx('page-link')}
            nextClassName={cx('page-item')}
            nextLinkClassName={cx('page-link')}
            previousClassName={cx('page-item')}
            previousLinkClassName={cx('page-link')}
            breakClassName={cx('page-item')}
            breakLinkClassName={cx('page-link')}
            activeClassName={cx('active')}
        ></ReactPaginate>
    );
}

Pagination.propTypes = {
    onPageChange: PropTypes.func.isRequired,
    pageCount: PropTypes.number.isRequired,
};

export default Pagination;
