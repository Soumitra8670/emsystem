import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
    const [user, setUser] = useState(null);
    const [loggedInUserData, setLoggedInUserData] = useState(null);
    const authData = useContext(AuthContext);

    useEffect(() => {
        const storedUser = localStorage.getItem('loggedInUser');
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setUser(userData.role);
            setLoggedInUserData(userData.data || null);
        }
    }, []);

    const handleLogin = (email, password) => {
        if (email === 'admin@me.com' && password === '123') {
            const adminData = { role: 'admin' };
            setUser('admin');
            localStorage.setItem('loggedInUser', JSON.stringify(adminData));
        } else if (authData?.employees) {
            const employee = authData.employees.find(
                (e) => e.email === email && e.password === password
            );
            if (employee) {
                setUser('employee');
                setLoggedInUserData(employee);
                localStorage.setItem(
                    'loggedInUser',
                    JSON.stringify({ role: 'employee', data: employee })
                );
            } else {
                alert('Invalid credentials');
            }
        } else {
            alert('Invalid credentials');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        setUser(null);
        setLoggedInUserData(null);
    };

    return (
        <>
            {!user ? <Login handleLogin={handleLogin} /> : ''}
            {user === 'admin' && <AdminDashboard changeUser={handleLogout} />}
            {user === 'employee' && (
                <EmployeeDashboard changeUser={handleLogout} data={loggedInUserData} />
            )}
        </>
    );
};

export default App;

