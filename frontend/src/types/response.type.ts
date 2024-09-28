export interface SuccessResponse<Data> {
  message: string
  isSuccess: boolean
  errors: string
  data: Data
}
export interface ErrorResponse<Data> {
  message: string
  isSuccess: boolean
  errors: string
  data?: Data
}

export type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>
}
