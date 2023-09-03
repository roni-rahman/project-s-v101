const imgData = localStorage.getItem("imgData")
const canvas = document.getElementById("canvas")
const imgWithBg = document.getElementById("img-with-bg")
const paddingInput = document.getElementById("padding")
const roundnessInput = document.getElementById("roundness")
const shadowInput = document.getElementById("shadow")
const bgSelectButtons = document.getElementById("select-radio")
const bgOptionOne = document.getElementById("radio1")
const bgOptionTwo = document.getElementById("radio2")
const bgOptionThree = document.getElementById("radio3")
const downloadBtn = document.getElementById("download-btn")

// Default Values
let defaultPadding = paddingInput.value;
let defaultRadius = roundnessInput.value;
let defaultShadow = shadowInput.value;
let defaultBgUrl = "/bg-images/bg-1.jpg";

const image = new Image();
image.src = imgData;
image.className = "captured-image"
imgWithBg.appendChild(image)

// Default Settings
imgWithBg.style.padding = `${defaultPadding}px`
image.style.borderRadius = `${defaultRadius}px`
image.style.boxShadow = `3px 5px ${defaultShadow}px -15px`
imgWithBg.style.backgroundImage = `url(${defaultBgUrl})`


paddingInput.addEventListener("input", (e) => {
    let newPadding = e.target.value;
    defaultPadding = newPadding
    imgWithBg.style.padding = `${defaultPadding}px`
})

roundnessInput.addEventListener("input", (e) => {
    let newRadius = e.target.value;
    defaultRadius = newRadius;
    image.style.borderRadius = `${defaultRadius}px`
})

shadowInput.addEventListener("input", (e) => {
    let newShadow = e.target.value;
    defaultShadow = newShadow;
    console.log(defaultShadow)
    image.style.boxShadow = `3px 5px ${defaultShadow}px -15px`
})

bgSelectButtons.addEventListener("click", () => {
    if (bgOptionOne.checked === true) {
        defaultBgUrl = "/bg-images/bg-1.jpg";
        imgWithBg.style.backgroundImage = `url(${defaultBgUrl})`
    }
    else if (bgOptionTwo.checked === true) {
        defaultBgUrl = "/bg-images/bg-2.jpg";
        imgWithBg.style.backgroundImage = `url(${defaultBgUrl})`
    }
    else if (bgOptionThree.checked === true) {
        defaultBgUrl = "/bg-images/bg-3.jpg";
        imgWithBg.style.backgroundImage = `url(${defaultBgUrl})`
    }
})

downloadBtn.addEventListener("click", () => {
    const divToDownload = document.getElementById("download-area")

    html2canvas(divToDownload).then(canvas => {
        const imgData = canvas.toDataURL("image/jpeg");
        const a = document.createElement("a");
        a.href = imgData;
        a.download = "project-S"
        a.click();
    })

    // domtoimage.toJpeg(divToDownload)
    //     .then(function (dataUrl) {
    //         const a = document.createElement("a");
    //         a.href = dataUrl;
    //         a.download = "captured-image.jpg"; // Change the filename and extension
    //         a.click();
    //     });
})




// const settings = {}
// console.log(settings)

// const defaultSettings = () => {
//     settings.padding = "10"
//     settings.roundness = "10"
//     settings.brightness = "100"
//     settings.saturation = "100"

//     roundnessInput.value = settings.roundness;
//     brightnessInput.value = settings.brightness;
//     saturationInput.value = settings.saturation;
// }

// const loadImage = () => {
//     image = new Image();
//     image.src = imgData;
//     image.className = "captured-image"
//     imgWithBg.appendChild(image)

//     image.style.borderRadius = "20px"
//     imgWithBg.style.padding = "20px"
// }

// loadImage()

// const newSettings = (key, value) => {
//     settings[key] = value;
// }

// paddingInput.addEventListener("change", () => newSettings("padding", paddingInput.value))
// roundnessInput.addEventListener("change", () => newSettings("roundness", roundnessInput.value))
// brightnessInput.addEventListener("change", () => newSettings("brightness", brightnessInput.value))
// saturationInput.addEventListener("change", () => newSettings("saturation", saturationInput.value))

// const applySettings = () => {

// }
// defaultSettings()






// const roundnessInput = document.getElementById("roundness")

// const imgContainer = document.getElementById("img-container")
// const img = new Image()
// img.className = "captured-img"
// img.id = "captured-img"
// img.src = imgData;


// roundnessInput.addEventListener("input", (e) => {
//     let roundValue = 10;
//     roundValue = e.target.value;
//     const img = document.getElementById("captured-img")
//     console.log(roundValue)
//     // img.style = `border-radius: ${roundValue}`
//     img.style.borderRadius = `${roundValue}px`;
// })

// imgContainer.appendChild(img)