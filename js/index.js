const showCatagory =() => {
    fetch('https://openapi.programming-hero.com/api/videos/categories')
    .then(res => res.json())
    .then(data => handleCatagory(data))

}

showCatagory();


const handleCatagory = (catagory) => {
    const catagoryContainer = document.getElementById('catagory-container');
    
    console.log(catagory)
}


