const div = document.querySelector(".slider");
const imgList = [
    "https://img.freepik.com/free-photo/cute-cat-indoors_23-2150932260.jpg?t=st=1729259576~exp=1729263176~hmac=4e239584ce8530cdfd0c3360b70c96043aa6cf4ba47dfc0a9f5ac9180a570cff&w=1380",
    "https://img.freepik.com/free-photo/adorable-portrait-pet-surrounded-by-flowers_23-2151850055.jpg?t=st=1729259664~exp=1729263264~hmac=06e51384706c825b0be466c641feaca33c4cba258546fd0a915691c720ff7b8f&w=740",
    "https://img.freepik.com/free-photo/halloween-cat-3d-illustration_23-2151838849.jpg?t=st=1729259678~exp=1729263278~hmac=67c5670e28f88a29a8381bdf98865273be32ada520d3334b3cc627d0660b87ad&w=740",
]

let currentIndex = 1

const img = document.createElement("img")
const nextBtn = document.createElement("p")
const prevBtn = document.createElement("p")
const But = document.createElement("ul")

nextBtn.innerText = ">"
prevBtn.innerText = "<"
nextBtn.className = "nav-btn"
prevBtn.className = "nav-btn"

img.src = imgList[currentIndex]
div.appendChild(img)
div.appendChild(prevBtn)
div.appendChild(nextBtn)
div.appendChild(But)

imgList.forEach((el, index) => {
    const Butq = document.createElement("li")
    Butq.className = "li"
    Butq.addEventListener("click", () => {
        currentIndex = index
        img.src = imgList[currentIndex]
        updateButtons()
    });
    But.appendChild(Butq)
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < imgList.length - 1) {
        currentIndex++
        img.src = imgList[currentIndex]
        updateButtons()
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--
        img.src = imgList[currentIndex]
        updateButtons()
    }
});

function updateButtons() {
    prevBtn.style.display = currentIndex === 0 ? "none" : "inline-block"
    nextBtn.style.display = currentIndex === imgList.length - 1 ? "none" : "inline-block"
}

updateButtons();



