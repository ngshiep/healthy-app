export interface IUserRecords {
  id: string
  user_id: string
  body_yellow: number[]
  body_blue: number[]
  exercise: IExercise[]
}

export interface IExercise {
  id: number
  name: string
  calories: number
  time: number
}
