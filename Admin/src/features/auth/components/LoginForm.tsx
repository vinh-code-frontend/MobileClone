import { FormControl, Stack, Typography, useTheme } from '@mui/material'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '@/app/axios'
import { StyledFormLabel, StyledInput, StyledButton } from '@/shared/components/styled'

const schema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must has at least 6 characters'),
})

type FormData = yup.InferType<typeof schema>

const LoginForm = () => {
  const theme = useTheme()
  const { handleSubmit, register, formState } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  const { errors } = formState

  const onSubmit = async (data: FormData) => {
    const res = await api.post('/Admin/login', data)
    console.log(res)
  }

  return (
    <Stack component="form" sx={{ gap: theme.spacing(3) }} onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <StyledFormLabel required>Username</StyledFormLabel>
        <StyledInput
          placeholder="Enter your username..."
          {...register('username')}
          error={!!errors.username}
        />
        {errors.username && (
          <Typography color="error" variant="caption">
            {errors.username.message}
          </Typography>
        )}
      </FormControl>
      <FormControl>
        <StyledFormLabel required>Password</StyledFormLabel>
        <StyledInput
          type="password"
          placeholder="Enter your password..."
          {...register('password')}
          error={!!errors.password}
        />
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
