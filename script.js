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

//Bilder laden
function renderImages() {
    let div = document.getElementById('images');
    div.innerHTML = "";
    images.forEach((element, index) => {
        div.innerHTML += `<button class="image_card" onclick="openDialog(${index})" style="background-image: url('./assets/img/${element}')" aria-label="Open Image: ${imageTitles[index]}"></button>`;
    });
}

//Dialog öffnen
function openDialog(index) {
    dialogRef.innerHTML = "";
    dialogRef.innerHTML = `        
    <article class="dialog_wrapper">
        <header class="dialog_header">
            <h2>${imageTitles[index]}</h2>
            <button onclick="closeDialog()">
                <img src="./assets/icons/close.svg" aria-label="Close dialog">
            </button>
        </header>
        <section>
            <img src="./assets/img/${images[index]}" alt="${imageTitles[index]}">
        </section>
        <div class="dialog_footer">
            <button onclick="indexMoveBack(${index})">
                <img src="./assets/icons/arrowLeft.svg" aria-label="Previous image">
            </button>
            <p aria-live="polite">${index + 1}/12</p>
            <button onclick="indexMoveForward(${index})">
                <img src="./assets/icons/arrowRight.svg" aria-label="Next image">
            </button>
        </div>
    </article>`;
    dialogRef.showModal();
}

//Dialog schließen
function closeDialog() {
    dialogRef.close();
}

//Im Dialog ein zurück
function indexMoveBack(index) {
    let newindex = index - 1;
    if (index == 0) {
        newindex = 11;
    }
    openDialog(newindex);
}

//Im Dialog ein weiter
function indexMoveForward(index) {
    let newindex = index + 1;
    if (index == 11) {
        newindex = 0;
    }
    openDialog(newindex);
}

//Dialog schließen beim klicken außerhalb
function enableOutsideClickClose(dialogRef) {
    dialogRef.addEventListener("click", (event) => {
        if (event.target === dialogRef) {
            dialogRef.close();
        }
    });
}

enableOutsideClickClose(dialogRef);