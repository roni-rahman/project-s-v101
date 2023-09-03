const captureBtn = document.getElementById("capture-btn")
captureBtn.addEventListener("click", () => {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, (imgData) => {
        console.log(imgData)
        localStorage.setItem("imgData", imgData)
        chrome.tabs.create({
            url: "/editor.html"
        })
    })
})