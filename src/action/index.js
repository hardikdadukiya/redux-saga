// export const getUser =  () =>{
//     return{
//         type: "GET_USERS_REQUESTED"
//     }
// }
// export const getUser =  () =>{
//     return{
//         type: "GET_USERS_REQUESTED"
//     }
// }
export const getUsers =  (payload) =>{
    return{
        type: "GET_USERS_REQUESTED",
        payload: payload,
    }
}