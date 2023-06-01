function login(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'josep' && password === '1234') {
      window.location.href = 'sesion.html';
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  };

  
