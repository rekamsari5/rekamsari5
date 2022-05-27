$(document).ready(function () {
  let data = [
    {
      img: "images/project/scraper-tool-tokohijau-nodejs.png",
      img_detail: "https://github.com/rekamsari5/scraper-tool-tokohijau-nodejs.git",
      alt: "Scraper Tool Toko Hijau With NodeJs",
      kd :"git"
    },
    {
      img: "images/project/dataanaludang.png",
      img_detail: "https://github.com/rekamsari5/Dashboard_average_price.git",
      alt: "Shrimp Price Analysis Data With Python",
      kd :"git"
    },
    {
      img: "images/project/bss.png",
      img_detail: "images/project/bss1.png",
      alt: "Web Centro BSS"
    },
    {
      img: "images/project/efilling.png",
      img_detail: "images/project/efilling1.png",
      alt: "Web Centro Efilling"
    },
    {
      img: "images/project/libgrowpal.png",
      img_detail: "images/project/libgrowpal1.png",
      alt: "Web Lib Growpal"
    },
    {
      img: "images/project/mitragrowpal.png",
      img_detail: "images/project/mitragrowpal1.png",
      alt: "Web Mitra Growpal"
    },
    {
      img: "images/project/bachelorthesis.png",
      img_detail: "images/project/bachelorthesis1.png",
      alt: "Web Bachelor Thesis"
    },
    {
      img: "images/project/scientificwriting.png",
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
              ${(data[i]['kd'] == 'git')? 
              ` <a href="${data[i]['img_detail']}" target="_blank" >
                  <img class="card-img-top" src="${data[i]['img']}" alt="${data[i]['alt']}" kd="${i}">
                </a>
              ` : 
              `<img class="card-img-top img_project_link" src="${data[i]['img']}" alt="${data[i]['alt']}" kd="${i}">
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