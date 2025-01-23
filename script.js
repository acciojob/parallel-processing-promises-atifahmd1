//your JS code here. If required.
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
	loading.textContent = "loading";

	try{
		const imgsPromise = images.map((url)=>{
		return new Promis(resolve, reject) => {
		
			const img = new Image();
			img.src = url;
			img.onload() => resolve(img);
			img.onerror() => reject(new Error(`Failed to load image's URL: ${img.url}`));
		}

		const downloadedImgs = await Promise.all(imgsPromise);
			loading.style.display = "none";
		downloadedImgs.forEach((img) => {
			output.appendChilde(img);
		})
	})
	}
	catch (err){
		loading.style.display = "none";
		error.style.display = "block";
		error.textContent = error.message;
	}

	
}
