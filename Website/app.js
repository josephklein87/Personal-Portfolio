$(() => {
  //LIGHT MODE CODE

  if (localStorage.getItem(darkMode) === true) {
    $("h1").css("color", "black").css("background-color", "peachpuff");
    $(".bottom-links").css("background-color", "peachpuff");
    $(".navlinks").css("color", "black");
    $("html").css(
      "background-image",
      'url("https://i.imgur.com/Bz64jOS.jpeg")'
    );
    $(".nightmode").css("color", "black");
  } else if (localStorage.getItem(darkMode) === false) {
    $("h1").css("color", "black").css("background-color", "peachpuff");
    $(".bottom-links").css("background-color", "peachpuff");
    $(".navlinks").css("color", "black");
    $("html").css(
      "background-image",
      'url("https://i.imgur.com/Bz64jOS.jpeg")'
    );
    $(".nightmode").css("color", "black");
    locatStorage.setItem("darkMode", false);
  } else {
    console.log("No mode selected");
  }

  const lightModeDarkMode = () => {
    if (localStorage.getItem(darkMode) === true) {
      $("h1").css("color", "black").css("background-color", "peachpuff");
      $(".bottom-links").css("background-color", "peachpuff");
      $(".navlinks").css("color", "black");
      $("html").css(
        "background-image",
        'url("https://i.imgur.com/Bz64jOS.jpeg")'
      );
      $(".nightmode").css("color", "black");
      locatStorage.setItem("darkMode", false);
    } else if (localStorage.getItem(darkMode) === false) {
      $("h1").css("color", "white").css("background-color", "black");
      $(".bottom-links").css("background-color", "black");
      $(".navlinks").css("color", "white");
      $("html").css(
        "background-image",
        'url("https://i.imgur.com/r6JPltq.jpg")'
      );
      $(".nightmode").css("color", "white");
      locatStorage.setItem("darkMode", true);
    } else {
      $("h1").css("color", "black").css("background-color", "peachpuff");
      $(".bottom-links").css("background-color", "peachpuff");
      $(".navlinks").css("color", "black");
      $("html").css(
        "background-image",
        'url("https://i.imgur.com/Bz64jOS.jpeg")'
      );
      $(".nightmode").css("color", "black");
      locatStorage.setItem("darkMode", false);
    }
  };

  $(".lightmode").on("click", lightModeDarkMode);

  // HOME PAGE VARIABLES AND LOAD CONDITIONS

  $(".hidden").hide().delay(200);
  $(".hidden").fadeIn("slow");

  let testimonialVisible = false;
  $(".menu-modal").hide();
  $("#testimonials-container").css("display", "flex");
  $("#slide-div").hide();
  $("#expand-more1").hide();

  //SLIDE FUNCTION TO REVEAL MENU
  let menuStatus = false;

  const menuReveal = () => {
    $(".menu-modal").slideToggle("slow");
  };

  $(".bottom-menu").on("click", menuReveal);

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

  //PROJECTS PAGE MODALS CODE

  const openModal = (e) => {
    if (e.target.id === "covert") {
      $("#covert-modal").css("display", "block");
    } else if (e.target.id === "v-force") {
      $("#v-force-modal").css("display", "block");
    } else if (e.target.id === "wedlock") {
      $("#wedlock-modal").css("display", "block");
    } else if (e.target.id === "code1") {
      $("#code1-modal").css("display", "block");
    }
  };

  const closeModal = (e) => {
    $(".modal").css("display", "none");
    //HAD ISSUES WITH THE VIDEO STILL PLAYING AFTER THE DIV WAS CLOSED, THIS IS THE SOLUTION I FOUND
    if (e.target.id === "v-force-close") {
      $("#v-force-video").attr("src", "#");
      $("#v-force-video").attr(
        "src",
        "https://www.youtube.com/embed/8oaKh9GEPCs"
      );
    } else if (e.target.id === "wedlock-close") {
      $("#wedlock-video").attr("src", "#");
      $("#wedlock-video").attr(
        "src",
        "https://www.youtube.com/embed/q75nJRGXO3U"
      );
    }
  };

  //PROJECTS PAGE CAROUSEL BUTTONS

  $(".carousel-button-next").on("click", nextButton);
  $(".carousel-button-previous").on("click", previousButton);

  //MODAL BUTTONS

  $("#covert").on("click", openModal);
  $(".close").on("click", closeModal);
  $("#v-force").on("click", openModal);
  $("#wedlock").on("click", openModal);
  $("#code1").on("click", openModal);
});
