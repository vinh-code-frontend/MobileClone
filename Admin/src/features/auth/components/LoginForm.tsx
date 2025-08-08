import { FormControl, Stack, Typography, useTheme } from '@mui/material'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { StyledFormLabel, StyledInput, StyledButton } from '@/shared/components/styled'
import { loginAsync } from '../core/authService'
import { LoginResponse } from '../core/types'
import { useNotification } from '@/shared/hooks/useNotification'
import { getApiErrorMessage } from '@/shared/utils'
import { useDispatch } from 'react-redux'
import { authActions } from '../core/authSlide'

const schema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required').min(6, 'Password must has at least 6 characters'),
})

type FormData = yup.InferType<typeof schema>

const LoginForm = () => {
  const theme = useTheme()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  const notify = useNotification()
  const dispatch = useDispatch()

  const onSubmit = async (data: FormData) => {
    try {
      const res = await loginAsync<LoginResponse>(data)
      notify({ status: 'success', header: 'Successful', message: 'Login successfully' })
      console.log(res)
      dispatch(authActions.setUser(res))
    } catch (error: unknown) {
      console.error(error)
      notify({
        status: 'error',
        header: 'Failed',
        message: getApiErrorMessage(error, 'There are some error while trying to login'),
      })
    }
  }

  return (
    <Stack component="form" sx={{ gap: theme.spacing(3) }} onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <StyledFormLabel required>Username</StyledFormLabel>
        <StyledInput placeholder="Enter your username..." {...register('username')} error={!!errors.username} />
        {errors.username && (
          <Typography color="error" variant="caption">
            {errors.username.message}
          </Typography>
        )}
      </FormControl>
      <FormControl>
        <StyledFormLabel required>Password</StyledFormLabel>
        <StyledInput type="password" placeholder="Enter your password..." {...register('password')} error={!!errors.password} />
        {errors.password && (
          <Typography color="error" variant="caption">
            {errors.password.message}
          </Typography>
        )}
      </FormControl>
      <StyledButton type="submit" sx={{ color: theme.palette.common.white }}>
        Sign in
      </StyledButton>
    </Stack>
  )
}

export default LoginForm
