console.log('App.js is running');

//JSX - Javascript XML

// var template = <p>This is JSX from App.js!</p>;
//This code is before installing Babel
var template = React.createElement('p', null, 'This is JSX from App.js!');
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
