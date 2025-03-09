//Start Top Message animation
window.addEventListener("scroll", function() {
    const topMessage = document.querySelector('#top-message');
    const navbar = this.document.querySelector('#navbar');
    const topMessageHeight = topMessage.offsetHeight;
    const scrollHeight = window.scrollY;
    if (scrollHeight > topMessageHeight) {
        navbar.classList.add('sticky');
        navbar.classList.remove('box-shadow');
    } else {
        navbar.classList.remove('sticky');
        navbar.classList.add('box-shadow');
    }
});
//End Top Message animation



// Start Feeback Modal Section
    // Open the modal
    function openModal() {
        $('#feedbackModal').modal('show');
    }

    // Close the modal
    function closeModal() {
        $('#feedbackModal').modal('hide');
    }

    // Close the feedback button
    function closeFeedbackBtn(event) {

        document.getElementById("feedbackBtnContainer").style.display = "none";
    }
// End Feeback Modal Section
