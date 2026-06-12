$(document).ready(function(){
    $(".faqHeader").on("click", function(){
        $(this).find(".faqIcon").attr("src","../../assets/FAQ/pluseicon.png")
        $(this).next(".faqAnswerWrapper").slideToggle()
    })
})
