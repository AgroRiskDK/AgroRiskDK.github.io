import { useAuthContext } from '@/contexts/auth0.tsx';
import { fetchLogoutUser } from './api';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const {user, setUser} = useAuthContext();
  const navigate = useNavigate()
  const logoutUser = () => {
    fetchLogoutUser().then((success) => {
      if (success) {
        sessionStorage.removeItem('access_token');
        setUser(null);
        navigate('/');
      }
    });
  }

  if (!user) {
      return <div>User doesn't exist</div>
  }

  return (
    <div style={{maxWidth: '1300px', padding: '0 15px', margin: '0 auto', height: '100vh'}}>
      {user && (
        <div>
          <ul>
            <li>
              <img src={user.picture} alt="profile photo" />
            </li>
            <li>
             name: {user.name}
            </li>
            <li>
             email: {user.email}
            </li>
          </ul>
          <button onClick={logoutUser} style={{width: '100px', backgroundColor: '#000', color: '#fff', height: '90px'}}>Logout</button>
        </div>
      )}
    </div>
  );
}
