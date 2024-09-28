export interface IDiets {
  id: string
  user_id: string
  diets: IDiet[]
}

export interface IDiet {
  id: string
  date: string
  type: string
  img: string
}
