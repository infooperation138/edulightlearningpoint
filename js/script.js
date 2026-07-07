// Edulight Learning Point

console.log("Website Loaded Successfully");

document.addEventListener("DOMContentLoaded", function () {

    console.log("Edulight Learning Point Ready");

});
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("admissionForm");

    if(form){

        form.addEventListener("submit", function(e){

            e.preventDefault();

            document.getElementById("successMessage").classList.remove("d-none");

            form.reset();

        });

    }

});
