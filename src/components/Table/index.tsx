import React from 'react';

import './styles.css';

type Props = {
  repositories: any;
}

const Table: React.FC<Props> = ({ repositories }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Repo URL</th>
        </tr>
      </thead>
      <tbody>
        {repositories.map((repos: any) => (
          <tr key={repos.id}>
            <td>{repos.id}</td>
            <td>{repos.name}</td>
            <td>
              <a href={repos.html_url} target="_blank" rel="noopener noreferrer">
                {repos.html_url}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;