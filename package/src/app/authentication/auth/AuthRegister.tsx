
import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import CustomTextField from '@/app/DashboardLayout/components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';
import axios from 'axios';

interface registerType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthRegister = ({ title, subtitle, subtext }: registerType) => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const route = useRouter();

const Adddata=  async()=>{


try {
    
    console.log(name + email + password);
    const response = await axios.post('http://localhost:8000/authentication/register',{
        name , email, password
    })
    alert("user added")
    console.log('User created:', response.data);
setName('');
setEmail(''),
setPassword('');

route.push('/authentication/login')

    
} catch (error) {
    console.error('Error creating user:', error);

}

}

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <Box>
        <Stack mb={3}>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="name"
            mb="5px"
          >
            Name
          </Typography>
          <CustomTextField id="name" variant="outlined" fullWidth value={name}  onChange={(e:any)=>{setName(e.target.value)}}  />

          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="email"
            mb="5px"
            mt="25px"
          >
            Email Address
          </Typography>
          <CustomTextField id="email" variant="outlined" value={email} fullWidth onChange={(e:any)=>{setEmail(e.target.value)}}/>

          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="label"
            htmlFor="password"
            mb="5px"
            mt="25px"
          >
            Password
          </Typography>
          <CustomTextField id="password" variant="outlined" value={password} fullWidth  onChange={(e:any)=>{setPassword(e.target.value)}}/>
        </Stack>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
        //   component={Link}
        //   href="/authentication/login"
          onClick={Adddata}
        >
          Sign Up
        </Button>
      </Box>
      {subtitle}
    </>
  );
};

export default AuthRegister;
