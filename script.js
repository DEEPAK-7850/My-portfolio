document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".bar");

    buttons.forEach(button => {
        const parentContainer = button.parentElement;
        const childButtons = parentContainer.querySelector(".child-buttons");

        const updateBtn = document.createElement("button");
        updateBtn.innerText = "UPDATE";
        updateBtn.classList.add("action-btn", "update-btn");

        const viewBtn = document.createElement("button");
        viewBtn.innerText = "VIEW";
        viewBtn.classList.add("action-btn", "view-btn");

        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = ".pdf, .jpg, .png, .docx";
        fileInput.style.display = "none";

        childButtons.appendChild(updateBtn);
        childButtons.appendChild(viewBtn);
        childButtons.appendChild(fileInput);

        button.addEventListener("click", function () {
            childButtons.style.display = (childButtons.style.display === "flex") ? "none" : "flex";
        });

        updateBtn.addEventListener("click", function () {
            fileInput.click();
        });

        fileInput.addEventListener("change", function () {
            alert(`File "${fileInput.files[0].name}" selected successfully!`);
        });

        viewBtn.addEventListener("click", function () {
            alert("Viewing is not implemented yet!");
        });
    });
});