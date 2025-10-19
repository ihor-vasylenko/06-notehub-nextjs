import ReactPaginate from 'react-paginate';
import css from './Pagination.module.css';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      forcePage={currentPage - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}