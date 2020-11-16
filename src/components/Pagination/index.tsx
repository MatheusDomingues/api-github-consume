import React from 'react';

import './styles.css';

type Props = {
  usersPerPage: number;
  totalUsers: number;
  paginate: any;
}

const Pagination: React.FC<Props> = ({ usersPerPage, totalUsers, paginate }: Props) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <footer>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <p onClick={() => paginate(number)}>
              {number}
            </p>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Pagination;