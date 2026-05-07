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

const imageTitles = [
    "Blue Lake",
    "Neon City",
    "Dark clouds",
    "Blue bird",
    "Hurricane",
    "Forest Lake",
    "Duck",
    "Flashlight Ocean",
    "White Bird",
    "Snow Leopard",
    "Mountains",
    "White Tree"
];

const dialogRef = document.getElementById('image_dialog');

function renderImages() {
    let div = document.getElementById('images');
    div.innerHTML = "";
    images.forEach(element => {
        div.innerHTML += `<div class='image_card' onclick="openDialog(${images.indexOf(element)})" style='background-image: url("./assets/img/${element}")'></div>`;
    });
}

function openDialog(index) {
    dialogRef.innerHTML = `        
    <div class="dialog_wrapper">
        <header class="dialog_header">
            <h2>${imageTitles[index]}</h2>
            <button onclick="closeDialog()">
                <img src="./assets/icons/close.svg ">
            </button>
        </header>
        <section>
            <img src="./assets/img/${images[index]}" alt="">
        </section>
        <div class="dialog_footer">
            <button>
                <img src="./assets/icons/Arrow-left.svg" alt="pfeil links">
            </button>
            <p>1/12</p>
            <button>
                <img src="./assets/icons/Arrow-right.svg" alt="pfeil rechts">
            </button>
        </div>
    </div>`;
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
}