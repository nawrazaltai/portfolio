const resumeContentContainer = document.querySelector('div.content-container');


async function getCvData() {
    let response = await fetch("./cv.json");

    if (response.ok) { // if HTTP-status is 200-299

    // get the response body (the method explained below)
        let cvData = await response.json();
        // cvData.employment.forEach(element => {
            // console.log(element.time)
            // console.log(element.title)
            // console.log(element.jobDescription);
            // console.log('-------------------')});

        let experienceHtml = ``;
        cvData.experience.forEach(element => {            
            const expListItem = `
            <div class="timeline-item">
                    <div class="timeline-header">
                    <i class="fa-solid fa-graduation-cap"></i>
                    <p>${element.time}</p>
                    </div>
                    <h2>${element.title}</h2>              
                    <p class="graduation-text">${element.text}</p>
                </div>`;
        experienceHtml += expListItem;
        resumeContentContainer.innerHTML = experienceHtml;
        });
    } else {
      console.log("HTTP-Error: " + response.status);
    }
  }

  getCvData();


let modal = document.querySelector('.item-modal');
const openModalBtn = document.querySelector('.readMoreBtn');
let closeBtn = document.querySelector('.closeBtn');


openModalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutsideModal);

function openModal() {
    modal.style.display = 'block';
};

function closeModal () {
    modal.style.display = 'none';
}

function clickOutsideModal(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}