// create array of images, strings
  //strings contain path to images

// image tracker variable

// var votes = []
// click buttons back/skip to change images, function
// function previousImage() {
//     imageNumber > 0 ? changeImage(--i) : 0
// }
// function nextImage() {
//     imageNumber + 1 < images.length ? changeImage(++i) : calculateVotes()
// }
//   $(".btn[value='Skip']").on("click", function() {
//     imageNumber += 1;
//     $("#image-to-vote-on").attr("src",foodPics[imageNumber]);
//   });
//   $(".btn[value='Back']").on("click", function() {
//     imageNumber -= 1;
//     $("#image-to-vote-on").attr("src",foodPics[imageNumber]);
//   });
// });



  // back button move back to previous image and stops at the image
  // skip button calls next image in the array
// rate function for deliciousness
  // dropdown 1-5
  //score gets saved to specific image in array
    // function
// at end of change images
  // math function to take average of score array
  var images = ["images/food1.jpg", "images/food2.jpg", "images/food3.jpg", "images/food4.jpg", "images/food5.jpg", "images/food6.jpg", "images/food7.jpg"];
var i = 0;
var votes = [];
function previousImage() {
    i > 0 ? changeImage(--i) : 0
}
function nextImage() {
    i + 1 < images.length ? changeImage(++i) : calculateVotes()
}
function changeImage() {
    $("#image-to-vote-on").attr("src", images[i]);
    $("#your-vote>option").removeAttr("selected")
}
function calculateVotes() {
    var ave = 0;
    if (votes.length !== 0) {
        votes.forEach(function(element) {
            ave += parseInt(element)
        });
        ave = (Math.round((ave / votes.length) * 100) / 100).toFixed(2)
    }
    $("#image-to-vote-on+div").text("Your total deliciousness average rating is: " + ave)
}
$(document).ready(function() {
    $("#your-vote").on("change", function() {
        if (i < images.length) {
            votes[i] = $("#your-vote").val();
            nextImage()
        }
    });
    $("#buttons-wrapper .btn[value='Skip']").on("click", nextImage);
    $("#buttons-wrapper .btn[value='Back']").on("click", previousImage)
});
