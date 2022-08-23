(function () {
	if (localStorage.getItem('regsiterbc')) document.getElementById("loon8").style.backgroundColor = localStorage.getItem('regsiterbc');
	
    
})();
function validateForm(){
    var name = document.getElementById('name').value;
    var email= document.getElementById('email').value;
    var pass1= document.getElementById('pass1').value;
    var pass2= document.getElementById('pass2').value;
    var valid = true;
           
    if(name == ""){
         alert("name is empty");
                   valid = false;}
    else if(email == ""){
        alert("Email is empty");
                   valid = false;}
    else if(email.indexOf("@") == -1 || email.indexOf(".") == -1){
       alert("Please Enter valid email");
              valid = false;}
     else if(pass1!= pass2){
        alert("password doesnt match");
          valid = false;}
           return valid;
    } 