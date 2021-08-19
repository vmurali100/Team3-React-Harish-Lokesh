var person={
    email:"",
    password:""
}
var users=[];
function getValues(){
   
//    person.email=document.getElementById("email").value
//    person.password=document.getElementById("password").value
    // person["email"]=document.getElementById("email").value
    // person["password"]=document.getElementById("password").value

    for(a in person){
        person[a]=document.getElementById(a).value;
       
    }
    users.push(person[a])
    // console.log(person)
    displayData(users)
  
}

function displayData(users){
    users.map(function(obj){
        console.log(users)
    })

}