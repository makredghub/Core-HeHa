console.log("SCRIPT.JS LOADED");

const button = document.getElementById("coreHealthButton");

console.log("Button found:", button);

button.addEventListener("click", function () {

    console.log("BUTTON CLICKED");

    const coreStatus =
        document.getElementById("coreHealthInput").value;

    console.log("Core status entered:", coreStatus);

    const message =
        document.getElementById("message");

    if (coreStatus.trim() === "") {

        message.textContent = "Try it out";

    } else {

        message.textContent =
            "We are working on it, will be going to live soon..."

    }

});