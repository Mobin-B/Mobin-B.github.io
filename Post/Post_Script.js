var usernames = ["Mobin", "Alireza"];

var pictures_num = 17;

function load_page() {
    var characters = document.querySelector("#profiles");
    var output = "";

    for (var i = pictures_num; i >= 0; i--) {
        output += '<label class="profile"><input type="radio" name="profile" id="' + i + '"><img src="https://mobin-b.github.io/Database/Image/Profiles/' + i + '.png" alt = "" class="profile_img" ></label > ';
    }
    characters.innerHTML = output;
}


function home() {
    location = "https://mobin-b.github.io/Home/House.html"
}



function submit() {
    var selected_char = 0;
    for (var i = pictures_num; i >= 0; i--) {
        if (document.getElementById(i).checked) {
            selected_char = document.getElementById(i).id;
        }
    }
    var username = document.querySelector("#username").value;
    var text = document.querySelector("#textarea").value;

    

    if (usernames.includes(username) && text.length >= 17) {
        var post_data = {};
        post_data.id = Math.floor(Math.random() * 9935);
        post_data.profileID = selected_char;
        post_data.username = username;
        post_data.text = text;

        var request = new XMLHttpRequest();

        request.open("POST", "https://mobin-b.github.io/Database/Json/Posts.json");

        request.onreadystatechange = function () {

            if (this.readyState === 400 && this.status === 201) {
                alert("Hello")
            }
        }

        request.setRequestHeader("Content-Type", "application/json");

        request.send(JSON.stringify(post_data))

        
        
    }

    else if (text.length <= 17) {
        document.querySelector("#textarea").style.border = "2px solid #ff3c3c"
        document.querySelector("#username").style.border = "2px solid #5b9a8b"
    }

    else {
        document.querySelector("#username").style.border = "2px solid #ff3c3c"
        document.querySelector("#textarea").style.border = "2px solid #5b9a8b"
    }

}