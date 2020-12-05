$("#menu-dropdown").click(function(){
    if($("#responsive-menu").css("display") === "flex"){
        $("#responsive-menu").css("display", "none")
    }else{
        $("#responsive-menu").css("display", "flex")
    }
})