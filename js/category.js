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


// Start Dropdown btn section
const dropdown = document.getElementsByClassName('dropdowns');
const button = document.querySelectorAll('.dropbutton');


for(let x=0; x < dropdown.length; x++){
    button[x].addEventListener('click', function(e){

            content = this.nextElementSibling;
            console.log(content);

            this.classList.toggle('active');

            if(content.style.height){
                content.style.height = null;
            } else {
                content.style.height = content.scrollHeight+"px";
            }
        })
}
// End Dropdown btn section

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