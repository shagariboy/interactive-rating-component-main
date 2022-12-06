const ratingStateSec = document.getElementById('rating-state-section');
const thankStateSec = document.getElementById('thank-you-state-section');
let ratingBtns = document.querySelectorAll('.rating-btn');
let submitBtn = document.querySelector('.submit-btn');
let selectedRating = document.querySelector('.selected-rating');
let ratingValue;

//Use forEach to loop through the btns
ratingBtns.forEach(btn => {
    //Add click event to target btn
    btn.addEventListener('click', (e) => {

        //Store selected value of the btn in the ratingValue global variable
        ratingValue = e.target.value;
        //Check if rating btn is clicked
        if (btn) {
            //If true submit btn can be clicked
            submitBtn.addEventListener('click', (e) => {
                e.preventDefault();

                // When submit btn clicked redirect location from index page to submitted page
                ratingStateSec.style.display = 'none';
                thankStateSec.style.display = 'block';

                // Assign value of btn to be displayed to submitted page selectedRating content
                selectedRating.textContent = ratingValue;
            })

        }
    })
})

