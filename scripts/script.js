console.log("huh?",this);

//var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";
// var uri = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
var uri = "https://whois.fdnd.nl/api/v1/member?id=";
var id = "cldczh6fy17gf0avwjidc11mi";

var card = document.querySelector(".flip-card-inner");
var cardButton;// = document.querySelector("header button"); //button voor meer info
var header = document.querySelector("header");
var titel = document.querySelector("h1");
var back = document.querySelector("main");
var backButton;// = document.querySelector("main button"); //button voor meer info
var loader = document.querySelector(".loader");
console.log("loader",loader);



function apiFetch(){ //Rest Api call met Fetch
    console.log("function loadRestApiFetch");
    //loader.classList.add('show');
    titel.textContent = "loading";

    fetch(uri+id).then(function(response) {
            console.log(response.headers.get('Content-Type'));
            console.log(response.statusText);
            return response.json();

    }).then(function(data) {
        var member = data.member;
        console.log('Request successful', member);

        //eerst de loader weg halen !
        //loader.classList.remove('show');

        //html renderen met JSON data
        console.log("name: "+member.name)

        //voorkant
        titel.textContent = member.name + " " + member.surname + " - " + member.nickname;
        cardButton = document.createElement("button");
        cardButton.textContent = "bio";
        cardButton.onclick = function() { card.classList.add("flip"); }
        header.appendChild(cardButton);

        //achterkant
        back.innerHTML = member.bio.html;
        backButton = document.createElement("button");
        backButton.textContent = "terug";
        backButton.onclick = function() { card.classList.remove("flip"); }
        back.appendChild(backButton);

    }).catch(function(error) {
        console.log('Request failed', error)

    });
}
apiFetch();






/* BRONNEN
https://medium.com/@nagachaitanyakonada/javascript-window-history-pushstate-tutorial-56e2126eaff1
https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent

https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
https://developer.mozilla.org/en-US/docs/web/api/eventlistener
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

*/
/* DEV BRONNEN
https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
https://medium.com/swlh/avoiding-cors-errors-on-localhost-in-2020-5a656ed8cefa
*/
