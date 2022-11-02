$(() => {
  // HOME PAGE VARIABLES AND LOAD CONDITIONS
  let testimonialVisible = false;

  $("#testimonials-container").css("display", "flex");
  $("#slide-div").hide();
  $("#expand-more1").hide();

  //SLIDE FUNCTION TO REVEAL TESTIMONIALS
  const testimonialsReveal = () => {
    if (testimonialVisible === false) {
      $("#expand-less1").hide();
      $("#expand-more1").show();
      testimonialVisible = true;
    } else if (testimonialVisible === true) {
      $("#expand-less1").show();
      $("#expand-more1").hide();
      testimonialVisible = false;
    }
    $("#slide-div").slideToggle("slow");
  };

  //HOME PAGE BUTTON FUNCTIONS
  $("#testimonial-button").on("click", testimonialsReveal);

  //PROJECTS PAGE CODE
  let currentImageIndex = 0;
  let numOfImages = $(".carousel-images").children().length - 1;

  const nextButton = () => {
    $(".carousel-images")
      .children()
      .eq(currentImageIndex)
      .css("display", "none");
    if (currentImageIndex < numOfImages) {
      currentImageIndex++;
    } else {
      currentImageIndex = 0;
    }
    $(".carousel-images")
      .children()
      .eq(currentImageIndex)
      .css("display", "block");
  };

  const previousButton = () => {
    $(".carousel-images")
      .children()
      .eq(currentImageIndex)
      .css("display", "none");
    if (currentImageIndex > 0) {
      currentImageIndex--;
    } else {
      currentImageIndex = numOfImages;
    }
    $(".carousel-images")
      .children()
      .eq(currentImageIndex)
      .css("display", "block");
  };

  //

  $(".carousel-button-next").on("click", nextButton);
  $(".carousel-button-previous").on("click", previousButton);
});
