// Edulight Learning Point

console.log("Website Loaded Successfully");

document.addEventListener("DOMContentLoaded", function () {

    console.log("Edulight Learning Point Ready");

    const form = document.getElementById("admissionForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const data = {
            name: form.elements["name"].value,
            mobile: form.elements["mobile"].value,
            email: form.elements["email"].value,
            university: form.elements["university"].value,
            course: form.elements["course"].value
        };

        fetch("https://script.google.com/macros/s/AKfycbyeehpAweTytrnjV4QRJtmxCeeFAacv4hdDxM-1Ub227UyLeBCwYu3WF5YwgFmwcsE/exec", {
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {

            document.getElementById("successMessage").classList.remove("d-none");

            form.reset();

        })
        .catch(error => {

            console.error(error);

            alert("Something went wrong!");

        });

    });

});
