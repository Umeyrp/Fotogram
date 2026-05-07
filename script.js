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
        div.innerHTML += `<div class='image_card' onclick="openDialog(${images.indexOf(element)})" style='background-image: url("./assets/img/${element}")'></div>`;
    });
}

function openDialog(index) {
    const dialogRef = document.getElementById('image_dialog');
    dialogRef.innerHTML = `        
    <div class="dialog_wrapper">
            <header class="dialog_header">
                <h2>${images[index]}</h2>
                <button>X</button>
            </header>
            <section>
                <img src="./assets/img/${images[index]}" alt="">
            </section>
            <div class="dialog_footer">
                <button>Pfeil</button>
                <p>1/12</p>
                <button>Pfeil</button>
            </div>
        </div>`;
    dialogRef.showModal();
}