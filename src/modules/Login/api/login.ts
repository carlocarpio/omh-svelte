import { ONBOARDING } from '../../../lib/endpoints'
// import { useCookies } from 'common/hooks/useCookies'
import api from '../../../lib/http/api'
import type { AuthCredentialsType } from '../types/Credentials.type'

const loginUser = async (payload: AuthCredentialsType) => {
  // const { setAuth } = useCookies()
  const response = await api.post(
    ONBOARDING.LOGIN_MOBILE,
    payload
  )

  if (response.headers?.authorization) {
    // setAuth(String(response.headers?.authorization))
  }

  return response
}

export { loginUser }
