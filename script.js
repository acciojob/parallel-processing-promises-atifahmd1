const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
const error = document.getElementById("error");
const loading = document.getElementById("loading");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

async function render(images) {
    loading.style.display = "block";
	loading.textContent = "loading";

	try{
		const imgsPromise = images.map((obj)=>{

		    return new Promise((resolve, reject) => {
			    const img = new Image();
			    img.onload = () => resolve(img);
			    img.onerror = () => reject(new Error(`Failed to load image's URL: ${obj.url}`));
			    img.src = obj.url;
		    })

        })
		const downloadedImgs = await Promise.all(imgsPromise);
		loading.style.display = "none";
		downloadedImgs.forEach((img) => {
		    output.appendChild(img);
	    });

	}catch (err){
		loading.style.display = "none";
		error.style.display = "block";
		error.textContent = err.message;
	}

}

btn.addEventListener("click", ()=>render(images));