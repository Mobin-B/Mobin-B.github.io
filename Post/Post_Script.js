var usernames = ["Mobin", "Alireza"];

var pictures_num = 17;

function load_page() {
    var characters = document.querySelector("#profiles");
    var output = "";

    for (var i = pictures_num; i >= 0; i--) {
        output += '<label class="profile"><input type="radio" name="profile" id="' + i + '"><img src="../Database/Image/Profiles/' + i + '.png" alt = "" class="profile_img" ></label > ';
    }
    characters.innerHTML = output;
}


function home() {
    location = "../Home/House.html"
}



function submit() {
    var selected_char = 0;
    for (var i = pictures_num; i >= 0; i--) {
        if (document.getElementById(i).checked) {
            selected_char = parseInt(document.getElementById(i).id);
        }
    }
    parseInt(selected_char);

    var message_username = document.querySelector("#username").value;
    var message_text = document.querySelector("#textarea").value;

    let message_data = {};

    message_data.id = Math.floor(Math.random() * 100);
    message_data.profileID = selected_char;
    message_data.username = message_username;
    message_data.text = message_text;

    console.log(JSON.stringify(message_data));

    var api_url = "../Database/Json/Posts.json";

    fetch(api_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message_data)
    }).then(response => response.json())
        .then(result => {
            alert(JSON.stringify(result))
        })


    console.log("Number 1");
    // ----------------------------------
    fetch(api_url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message_data)
    }).then(response => response.json())
        .then(result => {
            alert(JSON.stringify(result))
        })

    console.log("Number 2");
    // ----------------------------------
    (async () => {
        const rawResponse = await fetch(api_url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message_data)
        });
        const content = await rawResponse.json();

        console.log(content);
        console.log("Number 3");
    })();




    // if (usernames.includes(username) && text.length >= 17) {
    //     var post_data = {};
    //     post_data.id = Math.floor(Math.random() * 9935);
    //     post_data.profileID = selected_char;
    //     post_data.username = username;
    //     post_data.text = text;

    //     var request = new XMLHttpRequest();

    //     request.open("POST", "../Database/Json/Posts.json", true);

    //     request.onreadystatechange = function () {
    //         console.log("Work Done!");
    //     }

    //     request.setRequestHeader("Content-Type", "application/json");

    //     request.send(JSON.stringify(post_data))


    // }

    // else if (text.length <= 17) {
    //     document.querySelector("#textarea").style.border = "2px solid #ff3c3c"
    //     document.querySelector("#username").style.border = "2px solid #5b9a8b"
    // }

    // else {
    //     document.querySelector("#username").style.border = "2px solid #ff3c3c"
    //     document.querySelector("#textarea").style.border = "2px solid #5b9a8b"
    // }

}

function length_check() {
    var text_area = document.querySelector("#textarea");
    var length_text = document.querySelector("#progress_text");
    length_text.innerHTML = text_area.value.length + "/140";
    var progress = document.querySelector("#progress");
    progress.value = text_area.value.length;
}