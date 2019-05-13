let current_photo = 0;      // Updated when user selects a new photo
let num_photos = 10;         // Needs to be updated as new photos are added
let photo_cache = ["<div id='gallery0'>Hello!</div>", null, null, null, null, null, null, null, null,null];   

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
    // Hide the old element
    document.getElementById(id_of_old_img).style.display = "none";
    
    // Set the current_photo var to the index of the new photo
    current_photo = index;
    console.log("current_photo = " + current_photo);

    // If the photo has already been loaded, display it from the cache
    if (photo_cache[current_photo] != null) {
        document.getElementById('gallery' + current_photo).style.display = 'block';
    } else {
        let photo = document.getElementById('photo');
        // Create a new image object from the index parameter
        let new_img = document.createElement("IMG");
        new_img.setAttribute('src', 'images/gallery/' + index + '.jpg');
        new_img.setAttribute('id', 'gallery'+index);
        new_img.setAttribute('class', 'gallery');
        photo_cache.splice(current_photo, 1, new_img);
        photo.appendChild(new_img);  
    }

}

// Attach event listeners to all gallery items
let thumbnails = document.getElementsByClassName('thumbnail');
for (var i = 0; i < thumbnails.length; i++) {
    console.log(thumbnails[i].id);
    thumbnails[i].addEventListener('click', function() {
        updateViewer(this.id);
    })
}

