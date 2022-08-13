const fetchDataFromServer = () => {
  fetch('http://localhost:5000/data', { credentials: 'include' })
  .then((res) => res.json())
  .then((data) => console.log(data));
};

fetchDataFromServer();