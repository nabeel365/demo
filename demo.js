console.log('working fine');

fetch('https://openapi.programming-hero.com/api/ai/tools')
.then(res => res.json())
.then(data => displayinfos(data))


const displayinfos = infos => {
    console.log(infos.data.tools[0].name);
    // এখানে ডাটা কনসোল লগ হচ্ছে কিন্তু নিচে হ্৫ ট্যাগ এ কার্ড টাইটেল এ data সে করছে না। 
    const infosContainer = document.getElementById('infos-container');
    infosContainer.innerText = '';

    infos.forEach(info => {
        console.log(info)
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('col');
        infoDiv.innerHTML = `
        <div class="card h-100">
                <img src="${info}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${infos.data.tools[0].name}</h5>
                  <p class="card-text">${info}</p>

                  <button onclick="loadinfoDetails(${info})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#infoDetails">
  Details
</button>

                  
                </div>
        </div>
        `

        infosContainer.appendChild(infoDiv);
    })
}