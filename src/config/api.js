import axios from "axios"

// for django
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = "csrftoken"

const apiClient = axios.create({
  baseURL: process.env.API_URL || "https://murch-waitlist.herokuapp.com/",
  withCredentials: true,
})

// apiClient.interceptors.request.use((config) => {

// })

const { get, post, put, delete: destroy } = apiClient
export { get, post, put, destroy }
