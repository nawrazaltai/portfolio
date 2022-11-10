const resumeContentContainer = document.querySelector('div.content-container');


async function getCvData() {
    let response = await fetch("/cv.json");

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

        // let employmentHtml = ``;
        // cvData.employment.forEach(element => {
        //     const employmentListItem = `
        //     <div class="timeline-item">
        //             <div class="timeline-header">
        //                 <i class="fa-solid fa-briefcase"></i>
        //                 <p>${element.time}</p>  
        //             </div>
        //             <h2>${element.title}</h2>
        //             <p class="graduation-text">
        //             ${element.jobDescription} 
        //             </p>
        //         </div>`
        //     employmentHtml += employmentListItem;
        //     resumeContentContainer.innerHTML += employmentHtml;
        // });


        // let educationHtml = ``;
        // cvData.experience.forEach(element => {
        //     console.log(element.time);
        //     console.log(element.title);
        //     console.log(element.text);
        //     console.log('-------------------');
        // });

        // let res = cvData.employment.concat(cvData.education);
        // console.log(res);


        // cvData.employment.forEach(el => {
        //     console.log(el.time);
        //     console.log(el.title);
        //     console.log(el.jobDescription);
        //     });
            

                

        // cvData.employment.forEach(el => {
        //             console.log(el.time);
        //             console.log(el.title);
        //             console.log(el.jobDescription)});


        // cvData.employment.concat(cvData.education).forEach(function(item){
        //     console.log(item)
        // });
                // console.log(element.time);
                // console.log(element.title);
                // console.log(element.jobDescription);
            // });
            // console.log(cvData.employment[0]['time']);
            // console.log(cvData.employment.title);
            // console.log(cvData.employment.jobDescription);
                    

            // cvData.employment.forEach(element => {            
            //     console.log(element.time);
            //     console.log(element.title);
            //     console.log(element.jobDescription);
            // });
            // });

    } else {
      console.log("HTTP-Error: " + response.status);
    }
  }

  getCvData();
