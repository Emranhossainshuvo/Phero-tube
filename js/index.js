const showCatagory =() => {
    fetch('https://openapi.programming-hero.com/api/videos/categories')
    .then(res => res.json())
    .then(data => handleCatagory(data.data))

}

showCatagory();

const handleCatagory = (categories) => {
    const categoryContainer = document.getElementById('catagory-container');

    categories.forEach(categoryObj => {
        const div = document.createElement('div');
        div.innerHTML = `
            <a class="tab tab-active">${categoryObj.category}</a>
        `;
        categoryContainer.appendChild(div);
    });

    console.log(categories);
};



