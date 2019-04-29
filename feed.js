let current_photo = 0;      // Updated when user selects a new photo
let num_photos = 8;         // Needs to be updated as new photos are added

// direction == -1 --> back
// direction == 1 --> forward
function arrowClick(direction) {
    
    let new_id = parseInt(current_photo) + parseInt(direction);
    console.log("new_id = " + new_id);
    
    if (new_id >= 0 && new_id < num_photos) {
        updateViewer(new_id);
    }

    // // Negative value means go back
    // if (direction < 0) {
    //     // If the item is not the first item in the list, go back
    //     if (item.id > 0) {
    //         //let new_id = item.id+direction;
    //         console.log(new_id);
    //         updateViewer((new_id));
    //     }
    // }

}

function updateViewer(index) {
    current_photo = index;
    
    console.log(index);
    
    let photo = document.getElementById('photo');
    photo.innerHTML = "";

    // Prevents trying to find an image if user is looking at about div
    if (index == 0) {
        document.getElementById('aboutDiv').style.display = 'block';
    } else {
        // Create a new image object from the index parameter
        let new_img = document.createElement("IMG");
        new_img.setAttribute('src', 'images/gallery/' + index + '.jpg');
        new_img.setAttribute('class', 'gallery');
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