import axios from 'axios';

// *##################################### GIT HTTP
export const  fetchInitData = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/message');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }   
    catch (error) {
        console.error('Error fetching initial data:', error.message);
        return null;
    }
}
// *##################################### POST HTTP
export const PostInitData = async (D) => {
    // *Front-End: Sending Data using axios
    const userData = {
        email: "user@example.com",
        password: "password123"
      };
      
      axios.post("/api/auth/register", D)
        .then((response) => console.log(response.data))  // Handle the response
        .catch((error) => console.log(error));
    // try {
    //     const PostResponse = await fetch('/api/auth/register',{
    //         method: 'POST',
    //         body: JSON.stringify(D),
    //         headers:  {'Content-Type': 'application/json'},
    //     })
    //     const result = await PostResponse.json();
    //     console.log('Response from server:', result);
    // }
    // catch (error) {
    //     console.error('Error posting data:', error);
    // }
}