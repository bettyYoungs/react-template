import  { post } from "."

export const loginByName = (data) => {
  return post('url', data)
}