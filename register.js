const creatUser = async () => {
    const Username = document.getElementById("Uname");
    const Firstname = document.getElementById("Fname");
    const Lastname = document.getElementById("Lname");
    const EmailAddress = document.getElementById("Email");
    const Password = document.getElementById("Password");
    //console.log(Password.value);
    const options = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
            responseType:"json",
        },
        body:JSON.stringify({
            UserName: Username.value,
            FirstName: Firstname.value,
            LastName: Lastname.value,
            EmailAddress: EmailAddress.value,
            Password: Password.value,
        })
    }

    const response = await fetch("http://localhost:8080/api/add/user", options);
    const resData = await response.json();
    console.log(resData);
}

const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    alert("Registered Succesfully")
    creatUser();
    window.location.replace('./login.html')
})
