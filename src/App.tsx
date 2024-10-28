import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, updateUserRole } from './store/userSlice';
import { RootState, AppDispatch } from './store/store';
import AdminComponent from './components/AdminComponent';
import UserComponent from './components/UserComponent';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { username, role } = useSelector((state: RootState) => state.user.user);
  console.log("api-role", role, username)

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleRoleChange = () => {
    const newRole = role === 'admin' ? 'user' : 'admin';
    dispatch(updateUserRole(newRole));
  };

  return (
    <div>
      <h1 style={{fontWeight:'bold'}}>User {role} Management</h1>
      <p style={{fontWeight:'bold'}}>Username: {username}</p>
      <p style={{fontWeight:'bold'}}>Role: {role}</p>

      <button onClick={handleRoleChange}>
        Toggle Role (Current: {role})
      </button>

      {role === 'admin' ? <AdminComponent /> : <UserComponent />}
      

    </div>
  );
};

export default App;
