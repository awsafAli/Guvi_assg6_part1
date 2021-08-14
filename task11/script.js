let login = 'Employee';
let message = (login == 'Employee') ? 'Greetings':
  (login == '') ? 'No login' :
  '';
console.log(message);