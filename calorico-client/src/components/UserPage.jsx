import React from 'react';
import { useQuery, useQueries } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchUserById, fetchUserBMI } from '../api';

const UserPage = () => {
  const { id } = useParams();

  const { data: user, isLoading: userLoading, isError: userError, error: userFetchError } = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUserById(id),
  });

  // Fetch BMI data, after user data is successfully fetched
  const { data: bmi, isLoading: bmiLoading, isError: bmiError, error: bmiFetchError } = useQuery({
    queryKey: ['bmi', id],
    queryFn: () => fetchUserBMI(id),
    enabled: !!user, // only run this query if user data is available, and update if user cahnges
    // we can manually fetch with refetch if we need to
  });

  if (userLoading || bmiLoading) return <div>Loading...</div>;

  if (userError || bmiError) return <div>Error: {userFetchError?.message || bmiFetchError?.message}</div>;

  return (
    <div>
      <div>
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Height: {user.heightMetric} cm</p>
      </div>
      <div>
        <p>BMI: {bmi}</p>
      </div>
    </div>
  );
};

export default UserPage;
