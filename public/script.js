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

        message.textContent = "Please enter your Core status.";

    } else {

        message.textContent =
            "Hey Chintu ga.. you seem to have trouble in your Core Dear, check with Doctor... "

    }

});