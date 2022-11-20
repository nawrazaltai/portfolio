const resumeContentContainer = document.querySelector('div.content-container');


async function getCvData() {
    let response = await fetch("./cv.json");

    if (response.ok) { // if HTTP-status is 200-299

    // get the response body (the method explained below)
        let cvData = await response.json();

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