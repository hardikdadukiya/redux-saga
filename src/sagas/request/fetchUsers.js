

const fetchGetUsers = async (id) => {
  console.log('fetchGetUsers', id)
  const url = !!id ?  `https://jsonplaceholder.typicode.com/users/${id}` : "https://jsonplaceholder.typicode.com/users/";
  return await  fetch(url, {
    method: "GET",
  })
  
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};


export default fetchGetUsers;