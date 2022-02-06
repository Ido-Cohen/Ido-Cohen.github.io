$(document).ready(function () {
    if(localStorage.getItem("dark") === "true"){
        $("body").css({"background":"#38434f", "color":"white"});
        $("#switch").prop("checked", "true");
    }
   $("#switch").click(function () {
       if($(this).prop("checked")){
           // alert($(".badge-base.LI-profile-badge").attr("data-theme"));
           // $(".badge-base.LI-profile-badge").attr("data-theme", "dark");
           $("body").css({"background":"#38434f", "color":"white"});
           localStorage.setItem("dark", "true");
       }else{
           $("body").css({"background":"#ffffff", "color":"black"});
           localStorage.setItem("dark", "false");
           // $(".badge-base.LI-profile-badge").attr("data-theme", "light");
       }
   });
});