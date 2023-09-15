import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/DashboardLayout/components/forms/theme-elements/CustomTextField";

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const route = useRouter();



const CheckLogin = async ()=>{

  if (!email || !password) {
    alert("fill the details");
  }
console.log(email + password)
try {
   await axios.post('http://localhost:8000/authentication/login',{
    email , password
  })
  console.log("login succesfully");
  alert('login succesfully')
  route.push('/DashboardLayout')

} catch (error) {
  alert("please enter valid email");
        console.log(error);
  
}

}



  return   (

  <>
    {
    title ? (
      <Typography fontWeight="700" variant="h2" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}

    <Stack>
      <Box>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          component="label"
          htmlFor="username"
          mb="5px"
        >
          Username
        </Typography>
        <CustomTextField variant="outlined" fullWidth 
              onChange={(e:any) => setEmail(e.target.value)}/>
      </Box>
      <Box mt="25px">
        <Typography
          variant="subtitle1"
          fontWeight={600}
          component="label"
          htmlFor="password"
          mb="5px"
        >
          Password
        </Typography>
        <CustomTextField type="password" variant="outlined" fullWidth  onChange={(e:any) => setPassword(e.target.value)} />
      </Box>
      <Stack
        justifyContent="space-between"
        direction="row"
        alignItems="center"
        my={2}
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remeber this Device"
          />
        </FormGroup>
        <Typography
          component={Link}
          href="/"
          fontWeight="500"
          sx={{
            textDecoration: "none",
            color: "primary.main",
          }}
        >
          Forgot Password ?
        </Typography>
      </Stack>
    </Stack>
    <Box>
      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        // component={Link}
        // href="/"
        type="submit"
        onClick={CheckLogin}
      >
        Sign In
      </Button>
    </Box>
    {subtitle}
  </>
  );
        };

export default AuthLogin;
