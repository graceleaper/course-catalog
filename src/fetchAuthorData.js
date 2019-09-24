// NOTE: this file is only necessary for bonus objective #1
import axios from 'axios'

const authorEndpoint =
  "https://s3.us-east-2.amazonaws.com/codecademy-interview/entities.json";

// make a GET request to the above endpoint to get author data
/*
const fetchAuthorData = async () => {
    const authors = await fetch(authorEndpoint, {mode: 'cors'}).then(response => response.json());
    return authors;
};
*/

/*
const fetchAuthorData = async () => {
  const authorsObj = await axios.get(authorEndpoint)
  //console.log(authorsObj.data.authors)
  const authors = await authorsObj.data.authors
  return authors
}
*/

export default axios.create({
  baseURL: authorEndpoint
})

// export default fetchAuthorData;
