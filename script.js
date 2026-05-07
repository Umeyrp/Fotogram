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
        div.innerHTML += `<div class='image_card' tabindex='0' onclick="openDialog(${images.indexOf(element)})" onkeydown="handleKey(event, ${images.indexOf(element)})" style='background-image: url("./assets/img/${element}")'></div>`;
    });
}

function openDialog(index) {
    dialogRef.innerHTML = "";
    dialogRef.innerHTML = `        
    <article class="dialog_wrapper">
        <header class="dialog_header">
            <h2>${imageTitles[index]}</h2>
            <button onclick="closeDialog()">
                <img src="./assets/icons/close.svg" alt="close X icon">
            </button>
        </header>
        <section>
            <img src="./assets/img/${images[index]}" alt="${imageTitles[index]}">
        </section>
        <div class="dialog_footer">
            <button onclick="indexMoveBack(${index})">
                <img src="./assets/icons/arrowLeft.svg" alt="pfeil links">
            </button>
            <p>${index + 1}/12</p>
            <button onclick="indexMoveForward(${index})">
                <img src="./assets/icons/arrowRight.svg" alt="pfeil rechts">
            </button>
        </div>
    </article>`;
    dialogRef.showModal();
}

function handleKey(event, index) {
    if (event.key === "Enter") {
        event.preventDefault();
        openDialog(index);
    }
}

function closeDialog() {
    dialogRef.close();
}

function indexMoveBack(index) {
    let newindex = index - 1;
    if (index == 0) {
        newindex = 11;
    }
    openDialog(newindex);

}

function indexMoveForward(index) {
    let newindex = index + 1;
    if (index == 11) {
        newindex = 0;
    }
    openDialog(newindex);
}

function enableOutsideClickClose(dialogRef) {
    dialogRef.addEventListener("click", (event) => {
        if (event.target === dialogRef) {
            dialogRef.close();
        }
    });
}

enableOutsideClickClose(dialogRef);