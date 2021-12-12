import axios from "axo"

// function  getData() {
//     axsios 
//     .get("https://jsonplaceholder.typicode.com/todos")
//     .then((response)=>{
//         console.log(response);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }

// const MY_URL = "https://jsonplaceholder.typicode.com/todos";

const getData =  async ()=>{
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");

        const todoData = response.data;
        console.log(todoData);

        return todoData;
        
    } catch (errors) {
        console.log(errors);
    }
};


