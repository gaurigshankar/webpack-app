require('../css/styles.scss')
const people = require('./people.js');
let $ = require('jquery');



$.each(people, function(key, value){
  $('body').append('<h1> The Person Name is '+people[key].name+'<h1>');
})

console.log(people)
