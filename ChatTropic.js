function addUser(){
  
    var user_name= document.getElementById("username").value;
    document.getElementById("username").innerHTML="";
     localStorage.setItem("user_name", user_name);
     alert("You are logged in!");
     window.location= "ChatTropic_room.html";
     
    }




function showAlert() {
    
 alert("Terms and Conditions: No cyberbullying, it's not nice to cyberbully people. Everyone has feelings you know? No sharing personal information, please don't share your info. That's not safe. And last, enjoy!");

  
}


