import CryptoJS from 'crypto-js';
import {dotKeys} from './dotenv'


let ts = new Date().getTime()
let hash= CryptoJS.MD5(ts + dotKeys.private_key + dotKeys.public_key).toString()



export const marvelApi = {
  apiUrl: `https://gateway.marvel.com/v1/public/characters?limit=12&nameStartsWith=`,
  hash:   `&apikey=`+dotKeys.public_key+`&ts=`+ts+`&hash=`+hash,
}