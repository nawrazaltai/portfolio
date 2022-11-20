const resumeContentContainer = document.querySelector('div.content-container');


async function getCvData() {
    let response = await fetch("./cv.json");

    if (response.ok) { // if HTTP-status is 200-299

    // get the response body (the method explained below)
        let cvData = await response.json();

        let experienceHtml = "";
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


// Get the button that opens the modal
let openModalBtn = document.querySelectorAll(".readMoreBtn");

// All page modals
let modals = document.querySelectorAll('.item-modal');

// Get the <span> element that closes the modal
let closeBtn = document.getElementsByClassName("closeBtn");

// When the user clicks the button, open the modal
for (var i = 0; i < openModalBtn.length; i++) {
 openModalBtn[i].onclick = function(e) {
    e.preventDefault();
    let modal = document.querySelector(e.target.getAttribute("href"));
    // console.log(modals)
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < closeBtn.length; i++) {
 closeBtn[i].onclick = function() {
    for (let index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('item-modal')) {
     for (let index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}

