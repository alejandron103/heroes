import {API_BASE, PARAMS_TO_REQUEST} from '../constants/common.js';

export async function getHeroes(){
  const request = await fetch(`${API_BASE}characters${PARAMS_TO_REQUEST}`);
  const response = await request.json();
  return await response.data;
}