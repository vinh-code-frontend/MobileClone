import { InputBase, ButtonBase, FormLabel, styled } from '@mui/material'

export const StyledInput = styled(InputBase)<{ error?: boolean }>(({ theme, error }) => {
  return {
    paddingBlock: theme.spacing(1),
    paddingInline: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    '&.Mui-focused': {
      borderColor: error ? theme.palette.error.main : theme.palette.primary.main,
    },
    borderColor: error ? theme.palette.error.main : theme.palette.divider,
    transition: 'border 0.3s ease',
    fontSize: 14,
  }
})

export const StyledButton = styled(ButtonBase)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: '12px',
  borderRadius: theme.shape.borderRadius,
  fontSize: '14px',
  fontWeight: 600,
}))

export const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  paddingBottom: theme.spacing(0.5),
  color: theme.palette.text.primary,
  '&.Mui-focused': {
    color: theme.palette.text.primary,
  },
  fontSize: 14,
}))
