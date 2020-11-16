import React, { useEffect, useState } from 'react';

import User from '../../components/User';
import Pagination from '../../components/Pagination';

import api from '../../services/api';

import './styles.css';

const Home: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await api.get(`/users`);
      setUsers(res.data);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <div id='home-content'>
      <div className='container'>
        <h1>Users of Github</h1>
        <User users={currentUsers} loading={loading} />
      </div>

      <div className='pagination'>
        <p>Current Page: {currentPage}</p>
        <Pagination
          paginate={paginate}
          usersPerPage={usersPerPage}
          totalUsers={users.length}
        />
      </div>
    </div>
  );
};

export default Home;