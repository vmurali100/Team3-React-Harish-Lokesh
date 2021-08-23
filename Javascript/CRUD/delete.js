function deleteUser(i){
    users.splice(i,1)
    displayData(users)
    localStorage.setItem("users",JSON.stringify(users))
}