//ADDED THIS TO SET THE BACKGROUND TO BLACK BEFORE THE JQUERY TO MAKE NIGHTMODE LOAD LOOK NICER

if (window.localStorage.getItem("darkLightMode") === "dark") {
  const html = document.querySelector("html");
  html.style.display = "block";
  html.style.backgroundColor = "black";
}

$(() => {
  //LIGHT MODE CODE

  $(".dark-mode").hide();

  const lightModeBt = () => {
    $(".dark-mode").show();
    $(".light-mode").hide();
    $("h1").css("color", "black").css("background-color", "peachpuff");
    $(".bottom-links").css("background-color", "peachpuff");
    $(".navlinks").css("color", "black");
    $(".testimonials")
      .css("background-image", "none")
      .css("background-color", "white")
      .css("border", "1px peachpuff solid");
    $("html")
      .css("background-image", 'url("https://i.imgur.com/EbsdWxT.png")')
      .css("background-color", "white");
    $(".nightmode").css("color", "black");
    $("#contact-link").css("border-color", "black");
    $(".modal-textbox").css("background-color", "rgb(255, 235, 218)");
    $("#skeletor").hide();
    $("#he-man").show();
    window.localStorage.setItem("darkLightMode", "light");
  };

  const darkModeBt = () => {
    $(".dark-mode").hide();
    $(".light-mode").show();
    $("h1").css("color", "white").css("background-color", "black");
    $(".bottom-links").css("background-color", "black");
    $(".navlinks").css("color", "white");
    $(".testimonials").css("background-color", "").css("border", "");
    $(".testimonials").css(
      "background-image",
      "linear-gradient(hwb(0 0% 100% / 0), rgb(77, 84, 133))"
    );
    $("html")
      .css("background-image", 'url("https://i.imgur.com/r6JPltq.jpg")')
      .css("background-color", "black");
    $(".nightmode").css("color", "white");
    $("#contact-link").css("border-color", "white");
    $(".modal-textbox").css("background-color", "rgb(48, 48, 48)");
    $("#he-man").hide();
    $("#skeletor").show();
    window.localStorage.setItem("darkLightMode", "dark");
  };

  if (window.localStorage.getItem("darkLightMode") === "light") {
    lightModeBt();
  } else {
    console.log("It's dark mode.");
  }

  // SET HTML TO ONLY SHOW AFTER NIGHT MODE SETTING IS LOADED ON THE PAGE OTHERWISE IF DAY MODE IS SELECTED YOU SEE A FLASH OF THE ORIGINAL STYLING

  $(".light-mode").on("click", lightModeBt);
  $(".dark-mode").on("click", darkModeBt);

  // HOME PAGE VARIABLES AND LOAD CONDITIONS

  $("html").show();
  $(".page-head").fadeIn("slow");
  $("nav").fadeIn("slow");

  $(".hidden").hide().delay(400);
  $(".hidden").fadeIn("slow");

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
  let testimonialVisible = false;

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

  //CAROUSEL CODE
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
