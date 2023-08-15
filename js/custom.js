$(function(){
	'use-strict';

	AOS.init({
	 	once: true,
	 	duration: 1000,
	});
	
});

function redirectToSignIn() {
	window.location.href = "./account/login.php";
}

function redirectToRegister() {
	window.location.href = "./account/register.php";
}