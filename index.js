$(document).ready(function () {

    let showChuck = function (data) {
        let res = (JSON.parse(data.responseText).value);
        $("#chuck_joke").text(res);
    };
    $.ajax({method: "GET",
        url: "https://api.chucknorris.io/jokes/random",
        dataType: "json", complete: showChuck});

    let showGeek = function (data) {
        let res = (JSON.parse(data.responseText).joke);
        $("#geeks_joke").text(res);
    };
    $.ajax({method: "GET",
        url: "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist&type=single",
        dataType: "json", complete: showGeek});

    if(localStorage.getItem("dark") === "false"){
        $("body").css({"background":"#ffffff", "color":"black"});
        // $("#switch").prop("checked", "false");
        $("#switch").removeAttr("checked");
    }
   $("#switch").click(function () {
       if($(this).prop("checked")){
           $("body").css({"background":"#22272e", "color":"white"});
           localStorage.setItem("dark", "true");
       }else{
           $("body").css({"background":"#ffffff", "color":"black"});
           localStorage.setItem("dark", "false");
       }
   });
    $("#chuck img").click(function () {
        $.ajax({method: "GET",
            url: "https://api.chucknorris.io/jokes/random",
            dataType: "json", complete: showChuck});
    });
    $("#geeks img").click(function () {
        $.ajax({method: "GET",
            url: "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist&type=single",
            dataType: "json", complete: showGeek});
    });
});