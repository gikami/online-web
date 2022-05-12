import axios from 'axios';

export function getDadata(query) {
  return new Promise(async (resolve, reject) => {
    var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    var token = "3fb3ce0aa0eb785c1c9c4a967e78c2ff41454be8";
    await axios.post(
      url,
      { query },
      {
        headers: {
          "Authorization": "Token " + token
        }
      }).then(async (response) => {
        try {
          resolve(response);
        } catch (e) {
          reject(e)
        }
      }).catch((err) => {
        reject(err)
      });
  });
}