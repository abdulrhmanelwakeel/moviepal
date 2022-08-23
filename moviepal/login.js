(function () {
	if (localStorage.getItem('loginbc')) document.getElementById("loon6").style.backgroundColor = localStorage.getItem('loginbc');
	
    
})();
function myFunction(){
    var un=document.forms["myform"]["uname"].value;
    var pw=document.forms["myform"]["pass"].value;
    if (un=="ali" && pw=="1234")
     { alert("welcome admin")
       window.location.href="csss/admin.html";
   
        }
         else if ( un=="ali" && pw=="123456")
        { 
          alert("welcome user")
            window.location.href="index.html";
               }
               else{
                   alert("wrong password")
               }
   
           }