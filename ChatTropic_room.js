// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDUqp8Isw460c-uTKixJGZ4fhpxX_15ySU",
    authDomain: "chattropic.firebaseapp.com",
    databaseURL: "https://chattropic-default-rtdb.firebaseio.com",
    projectId: "chattropic",
    storageBucket: "chattropic.appspot.com",
    messagingSenderId: "763560798639",
    appId: "1:763560798639:web:2cc9dab0411219c103e75a"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
user_name = localStorage.getItem("user_name");
document.getElementById("welcoming_user").innerHTML = "Welcome to ChatTropic " + user_name + "!";
document.getElementById("logged_in_as").innerHTML = "Logged in as " + user_name;

function add_room() 
  {
   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
   });
alert("Room created!");
   localStorage.setItem("room_name", room_name);

   window.location = "ChatTropic_page.html";
 }



 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
  
    
     
     console.log("Room Name - " + Room_names); 
      row = "<div class='room_name' id="+Room_names+
      " onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
    
    
    });});}
 getData();


 function redirectToRoomName(name)
 {
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "ChatTropic_page.html";
 }



 function showAlert(){
  alert("Information about ChatTropic: Welcome to ChatTropic! Once you login (don't forget to read the terms and conditions), enter a room name and click 'add room'. Then, you will be taken to the message screen. You can send the message and even like it too! Under 'TRENDINGROOMS' you can also click the room names.");



}
 
 
 
 
 
 
 function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
alert("You are logged out!");
}