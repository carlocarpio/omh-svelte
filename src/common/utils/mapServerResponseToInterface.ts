import type { AxiosResponse } from 'axios'

export interface IResponse<T> {
  data: T
  message: string
  statusCode: number
}

export const mapServerResponseToInterface = <T>(
  response: AxiosResponse<any>
): IResponse<T> => {
  return {
    data: response?.data._data as T,
    message: response?.data._message,
    statusCode: response?.data._statusCode
  }
}
