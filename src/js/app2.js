require('../css/styles.scss')
const employees = require('./employee.js');
let $ = require('jquery');



$.each(employees, function(key, value){
  $('body').append('<h1> The Employee Name is '+employees[key].name+'<h1>');
})

console.log(employees)
