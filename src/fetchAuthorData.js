// NOTE: this file is only necessary for bonus objective #1

const authorEndpoint =
  "https://s3.us-east-2.amazonaws.com/codecademy-interview/entities.json";

// make a GET request to the above endpoint to get author data
const fetchAuthorData = async () => {
    const authors = await fetch(authorEndpoint, {mode: 'cors'}).then(response => response.json());
    return authors;
};

export default fetchAuthorData;
