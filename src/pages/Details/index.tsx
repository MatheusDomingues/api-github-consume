import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { parseISO, format } from 'date-fns';

import Header from '../../components/Header';
import Table from '../../components/Table';

import api from '../../services/api';

import './styles.css';

type Props = {
  id: number;
  login: string;
  avatar_url: any;
  html_url: string;
  created_at: string;
  public_repos: [];
}

const Details: React.FC<Props> = () => {
  const [ userDetail, setUserDetail ] = useState<Props>();
  const [ userRepo, setUserRepo ] = useState([])
  const { login } : any = useParams();

  useEffect(() => {
    const loadUserDetails = async () => {
      const response = await api.get(`users/${login}`);
      const repository = await api.get(`users/${login}/repos`);
      setUserDetail(response.data);
      setUserRepo(repository.data);
    }

    loadUserDetails();
  },[login])

  if(userDetail === undefined) {
    return(
      <p>Loading...</p>
    );
  };

  const oldDate = parseISO(userDetail.created_at);
  const newDate = format(
    oldDate,
    "MMMM dd yyyy', at 'HH:mm'h'"
  );

  return(
    <div id='details-content'>
      <Header />
      <div className='container'>
        <h1>User {userDetail.login}</h1>
        <div>
          <img src={userDetail.avatar_url} alt="Avatar"/>
          <div className="user-detail">
            <p><strong>ID: </strong>{userDetail.id}</p>
            <p><strong>Login: </strong>{userDetail.login}</p>
            <p>
              <strong>Profile URL: </strong>
              <a href={userDetail.html_url} target="_blank" rel="noopener noreferrer">
                {userDetail.html_url}
              </a>
            </p>
            <p><strong>Created at: </strong>{newDate}</p>
          </div>
        </div>
      </div>
      <div className="table-container">
        <h2>Repositories</h2>
        <Table repositories={userRepo} />
      </div>
    </div>
  );
};

export default Details;