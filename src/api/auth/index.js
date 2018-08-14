import fetch from '../../utils/fetch';

export default function (data) {
  console.log('auth-post: ', data);
  return fetch('auth', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: null
    })
  });
}
