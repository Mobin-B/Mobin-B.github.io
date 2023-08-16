

var request = new XMLHttpRequest();

var file;

request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        file = JSON.parse(this.responseText);
        loadfunc(file);
    }
}

request.open("GET", "https://mobin-b.github.io/Database/Json/Posts.json", true);
request.send();

var load_numbers = 5;

function loadfunc(text) {



    var main_articles = document.querySelector("#articles");

    var output = "";



    for (var key = text.length - 1; key >= 0 && key > text.length - load_numbers; key--) {
        var profile = Math.floor(Math.random() * 11);
        output += '<article class="main_article not-selectable">';

        output += '<header class="article_profile"><img src="https://mobin-b.github.io/Database/Image/Profiles/' + profile + '.png" alt="" class="article_avatar">';
        output += '<h5 class="article_username">' + text[key].username + '</h5></header>';

        output += '<article class="moit"><p>' + text[key].text + '</p></article>';

        output += '</article><hr>';
    }


    main_articles.innerHTML = output;
}

// ------------------------------------------------------------------

function load_more() {

    var main_articles = document.querySelector("#articles");

    var output = "";

    for (var key = file.length - load_numbers; key >= 0 && key > file.length - (load_numbers + 5); key--) {
        var profile = Math.floor(Math.random() * 11);
        output += '<article class="main_article not-selectable">';

        output += '<header class="article_profile"><img src="https://mobin-b.github.io/Database/Image/Profiles/' + profile + '.png" alt="" class="article_avatar">';
        output += '<h5 class="article_username">' + file[key].username + '</h5></header>';

        output += '<article class="moit"><p>' + file[key].text + '</p></article>';

        output += '</article><hr>';
    }

    main_articles.innerHTML += output;
    load_numbers += 5;

}

// ------------------------------------------------------------------

function post() {
    location = "https://mobin-b.github.io/Post/Post.html"
}

function user() {
    location = "https://mobin-b.github.io/Setting/User.html"
}

// ------------------------------------------------------------------