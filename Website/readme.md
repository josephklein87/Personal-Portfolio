PROJECT 1 - PERSONAL PORTFOLIO
by Joe Klein

LINK TO PROJECT: https://clinquant-dodol-8ebe50.netlify.app/

In this project, I created a personal portfolio website using JAVASCRIPT, JQUERY, HTML and CSS.

My goal was to create a website that was visually appealing (in both site look and how it loaded in) and contained multiple points of JAVASCRIPT or JQUERY interaction.

THOSE INTERACTIONS ARE AS FOLLOWS.

1) Using JQUERY the user can expand a section on the homepage with a click of a button. This reveals using the slideDown() function, client testimonials.

2) To prevent the navbar from being too crowded, when it reaches a  window size of 600px, JQUERY commands will hide the links on the navbar, and show a simple menu icon instead. Clicking this with reveal the new menu bar that slides up to fill the page with large area buttons easier to click on a phone. I used hide(), show(), and slideDown()/slideUp() functions. I set th bottom position of the element that slides up to zero so it will slide up instead of down since the menu is on the bottom of the screen. 

3) On the projects page we have both modals and a carousel. When the user clicks on a picture of a project, a modal pops up explaining the project. If it's a video, it also contains the embedded video.

There is a carousel as well, showcasing a few of my better single panel comic strips. 

4) Finally, on the header bar, we have a clickable toggle for night mode and day mode. When clicked it will switch the styling of the page. This was accomplised with class tagging in the html and then using the JQERY .css() function to change the styles of the class back and forth on click. I was also able to make this effect persistent through each page, using the localStorage() function to store a variable and then checking what that variable is on each page load using if statements to run the day or night mode function.

OTHER FEATURES:

Sticky nav bar is always visible, accomplished using CSS.

Responsive layout changes based on screen size. 

Staggered fadeIn() of elements on load to ensure the website looks smooth loading in.

CHALLENGES/SOLUTIONS

1) The modals that displayed videos would continue to play after the modals closed. I fixed this by adding to the close modal function two lines of JQUERY. When the close button is clicked it will remove the SRC from the video and reapply it. This caused the video to stop but still be available to watch again. 

2) On page load with day and night mode, there was an ugly flash of white before the page loaded in. I fixed this with JAVASCRIPT if statements that checked for day or night mode and changed the CSS rule for the background to be white or black depending on the mode. This was less jarring.

3) Also related to day or night mode, the order of loading made it load the nightmode page first before switching to daymode since nightmode was the default styling. This would be a bit jarring as you would see the switch briefly between page changes. I fixed this by using hide() to hide the page until after the JQERY for day mode had run. 

4) The imported google fonts would load in incorrect for a few milliseconds (they seemed to be larger), before snapping into the correct styling. I fixed this by fading in the content with JQUERY, which masked the beginning where the fonts were incorrect and looked smoother.
