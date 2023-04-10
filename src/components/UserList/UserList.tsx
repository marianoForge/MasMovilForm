import React from 'react';
import { useQuery } from 'react-query';

const fetchUsers = async (): Promise<any[]> => {
  const response = await fetch('http://localhost:3001/api/users');
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data');
  }
  return response.json();
};

const UserList: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery('users', fetchUsers);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data?.map((user: any) => (
          <li key={user._id}>
            {user.firstName} {user.lastName} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
