import React from 'react';
import { useHistory } from 'react-router-dom'

import './styles.css';

const Header: React.FC = () => {
  const router = useHistory();

  return(
    <header>
      <div>
        <p onClick={() => router.goBack()}>Voltar</p>
      </div>
    </header>
  );
};

export default Header;