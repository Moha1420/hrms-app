import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { login } from '../context/AuthActions';
import { TextField, Button, Container, Typography } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AuthContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    await login(dispatch, { email, password });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;


// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { login } from '../context/AuthActions';
// import { TextField, Button, Container, Typography } from '@mui/material';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { dispatch } = useContext(AuthContext);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await login(dispatch, { email, password });
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h4" component="h1" gutterBottom>
//         Login
//       </Typography>
//       <form onSubmit={onSubmit}>
//         <TextField
//           label="Email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           fullWidth
//           margin="normal"
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Login
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default Login;
