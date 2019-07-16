
export const checkResponse = (response: object) => {
  const exception = new Error();

  if (response.status >= 200 && response.status < 300) {
    return new Promise((resolve) => {
      response.json().then((data) => {
        resolve(data);
      }).catch(() => resolve([]));
    });
  } else {
    throw exception;
  }
};