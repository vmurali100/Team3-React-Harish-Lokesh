
var users=JSON.parse(localStorage.getItem("users"));
if(users){
    displayData(users)
}else{
    users=[];
}
function getValues(){
    var person={
        email:"",
        password:""
    }
   
//    person.email=document.getElementById("email").value
//    person.password=document.getElementById("password").value
    // person["email"]=document.getElementById("email").value
    // person["password"]=document.getElementById("password").value

    for(a in person){
        person[a]=document.getElementById(a).value;
       
    }
    users.push(person)
    localStorage.setItem("users",JSON.stringify(users))
    // console.log(person)
    displayData(users)
  
}

function displayData(users){
    document.getElementById("myTbody").innerHTML="";
//console.log(users)
    users.map(function(obj,i){
       var myTr=document.createElement("tr")
       for(a in obj){
           var myTd=document.createElement("td")
            myTd.innerHTML=obj[a]
           myTr.appendChild(myTd)
       }
        
       var editTd=document.createElement("td")
       var editBtn=document.createElement("button")
       editBtn.innerHTML="Edit"
       editTd.appendChild(editBtn)
       editBtn.setAttribute("class","btn btn-warning")
       myTr.appendChild(editTd)
      
       var delTd=document.createElement("td")
       var delBtn=document.createElement("button")
       delBtn.innerHTML="delete"
       delBtn.setAttribute("class"," btn btn-danger")
       delBtn.setAttribute("onclick","deleteUser("+ i +")")
       delTd.appendChild(delBtn)
       myTr.appendChild(delTd)

       
       document.getElementById("myTbody").appendChild(myTr)
    })

}