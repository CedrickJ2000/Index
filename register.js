const creatUser = async () => {
  const Username = document.getElementById('Uname');
  const Firstname = document.getElementById('Fname');
  const Lastname = document.getElementById('Lname');
  const EmailAddress = document.getElementById('Email');
  const Password = document.getElementById('Password');
  //console.log(Password.value);
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      responseType: 'json',
    },
    body: JSON.stringify({
      UserName: Username.value,
      FirstName: Firstname.value,
      LastName: Lastname.value,
      EmailAddress: EmailAddress.value,
      Password: Password.value,
    }),
  };

  const response = await fetch(
    'https://servermoviehub.herokuapp.com/api/add/user',
    options
  );
  const resData = await response.json();
  console.log(resData);

  if (response.status === 200) {
    alert('Registered Succesfully');

    window.location.replace('./login.html');
  } else {
    alert(resData.message);
  }
};

const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  creatUser();
});
