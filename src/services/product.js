const myHeaders = new Headers();
myHeaders.append("X-Authorization", "sk_test_177857f63f9ba6a44f3bc585043d342056cfc775c457f");
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

export const getProducts = fetch("https://api.chec.io/v1/assets", requestOptions)
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error)
);
