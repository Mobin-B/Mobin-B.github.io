

var request = new XMLHttpRequest();
request.open('GET', 'https://mobin-b.github.io/Database/Json/Posts.json');

var posts = JSON.parse(request.responseText);

request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {

        var output;
        for (var key in posts) {
            output += '<article class="main_article not-selectable">';

            output += '<header class="article_profile"><img src="../Database/Image/Profiles/Avatar.webp" alt="" class="article_avatar">';
            output += '<h5 class="article_username">' + posts[key].username + '</h5>';

            output += '<article class="moit"><p>' + posts[key].text + '</p></article>';

            output += '<footer class="article_footer">';
            output += '<i class="bi bi-hand-thumbs-up article_footer_items">&nbsp; ' + posts[key].like + '</i>';
            output += '<i class="bi bi-hand-thumbs-down article_footer_items">&nbsp; ' + posts[key].dislike + '</i>';
            output += '</footer>'

            output += '</article><hr>';
        }

        document.getElementById(articles).innerHTML = output;

    }
}

request.send();


function post() {
    location = "https://mobin-b.github.io/Post/Post.html"
}