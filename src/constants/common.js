import CryptoJS from 'crypto-js';
const API_KEY = '8f750505355890a01761cbe9d299b9ae';
const PRIVATE_KEY = 'd3cae9978a9d9634cd124daf6db3b3eef6eb0fb3'
export const API_BASE = 'https://gateway.marvel.com:443/v1/public/';
export let TIME_STAMP = new Date().getTime();

export const PARAMS_TO_REQUEST = `ts=${TIME_STAMP}&apikey=${API_KEY}&hash=${generateHash()}`

export function generateHash(){
  return CryptoJS.MD5(`${TIME_STAMP}${PRIVATE_KEY}${API_KEY}`);
}