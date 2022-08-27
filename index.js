let firstname;
let lastname;
let email;
let password;

document.querySelector(".btn").onclick = function() {
    firstname = document.querySelector(".firstname").value;
    lastname = document.querySelector(".lastname").value;
    email = document.querySelector(".email").value;
    password = document.querySelector(".password").value;
    
    	if (firstname == ""){
	document.querySelector(".firstname").style.border = "2px solid red";
	}
	if (lastname == ""){
	document.querySelector(".lastname").style.border = "2px solid red";
	} 
	if (email == ""){
	document.querySelector(".email").style.border = "2px solid red";
	} 
	if (password == ""){
	document.querySelector(".password").style.border = "2px solid red";
	}
}



