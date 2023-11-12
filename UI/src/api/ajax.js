import axios from 'axios';

export default async function ajax(url, data = {}, method = 'GET') {
  let result = {};
  try {
    if (method === 'GET') {
      result = await axios.get(url, { params: data });
    } else {
      result = await axios.post(url, data);
    }
  } catch (error) {
    alert(error.message);
  }
  return result.data;
}
