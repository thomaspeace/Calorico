import React from 'react';
import { useQuery, useQueries } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchUserById, fetchUserBMI, fetchUserMaintenanceCalories } from '../api';
import Navigation from './Navigation';

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

  const { data: maintenanceCals, isLoading: maintenanceCalsLoading, isError: maintenanceCalsError, error: maintenanceCalsFetchError } = useQuery({
    queryKey: ['maintenanceCals', id],
    queryFn: () => fetchUserMaintenanceCalories(id),
    enabled: !!user,
  });

  if (userLoading || bmiLoading || maintenanceCalsLoading) return <div>Loading...</div>;

  if (userError || bmiError || maintenanceCalsError) return <div>Error: {userFetchError?.message || bmiFetchError?.message || maintenanceCalsFetchError?.message}</div>;

  return (
      <div>
      <div>
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Height: {user.heightMetric} cm</p>
      </div>
      <div>
        <p>BMI: {Math.round(bmi*10)/10}</p>
      </div>
      <div>
        <p>Estimated Maintenance Cals: {Math.round(maintenanceCals)}</p>
      </div>
    </div>
  );
};

export default UserPage;
