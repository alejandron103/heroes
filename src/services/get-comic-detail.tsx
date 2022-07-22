import { PARAMS_TO_REQUEST } from '../constants/common.js';

export async function getComicDetail(resourceURI: string = ''): Promise<ComicDetail> {
  if (!resourceURI) return new Error('resource not found');

  const request = await fetch(`${resourceURI}?${PARAMS_TO_REQUEST}`);
  const response = await request.json();
  const results = await response.data.results;
  if (Object.keys(results).length > 1) {
    const { digitalId, title, description, prices, thumbnail } = results;
    const imageUrl = `${thumbnail.path}.${thumbnail.extension}`
    const price = prices[1].price;
    return { digitalId, title, description, price, imageUrl }
  }
}