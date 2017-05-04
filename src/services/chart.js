import Ajax from '../utils/ajax';

export async function post(url, params) {
  const ajax = new Ajax();
  return await ajax.post(url, params);
}