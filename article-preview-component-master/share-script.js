
$(document).ready(() => {
    document.getElementsByTagName("button")[0].addEventListener("click", onShareButtonClick);
})


function onShareButtonClick() {
    if (!$("button").hasClass("share-button-clicked")) {
        $("button").addClass("share-button-clicked");
        $(".share-button img").addClass("share-button-clicked-img");
        $(".share").addClass("share-socials-box-active");
    }
    else{
        $("button").removeClass("share-button-clicked")
        $(".share-button img").removeClass("share-button-clicked-img")
        $(".share").removeClass("share-socials-box-active");
    }
}