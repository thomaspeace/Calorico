import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api';
import { Link } from 'react-router-dom';

const Home = () => {
  const { data: users, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  

  return (
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold">Calorico</h1>
            <p className="py-6">
                Effortlessly track, manage and work towards your goals
            </p>
            <Link to={`/users/1`}>
                <button className="btn btn-primary">Get Started</button>
            </Link>
            </div>
        </div>
    </div>





    // <div>
    //   <h1>Users List</h1>
    //   <ul>
    //     {users.map(user => (
    //         <li key={user.id}>
    //             <Link to={`/users/${user.id}`}>{user.name}</Link>
    //         </li> 
    //     ))}
    //   </ul>
    // </div>
  );
}

export default Home