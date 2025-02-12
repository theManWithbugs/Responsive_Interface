const element = document.querySelector('.sidebar');
const content = document.querySelector('.content');

const btn_secondary = document.querySelector('.btn_secondary');

function hidenNavBar() {
    element.classList.remove('animate__animated', 'animate__fadeInLeft');
    element.classList.add('animate__animated', 'animate__fadeOutLeft', 'animate__fast');

   setTimeout(() => {
        element.style.display = "none"; 
    }, 180);

    content.style.width = "100%";
}

function showNavBar() {
    element.style.display = "block";
    content.style.width = "84%";

    element.classList.remove('animate__animated', 'animate__fadeOutLeft');
    element.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__fast');

}



