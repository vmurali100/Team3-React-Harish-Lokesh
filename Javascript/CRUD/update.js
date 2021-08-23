
function editUser(i){
    index=i;
    // console.log(users[i])
    for(a in users[i]){
        document.getElementById(a).value=users[i][a];
    }

}

function clearForm(obj){
    for(a in obj){
        document.getElementById(a).value="";
    }
}

function updateUser(){
    var newPerson={
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }
    users[index]=newPerson
    displayData(users)
    clearForm(users[index])

}

