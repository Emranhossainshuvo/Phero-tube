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
    handleSpinner(true)
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = '';
    data.data.forEach((card) => {
        const findingItems = card.authors[0].profile_name;
        
        const badgeElement  = document.getElementsByClassName('badge');
        const checkingItems = card.authors[0].verified;
        // console.log(checkingItems)
        if(checkingItems === true){
            for(const badge of badgeElement){
                badge.classList.remove('hidden')
            }
        }
        const div = document.createElement('div');
        div.classList = 'card bg-base-100 shadow-xl';
        div.innerHTML = `
        <figure><img class="w-96 h-72 rounded-b-2xl rounded-t-2xl" src="${card.thumbnail}" alt="User" /></figure>
                <div class="flex mt-5 flex-row">
                    <img class="rounded-full mr-5 h-12 w-12" src="${card.authors[0].profile_picture}" alt="">
                    <div>
                        <h2 class="card-title">
                            ${card.title}
                        </h2>
                        <p class="inline">${findingItems}</p>
                        <img class="inline hidden badge h-6" src="assets/icons8-verified-account-48.png" alt="">
                        <p class="mb-5">${card.others.views} views</p>
                    </div>
                </div>
        `;
        
        cardContainer.appendChild(div)
        
        console.log(card)
    })
    const noResultContent = document.getElementById('no-resuld-content')
    if(cardContainer.childNodes.length < 1){
        noResultContent.classList.remove('hidden')
    }else{
        noResultContent.classList.add('hidden')
    }
    
    handleSpinner(false)
    

    // console.log(data.data)
}
// spinner handler
const loader = document.getElementById('loader')
const handleSpinner = (isLoading) => {
    if(isLoading === true){
        loader.classList.remove('hidden')
    }else{
        loader.classList.add('hidden')
    }
}
showCatagory();
