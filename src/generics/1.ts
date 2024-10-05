import axios from "axios";

async function fetchData<T>(url: string): Promise <T>{
    try {
        const response = await axios.get(url);
        return response.data
    } catch (error) {
        throw new Error(`Error fetching from ${url}: ${error}`);
    }
}

fetchData<{ id: number; name: string }>('https://jsonplaceholder.typicode.com/users/1')
  .then((data) => console.log(data))
  .catch((err) => console.error(err.message));