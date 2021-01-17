const creatLogin = async () => {
  const EmailAddress = document.getElementById('Email');
  const Password = document.getElementById('Password');

  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      responseType: 'json',
    },
    body: JSON.stringify({
      EmailAddress: EmailAddress.value,
      Password: Password.value,
    }),
  };

  const response = await fetch(
    'https://servermoviehub.herokuapp.com/api/user/login',
    options
  );
  const resData = await response.json();
  console.log(resData);
  if (response.status === 200) {
    window.location.replace('./movies.html');
    alert(resData.message);
  } else alert(resData.message);
};
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  creatLogin();
});
