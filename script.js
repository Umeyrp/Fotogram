const images = [
    "lake_1.jpg",
    "city_2.jpg",
    "clouds_3.jpg",
    "bird_4.jpg",
    "earth_5.jpg",
    "lake_6.jpg",
    "swan_7.jpg",
    "flashlight_ocean_8.jpg",
    "bird_9.jpg",
    "animal_10.jpg",
    "mountains_11.jpg",
    "white_tree_12.jpg"
];

function renderImages() {
    let div = document.getElementById('images');
    div.innerHTML = "";
    images.forEach(element => {
        div.innerHTML += `<div class='image_card' onclick="openDialog(${element})" style='background-image: url("./assets/img/${element}")'></div>`;
        console.log(div);
    });
}
