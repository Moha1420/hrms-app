import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Dashboard = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await axios.get('/api/employees', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setEmployees(res.data);
    };
    fetchEmployees();
  }, [user]);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="h6" component="h2">
        Employees
      </Typography>
      <List>
        {employees.map((employee) => (
          <ListItem key={employee._id}>
            <ListItemText
              primary={`${employee.user.name} (${employee.position})`}
              secondary={`Department: ${employee.department}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Dashboard;
