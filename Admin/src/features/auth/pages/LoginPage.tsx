import { Paper, styled, Typography, useTheme } from '@mui/material'
import LoginForm from '../components/LoginForm'

const StyledPager = styled(Paper)(({ theme }) => {
  return {
    maxWidth: 450,
    width: '100%',
    padding: theme.spacing(3),
    boxShadow: `rgba(9, 11, 17, 0.05) 0px 5px 15px 0px, rgba(19, 23, 32, 0.05) 0px 15px 35px -5px`,
  }
})

const LoginPage = () => {
  const theme = useTheme()
  return (
    <StyledPager elevation={2}>
      <Typography
        sx={{
          fontSize: '1.8rem',
          fontWeight: 600,
          paddingBottom: theme.spacing(3),
        }}
      >
        Sign in
      </Typography>
      <LoginForm />
    </StyledPager>
  )
}

export default LoginPage
