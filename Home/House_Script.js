

var request = new XMLHttpRequest();

request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var file = JSON.parse(this.responseText);
        loadfunc(file);
    }
}

request.open("GET", "https://mobin-b.github.io/Database/Json/Posts.json", true);
request.send();

function loadfunc(text) {



    var main_articles = document.querySelector("#articles");

    var output = "";


    for (var key in text) {

        var profile = Math.floor(Math.random() * 11);
        output += '<article class="main_article not-selectable">';

        output += '<header class="article_profile"><img src="../Database/Image/Profiles/' + profile + '.png" alt="" class="article_avatar">';
        output += '<h5 class="article_username">' + text[key].username + '</h5>';

        output += '<article class="moit"><p>' + text[key].text + '</p></article>';

        output += '<footer class="article_footer">';
        output += '<i class="bi bi-hand-thumbs-up article_footer_items">&nbsp; ' + text[key].like + '</i>';
        output += '<i class="bi bi-hand-thumbs-down article_footer_items">&nbsp; ' + text[key].dislike + '</i>';
        output += '</footer>'

        output += '</article><hr>';
    }


    main_articles.innerHTML = output;
}

// var text = JSON.parse(request.responseText);

// request.onreadystatechange = function () {
//     if (request.readyState === 4 && request.status === 200) {

//         var output;
//         for (var key in text) {
//             output += '<article class="main_article not-selectable">';

//             output += '<header class="article_profile"><img src="../Database/Image/Profiles/Avatar.webp" alt="" class="article_avatar">';
//             output += '<h5 class="article_username">' + text[key].username + '</h5>';

//             output += '<article class="moit"><p>' + text[key].text + '</p></article>';

//             output += '<footer class="article_footer">';
//             output += '<i class="bi bi-hand-thumbs-up article_footer_items">&nbsp; ' + text[key].like + '</i>';
//             output += '<i class="bi bi-hand-thumbs-down article_footer_items">&nbsp; ' + text[key].dislike + '</i>';
//             output += '</footer>'

//             output += '</article><hr>';
//         }

//         document.getElementById(articles).innerHTML = output;

//     }
// }




function post() {
    location = "https://mobin-b.github.io/Post/Post.html"
}