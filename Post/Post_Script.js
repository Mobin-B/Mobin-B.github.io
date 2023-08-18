

var characters = document.getElementsByTagName("img");
console.log(characters);
var output = "";
var pictures_num = 17;
for (var i = pictures_num; i >= 0; i--) {
    output += '<label class="profile"><input type="radio" name="profile" checked><img src="https://mobin-b.github.io/Database/Image/Profiles/' + i + '.png" alt = "" class="profile_img" ></label > ';
}


function home() {
    location = "https://mobin-b.github.io/Home/House.html"
}