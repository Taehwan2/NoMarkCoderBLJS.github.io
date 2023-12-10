
	const images = ["img1.png", "img2.png"];

    const btn = document.getElementById("btn");
	
    function changeImg(){
        const existingImage = document.getElementById("bgImages");
        if (existingImage) {
            existingImage.remove();
        }

        // If there's an existing image, remove it
      
    const chosenImage = images[Math.floor(Math.random() * images.length)];

	const bgImages = document.createElement("img");
	bgImages.src = `img/${chosenImage}`;
    bgImages.id = "bgImages";
    document.body.appendChild(bgImages);
    }


    btn.addEventListener("click",changeImg);
