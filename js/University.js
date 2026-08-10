// =========================================
// UNIVERSITY PAGE DATABASE
// =========================================

const universityPages = {

    "mangalayatan-online": {
        name: "Mangalayatan University (Online)",
        logo: "images/universities/mangalayatanonline.png",
        tagline: "UGC Approved Online Degree Programs",
        location: "Aligarh, Uttar Pradesh",
        mode: "Online Education",
        approval: "UGC Entitled"
    },

    "amity-online": {
        name: "Amity University (Online)",
        logo: "images/universities/amity.png",
        tagline: "UGC Entitled Online Degree Programs",
        location: "Noida, Uttar Pradesh",
        mode: "Online Education",
        approval: "UGC Entitled"
    },

    "jain-online": {
        name: "Jain University (Online)",
        logo: "images/universities/jain.png",
        tagline: "UGC Entitled Online Degree Programs",
        location: "Bengaluru, Karnataka",
        mode: "Online Education",
        approval: "UGC Entitled"
    },

    "lpu-online": {
        name: "LPU (Online)",
        logo: "images/universities/lpu.png",
        tagline: "UGC Entitled Online Degree Programs",
        location: "Phagwara, Punjab",
        mode: "Online Education",
        approval: "UGC Entitled"
    }

};


// =========================================
// FIND CURRENT UNIVERSITY
// =========================================

const currentPage =
window.location.pathname
.split("/")
.pop()
.replace(".html","");


// =========================================
// CURRENT UNIVERSITY DATA
// =========================================

const currentUniversity =
universityPages[currentPage];


// =========================================
// DOM READY
// =========================================

document.addEventListener("DOMContentLoaded", function(){

    if(!currentUniversity){

        console.error("University data not found:", currentPage);

        return;

    }


    // =====================================
    // UNIVERSITY NAME
    // =====================================

    const universityName =
    document.getElementById("universityName");

    if(universityName){

        universityName.textContent =
        currentUniversity.name;

    }


    // =====================================
    // UNIVERSITY LOGO
    // =====================================

    const universityLogo =
    document.getElementById("universityLogo");

    if(universityLogo){

        universityLogo.src =
        currentUniversity.logo;

        universityLogo.alt =
        currentUniversity.name;

    }


    // =====================================
    // TAGLINE
    // =====================================

    const tagline =
    document.getElementById("universityTagline");

    if(tagline){

        tagline.textContent =
        currentUniversity.tagline;

    }


    // =====================================
    // LOCATION
    // =====================================

    const location =
    document.getElementById("universityLocation");

    if(location){

        location.textContent =
        currentUniversity.location;

    }


    // =====================================
    // MODE
    // =====================================

    const mode =
    document.getElementById("universityMode");

    if(mode){

        mode.textContent =
        currentUniversity.mode;

    }


    // =====================================
    // APPROVAL
    // =====================================

    const approval =
    document.getElementById("universityApproval");

    if(approval){

        approval.textContent =
        currentUniversity.approval;

    }


   // =====================================
// SET UNIVERSITY FOR COURSE / STREAM
// =====================================

const universityInput =
document.getElementById("university");

if(universityInput){

    universityInput.value =
    currentUniversity.name;

}

// =========================================
// UNIVERSITY-WISE COURSE CARDS
// =========================================

const universityCourses =
document.getElementById("universityCourses");

if (
    universityCourses &&
    currentUniversity &&
    typeof universityData !== "undefined"
) {

    const data =
        universityData[currentUniversity.name];

    if (data) {

        let html = "";

        // ==============================
        // UG COURSES
        // ==============================

        if (data.UG) {

            Object.keys(data.UG).forEach(function(course){

                const streams = data.UG[course];

                html += `
                <div class="course-card">

                    <h5>${course}</h5>

                    <small>
                        ${streams.join(" • ")}
                    </small>

                </div>
                `;

            });

        }


        // ==============================
        // PG COURSES
        // ==============================

        if (data.PG) {

            Object.keys(data.PG).forEach(function(course){

                const streams = data.PG[course];

                html += `
                <div class="course-card">

                    <h5>${course}</h5>

                    <small>
                        ${streams.join(" • ")}
                    </small>

                </div>
                `;

            });

        }


        universityCourses.innerHTML = html;

    } else {

        universityCourses.innerHTML =
        "<p class='text-muted'>Course information will be updated soon.</p>";

    }

}
});
