const showCatagory =async () => {
    const response =await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json()
    // console.log(data.data)
    const arrayFromData = data.data
        const categoryContainer = document.getElementById('catagory-container');
        arrayFromData.forEach(categoryObj => {
            const div = document.createElement('div');
            div.innerHTML = `
                <a onclick="loadCards('${categoryObj.category_id}')" class="btn btn-active btn-ghost mt-10">${categoryObj.category}</a>
            `;
            categoryContainer.appendChild(div);
            // console.log(categoryObj)
        });
        
}



const loadCards = async(categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = '';
    data.data.forEach((card) => {
        const div = document.createElement('div');
        div.classList = 'card bg-base-100 shadow-xl';
        div.innerHTML = `
        <figure><img class="w-80 h-80 rounded-b-2xl rounded-t-2xl" src="${card.thumbnail}" alt="User" /></figure>
                <div class="flex mt-5 flex-row">
                    <img class="rounded-full mr-5 h-12 w-12" src="assets/IMG_20220901_174230.jpg" alt="">
                    <div>
                        <h2 class="card-title">
                            ${card.title}
                        </h2>
                        <p class="inline">If a dog chews</p>
                        <img class="inline h-6" src="assets/icons8-verified-account-48.png" alt="">
                        <p class="mb-5">92k view</p>
                    </div>
                </div>
        `;
        cardContainer.appendChild(div)
        console.log(card)
    })

    console.log(data.data)
}
showCatagory();
