import { AxiosError } from 'axios'

export const getErrorMessage = (error: unknown, defaultMessage?: string): string => {
  let message = defaultMessage || 'Unexpected Error'
  if (error instanceof Error && error.message) {
    message = error.message
  }

  return message
}

export const getApiErrorMessage = (error: unknown, defaultMessage?: string): string => {
  let message = defaultMessage || 'Unexpected Error'

  if (error instanceof AxiosError && error.response?.data?.message) {
    if (error.response?.data?.message) {
      message = error.response?.data?.message
    } else if (error.message) {
      message = error.message
    }
  } else {
    message = getErrorMessage(error, message)
  }

  return message
}
