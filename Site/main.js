$(document).ready(function(){
    $('.btn1').click(function(){
        $(this).addClass("loader")

        setTimeout(function(){
            $('.btn1').addClass("finished");
            $('.btn1').removeclass("loader")
        },3000)
    })
})