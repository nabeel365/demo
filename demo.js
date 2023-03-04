console.log('working fine');

fetch('https://openapi.programming-hero.com/api/ai/tools')
.then(res => res.json())
.then(data => displayinfos(data))



const displayinfos = (infos) => {
  

  
  console.log(infos);
  
  const infosDiv = document.getElementById('infos-container');
  infosDiv.textContent = '';

  infos.data.tools.forEach(tool => {
    console.log(tool);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
      <div class="row">
        <div class="card p-4 col" style="width: 18rem;">
          <img src="${tool.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><h3>Features</h3></h5>
            <p class="card-text">1. Natural language processing
            2. Contextual understanding
            3. Text generation</p>
            <h4>${tool.name} </h4>

            <button onclick = "modalInfo(${tool.id})" type="button" class="btn btn-secondary rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-circle-right"></i>
          </button>
          </div>
        </div>
      </div>  
    `;
    infosDiv.appendChild(div);
  });
}




  const seeMore = document.getElementById('see-more-btn').addEventListener('click', function(){

    let displayedInfos = infos;

  if (infos.length > 6) {
    displayedInfos = infos.slice(0, 6);
    seeMore.classList.remove('d-none');
  } else {
    seeMore.classList.add('d-none');
  }
  
  });
  





// 
const modalInfo = (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
fetch(url)
.then(res => res.json())
.then(data => displayModalData(data))
console.log(data);
}



const displayModalData = (data) => {
  
  
  console.log(data.data.features[1].feature_name)
  

  
document.getElementById('exampleModal').addEventListener('click', function () {

  const modalData = document.getElementById('modal-data')
    modalData.innerHTML= `
    <div class="d-flex">
    <span>
    </span>
  
    <span>
    <h3>Features</h3>
    <p>
    <ul>
    <li>${data.data.features[1].feature_name}</li>
    <li>${data.data.features[2].feature_name}</li>
    <li>${data.data.features[3].feature_name}</li>

    </ul>

    </p>
  
    </span>
  
  
    <span>
    <h3>Integrations</h3>
    <p>
        
    </p>
    </span>
  
  
    </div>
  
  
  
  
    `
    
  })





}



const toggleSpinner = isLoading => {
  const spinner = document.getElementById('loader');
  if (isLoading) {
      spinner.classList.remove('d-none')
  }
  else {
      spinner.classList.add('d-none')

  }
}