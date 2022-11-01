$(() => {

// HOME PAGE VARIABLES AND LOAD CONDITIONS
let testimonialVisible = false

$('#testimonials-container').css("display", "flex")
$('#slide-div').hide();
$('#expand-more1').hide()

//SLIDE FUNCTION TO REVEAL TESTIMONIALS
const testimonialsReveal = () => {
    if (testimonialVisible === false){
        $('#expand-less1').hide()
        $('#expand-more1').show()
        testimonialVisible = true
    } else if (testimonialVisible === true) {
        $('#expand-less1').show()
        $('#expand-more1').hide()
        testimonialVisible = false
    }
    $('#slide-div').slideToggle("slow")
}


//HOME PAGE BUTTON FUNCTIONS
$('#testimonial-button').on("click", testimonialsReveal)




})