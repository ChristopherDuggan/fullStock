import axios from 'axios'
const URL = 'http://localhost:3001'
const STOCKSAPI = 'https://cloud.iexapis.com/stable'
const apikey = 'pk_0942ab3ca4d34f93b4e7e34029501ebf'

const api = axios.create({
  baseURL: `${URL}`
})

const stocks = axios.create({
  baseURL: `${STOCKSAPI}`
})

//retrieve a symbol using its ticker
export const symbolGetter = async (symbol) => {
  try {
    const resp = await stocks.get(`/stock/${symbol}/quote?token=${apikey}`)
    return resp
  } catch (e) {
    return { data: "FAILED" }
  }
}

//login a user
export const loginUser = async (data) => {
  try {
    const resp = await api.post('/user/signin', data)
    return resp
  } catch (e) {
    console.log(e)
  }
}

//register a user
export const createUser = async (data) => {
  try {
    const resp = await api.post('/user/register', data)
    return resp
  } catch (e) {
    console.log(e)
  }
}

//update the balance of the user
export const updateBalance = async (id, data) => {
  try {
    const resp = await api.put(`/user/${id}/update`, data)
    return resp
  } catch (e) {
    console.log(e)
  }
}

//update portfolio stocks
export const addStock = async (data) => {
  try {
    const resp = await api.post(`/user/addstock`, data)
    return resp
  } catch (e) {
    console.log(e)
  }
}

//get all stocks using the id
export const getAllStocks = async (id) => {
  try {
    const resp = await api.get(`/user/${id}/getallstocks`)
    return resp
  } catch (e) {
    console.log(e)
  }
}
