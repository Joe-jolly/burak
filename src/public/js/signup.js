console.log("Signup frontend javascript file");

$(function() {});

function validateSignupForm() {
    const memberNick = $(".member-nick").val();
    const memberPhone = $(".member-phone").val();
    const memberPassword = $(".member-password").val();
    const confirmPassword = $(".confirm-password").val();
    
    if (
        memberNick === "" || 
        memberPhone === "" || 
        memberPassword === "" || 
        confirmPassword === ""
    ) {
        alert("Please insert all reuired inputs!");
        return false;
    }

    if (memberPassword !== confirmPassword) {
        alert("Passwrod differs, please check!");
        return false;
    }
}