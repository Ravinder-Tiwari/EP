import axios from "axios";


const employeeService = axios.create({
    baseURL: "http://localhost:3000/api/employees",
    withCredentials: true,
})


/**
 * 
 * @returns 
 */

export const getEmployees = async () =>{
    try{
        const response = await employeeService.get("/");
        return response.data;
    }
    catch(err){
        console.error(err);
    }
}


/**
 * @param {*} employeeData 
 * @returns 
 */


export const addEmployee = async (employeeData) =>{
    try{
        const response = await employeeService.post("/", employeeData); 
        return response.data;
    }   
    catch(err){
        console.error(err);
    }
}

/**
 * 
 * @param {*} employeeId 
 * @param {*} employeeData 
 * @returns 
 */
export const updateEmployee = async (employeeId, employeeData) =>{
    try{
        const response = await employeeService.put(`/${employeeId}`, employeeData);
        return response.data;
    }   
    catch(err){
        console.error(err);
    }
}