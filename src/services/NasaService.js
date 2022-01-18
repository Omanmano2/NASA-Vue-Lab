import axios from 'axios'
import { AppState } from "../AppState"
import { NasaPhoto } from "../Models/NasaPhoto"


const apiKey = 'api_key=cwfQVrrw0OWka8B5tavDfWVCji7Odbk3UpDGl39H'

const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod'
})

class NasaService {
  async grabPictureByDate(searchTerm) {
    console.log('search term in service', searchTerm)
    const res = await nasaApi(`?date=${searchTerm}&${apiKey}`)
    console.log('seached picture res', res)
    AppState.picture =  new NasaPhoto(res.data)
  }
}

export const naseService = new NasaService()