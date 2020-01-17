import './styles/scss/main.scss';
import './styles/css/style2.css';
import logMessage from './js/logger';

console.log("hello");
console.log('hello please work');
console.log('please continue to work');
console.log('this is index JS');
logMessage('hello from logMessage');


// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef
}
