$(document).ready(function () {
   $("#switch").click(function () {
       if($(this).prop("checked")){
           // alert($(".badge-base.LI-profile-badge").attr("data-theme"));
           // $(".badge-base.LI-profile-badge").attr("data-theme", "dark");
           $("body").css({"background":"#38434f", "color":"white"});
       }else{
           $("body").css({"background":"#ffffff", "color":"black"});
           // $(".badge-base.LI-profile-badge").attr("data-theme", "light");
       }
   });
});