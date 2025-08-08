import { Box, Typography } from '@mui/material'
import toast from 'react-hot-toast'

type NotificationStatus = 'success' | 'error' | 'loading' | 'custom'

interface NotificationOptions {
  status: NotificationStatus
  header: string
  message?: string
  duration?: number
}

export function useNotification() {
  return ({ status, header, message, duration = 3000 }: NotificationOptions) => {
    const content = (
      <Box paddingLeft="4px">
        <Typography variant="subtitle1" fontWeight="bold">
          {header}
        </Typography>
        {message && (
          <Typography variant="body2" color="text.secondary">
            {message}
          </Typography>
        )}
      </Box>
    )

    switch (status) {
      case 'success':
        toast.success(content, { duration })
        break
      case 'error':
        toast.error(content, { duration })
        break
      case 'loading':
        toast.loading(content, { duration })
        break
      case 'custom':
      default:
        toast(content, { duration })
        break
    }
  }
}
