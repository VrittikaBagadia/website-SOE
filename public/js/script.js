// The file that operates the slideshow. It works by hiding every picture unless
//   it is the selected image in the "mySlides" class.
var slideIndex = 0;
showSlides();
getComments();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


function getComments() {

    var url = new URL("https://www.googleapis.com/youtube/v3/commentThreads"),
        params = { part: "snippet,replies", videoId: "qjccnwBmB-w", key: *ASK ANNA* }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));
        });

}