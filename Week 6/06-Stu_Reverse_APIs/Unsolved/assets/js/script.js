var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
// AJAX needs a third-party library (in this case JQUERY) to work. It returns the data in an array. AJAX is also compatible with all browser, including internet explorer (which fetch is not compatible with).
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
// Fetch returns an API call in an array as well but does it by pulling straight from the browser. It also provides a promise of the data soon to be obtained, which is an advancement from XMLHttpRequest. Although, Fetch is not compatible with internet explorer, but it is compatible with all recent browsers. 
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
// XMLHttpRequest gets XML data straight from the browser and puts it in XML format
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
// I did this within the comments above
