/**
 * checkResponse with takes response: object as input param
 * and return Promise
 * this method is checking response status and return data for reducers
 */
export const checkResponse = (response: object) => {
  const exception = new Error();

  if (response.status >= 200 && response.status < 300) {
    return new Promise((resolve) => {
      response.json().then((data) => {
        resolve(data);
      }).catch(() => resolve([]));
    });
  }

  throw exception;
};
