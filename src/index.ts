// #####################   type Definitions

// declaration file:



// axios use

// basic axios 



/* Basic 
import axios from 'axios'

axios.get('https://example.com/data').then(response=>{
    console.log(response.data);    
})

*/


// using TS 
import axios, {AxiosResponse} from 'axios'

interface Todo { // dtaat type of response we will get
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

const fetchData = async() =>{
    try {// axiosresponse is genericssponse<>
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        // response.  check this
    } 
    // catch (error) { // can use any but ot recommended
    catch (error: any) {
        if (axios.isAxiosError(error)){
            console.log("Axios Error", error.message)
        }
    }
}



// Fetch method

const fetchData2 = async() =>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        
        if (!response.ok){
            throw new Error(`HTTP error ${response.status}`)
        }

        const data: Todo = await response.json()
    } 
    // catch (error) { // can use any but ot recommended
    catch (error: any) {
        // check these methods
    }
}






/*
// Sometimes    `import axios, {AxiosResponse} from 'axios' `
{AxiosResponse} will get red lines in it. these are not errors 
As sometimes TS does not allow package andtypes to to imported in same line so 


    import axios, {AxiosResponse} from 'axios'

            OR 

    import axios from 'axios'
    import type {AxiosResponse} from 'axios'


    use this (2nd one). it tells that i want type as well 