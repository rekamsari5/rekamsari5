$(document).ready(function () {
  let data = [
    {
      img_detail: "https://rekamsari5.github.io/images/GoFood-System Analysis - Rekam Sari.pdf",
      alt: "GoFood- System Analysis",
      kd :"file"
    },
    {
      img_detail: "https://github.com/rekamsari5/scraper-tool-tokohijau-nodejs.git",
      alt: "Scraper Tool Toko Hijau With NodeJs",
      kd :"git"
    },
    {
      img_detail: "https://github.com/rekamsari5/Dashboard_average_price.git",
      alt: "Shrimp Price Analysis Data With Python",
      kd :"git"
    },
    {
      img_detail: "images/project/bss1.png",
      alt: "Web Centro BSS"
    },
    {
      img_detail: "images/project/efilling1.png",
      alt: "Web Centro Efilling"
    },
    {
      img_detail: "images/project/libgrowpal1.png",
      alt: "Web Lib Growpal"
    },
    {
      img_detail: "images/project/mitragrowpal1.png",
      alt: "Web Mitra Growpal"
    },
    {
      img_detail: "images/project/bachelorthesis1.png",
      alt: "Web Bachelor Thesis"
    },
    {
      img_detail: "images/project/scientificwriting1.png",
      alt: "Web Scientific Writing "
    },
    
    
  ]
  img_project(data)
})

function img_project(data) {
  let row = ''
  for (let i = 0; i < data.length; i++) {
    row += 
            `<div class="col-md-3 card-list">
              <div class="mb-3">
              ${(data[i]['kd'] == 'git' || data[i]['kd'] == 'file')? 
              ` <a href="${data[i]['img_detail']}" target="_blank" >
                  <img class="card-img-top" src="images/icon/responsive.png" alt="${data[i]['alt']}" kd="${i}">
                </a>
              ` : 
              `<img class="card-img-top img_project_link" src="images/icon/responsive.png" alt="${data[i]['alt']}" kd="${i}">
              `}
              <p class="card-text">${data[i]['alt']}</p>
              </div>
            </div>`;

           

  }

  $('#projectid').html(row);

  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("img01");
  let captionText = document.getElementById("caption");
  $('.img_project_link').click(function (e) {
    e.preventDefault();
    modal.style.display = "block";
    kd = $(this).attr('kd')
    modalImg.src = data[kd]['img_detail'];
    captionText.innerHTML = $(this).attr('alt');

  });

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
}
