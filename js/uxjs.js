function validate(){
	
	//varible defiend
	var name1 = document.getElementById("yourName").value;
	var email1 = document.getElementById("yourEmail").value;
	var telnumber1 = document.getElementById("telNumber").value;
	var place1 = document.getElementById("uxPlace").value;
	var comments1 = document.getElementById("comments").value;
	
	//pattern defined
	var namepattern =/^[a-z A-Z]+$/;
	var emailpattern =/^[a-z]+[a-z0-9\.\_\-]+[@]+[a-z]+[.]+[a-z\.]+$/;
	var mobilepattern =/^[0-9]+$/;
	if(name1.length==0 && email1.length==0 && telnumber1.length==0 && comments1.length==0 && place1.length==0){
		document.getElementById("yourName").style.borderBottom = "1px solid red";
		document.getElementsByClassName("error")[0].innerHTML = "Please enter Your Name";
		document.getElementById("yourEmail").style.borderBottom = "1px solid red";
		document.getElementsByClassName("error")[1].innerHTML = "Please enter your email";
		document.getElementById("telNumber").style.borderBottom = "1px solid red";
		document.getElementsByClassName("error")[2].innerHTML = "Please enter your mobile number"
		document.getElementById("comments").style.borderBottom = "1px solid red";
		document.getElementsByClassName("error")[4].innerHTML = "Please enter min 50 characters";
		document.getElementById("uxPlace").style.borderBottom = "1px solid red";
		document.getElementsByClassName("error")[3].innerHTML = "Please enter your location";
		
	}
	//name validation
	if(name1.length==0){
		document.getElementsByClassName("error")[0].style.display = "block";
		document.getElementById("yourName").style.borderBottom = "1px solid red";
		document.getElementById("yourName").focus();
		document.getElementsByClassName("error")[0].innerHTML = "Please enter Your Name";
		return false;
	}
	//name pattern validation
	if(!name1.match(namepattern)){
		document.getElementsByClassName("error")[0].style.display = "block";
		document.getElementById("yourName").style.borderBottom = "1px solid red";
		document.getElementsByClassName("error")[0].innerHTML = "Please enter only alphabetical letters";
		document.getElementById("yourName").focus();
		return false;
	}
	//if name validation success
	else{
		document.getElementsByClassName("error")[0].style.display = "none";
		document.getElementById("yourName").style.borderBottom = "1px solid green";
	}
	//email
	if(email1.length==0){
		document.getElementsByClassName("error")[1].style.display = "block";
		document.getElementById("yourEmail").style.borderBottom = "1px solid red";
		document.getElementById("yourEmail").focus();
		document.getElementsByClassName("error")[1].innerHTML = "Please enter your email";
		return false;
	}
	//email pattern validation
	if(!email1.match(emailpattern)){
		document.getElementsByClassName("error")[1].style.display = "block";
		document.getElementById("yourEmail").style.borderBottom = "1px solid red";
		document.getElementsByClassName("error")[1].innerHTML = "Please enter valid email";
		document.getElementById("yourEmail").focus();
		return false;
	}
	//email validation success
	else{
		document.getElementsByClassName("error")[1].style.display = "none";
		document.getElementById("yourEmail").style.borderBottom = "1px solid green";
	}
	//mobile validation
	if(telnumber1.length==0){
		document.getElementsByClassName("error")[2].style.display = "block";
		document.getElementById("telNumber").style.borderBottom = "1px solid red";
		document.getElementById("telNumber").focus();
		document.getElementsByClassName("error")[2].innerHTML = "Please enter your mobile number"
		return false;
	}
	if(telnumber1.length <= 9){
		document.getElementsByClassName("error")[2].style.display = "block";
		document.getElementById("telNumber").style.borderBottom = "1px solid red";
		document.getElementById("telNumber").focus();
		document.getElementsByClassName("error")[2].innerHTML = "Enter 10 digits of your mobile number";
		return false;
	}
	//mobile pattern validation
	if(!telnumber1.match(mobilepattern)){
		document.getElementsByClassName("error")[2].style.display = "block";
		document.getElementById("telNumber").style.borderBottom = "1px solid red";
		document.getElementsByClassName("error").innerHTML = "Please enter your valid mobile number";
		document.getElementById("telNumber").focus();
		return false;
	}
	//mobile validation success
	else{
		document.getElementsByClassName("error")[2].style.display = "none";
		document.getElementById("telNumber").style.borderBottom = "1px solid green";
	}
	if(place1.length == 4){
		document.getElementsByClassName("error")[4].style.display = "block";
		document.getElementById("comments").style.borderBottom = "1px solid green";
		document.getElementById("comments").focus();
		document.getElementsByClassName("error")[4].innerHTML = "Please enter min 50 characters";
		return false;
	}
	else{
		document.getElementsByClassName("error")[4].style.display = "none";
		document.getElementById("comments").style.borderBottom = "1px solid green";
		
	}
	//comments
	if(comments1.length <= 49){
		document.getElementsByClassName("error")[4].style.display = "block";
		document.getElementById("comments").style.borderBottom = "1px solid red";
		document.getElementById("comments").focus();
		document.getElementsByClassName("error")[4].innerHTML = "Please enter min 50 characters";
		return false;
	}
	else{
		document.getElementsByClassName("error")[4].style.display = "none";
		document.getElementById("comments").style.borderBottom = "1px solid green";
		
	}
}


//character validation
function uxNumber(key){
	
     var keycode = (key.which) ? key.which : key.keyCode;
     var phn = document.getElementById('txtphn');
     if (!(keycode==8 || keycode==46)&&(keycode < 48 || keycode > 57))
         return false;
     else
         return true;
	
}
function uxcharcters(key){
    var keycode = (key.which) ? key.which : key.keyCode;
    if ((keycode<=122 && keycode>=97) || (keycode<=90 && keycode>=65)) {
        return true;
    }

	else{
		return false;
	}
}
