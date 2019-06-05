let current_photo = 0;      // Updated when user selects a new photo
let num_photos = 27;         // Needs to be updated as new photos are added
let photo_cache = [null, null, null, null, null, null, null, null,null,
                   null, null, null, null, null, null, null, null,null,
                   null, null, null, null, null, null, null, null,null];   

// direction == -1 --> back
// direction == 1 --> forward
function arrowClick(direction) {
    
    let new_id = parseInt(current_photo) + parseInt(direction);
    console.log("new_id = " + new_id);
    
    if (new_id >= 0 && new_id < num_photos) {
        updateViewer(new_id);
    }
}

function updateViewer(index) {
    console.log(photo_cache);
    
    let id_of_old_img = 'gallery' + current_photo;
    let old_img = document.getElementById(id_of_old_img);
    // Hide the old element
    if (old_img) {
        old_img.style.display = "none";
    }
    // Set the current_photo var to the index of the new photo
    current_photo = index;
    console.log("current_photo = " + current_photo);

    // If the photo has already been loaded, display it from the cache
    if (photo_cache[current_photo] != null) {
        document.getElementById('gallery' + current_photo).style.display = 'block';
    } else {
        let photo = document.getElementById('photo-div');
        // Create a new image object from the index parameter
        let new_img = document.createElement("IMG");
        new_img.setAttribute('src', 'images/gallery/' + (parseInt(index)+1) + '.jpg');
        new_img.setAttribute('id', 'gallery'+index);
        new_img.setAttribute('class', 'photo');
        photo_cache[index] = new_img;
        //photo_cache.splice(current_photo, 1, new_img);
        photo.appendChild(new_img);  
    }

}

function openModal() {
    let modal = document.getElementById('modal');
    modal.style.display = 'block';
    modal.style.zIndex = 999;
}

function closeModal() {
    let modal = document.getElementById('modal');
    modal.style.display = 'none';
    modal.style.zIndex = -9999;
}

/* All thumbnails listen for a click event, which triggers:
*       modal open
*       attach photo to modal
*       display modal
*/
let thumbnails = document.getElementsByClassName('thumbnail');
for (var i = 0; i < thumbnails.length; i++) {
    console.log(thumbnails[i].id);
    thumbnails[i].addEventListener('click', function() {
        openModal();
        updateViewer(this.id);
    })
}

let closeModalButton = document.getElementById('close-modal');
closeModalButton.addEventListener('click', function () { closeModal(); })

