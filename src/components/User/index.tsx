import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

type Props = {
  users: any;
  loading: boolean;
}

const User: React.FC<Props> = ({ users, loading }: Props) => {
  if(!!loading) {
    return <p>Loading...</p>
  }

  return (
    <ul className='component-user'>
      {users.map((user: any) => (
        <Link to={`/details/${user.login}`} key={user.id}>
          <li>
            <p>ID{user.id} - {user.login}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default User;