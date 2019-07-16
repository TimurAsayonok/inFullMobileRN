import { checkResponse } from '../../utils/resonse';

function requestsMiddleware({ dispatch }) {
  return (next) => (action) => {
    const {
      promise, type, payload
    } = action;

    if (!promise) return next(action);

    dispatch({
      type: `${type} start`,
      payload
    });

    return promise()
      .then((response: object) => checkResponse(response))
      .then(
        (result: object) => {
          dispatch({
            type: `${type} fulfilled`,
            payload: result
          });
        }, (error: object) => {
          dispatch({
            type: `${type} rejected`,
          })
        }
      );
  };
}

export default requestsMiddleware;