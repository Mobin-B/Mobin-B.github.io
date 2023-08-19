var pictures_num = 17;

function load_page() {
    var characters = document.querySelector("#profiles");
    var output = "";

    for (var i = pictures_num; i >= 0; i--) {
        output += '<label class="profile"><input type="radio" name="profile" id="' + i + '"><img src="https://mobin-b.github.io/Database/Image/Profiles/' + i + '.png" alt = "" class="profile_img" ></label > ';
    }
    characters.innerHTML = output;
}

function submit() {
    var selected_char = 0;
    for(var i = pictures_num; i>=0; i--){
        if (document.getElementById(i).checked){
            selected_char = document.getElementById(i).id;
        }
    }
    
}

function home() {
    location = "https://mobin-b.github.io/Home/House.html"
}