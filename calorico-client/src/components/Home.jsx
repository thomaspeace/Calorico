import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Home = () => {
  const { data: users, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  

  return (
    <>
    <div className="hero flex-grow">
        <div className=" text-center h-[calc(100vh-116px)] flex items-center justify-center overflow-auto">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold">Calorico</h1>
            <p className="py-6">
                Effortlessly track, manage and work towards your goals
            </p>
            <Link to={`/users/1`}>
                <button className="btn btn-primary bg-apple-400">Get Started</button>
            </Link>
            </div>
        </div>
    </div>
    </>
  );
}

export default Home