$(() => {

// HOME PAGE VARIABLES AND LOAD CONDITIONS
let testimonialVisible = false

$('#slide-div').hide();
$('#expand-less1').hide()

//SLIDE FUNCTION TO REVEAL TESTIMONIALS
const testimonialsReveal = () => {
    if (testimonialVisible === false){
        $('#expand-more1').hide()
        $('#expand-less1').show()
        testimonialVisible = true
    } else if (testimonialVisible === true) {
        $('#expand-more1').show()
        $('#expand-less1').hide()
        testimonialVisible = false
    }
    $('#slide-div').slideToggle("slow")
}


//HOME PAGE BUTTON FUNCTIONS
$('#testimonial-button').on("click", testimonialsReveal)




})