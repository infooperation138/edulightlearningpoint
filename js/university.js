// =========================================
// UNIVERSITY PAGE DATABASE
// =========================================

const universityPages = {

    "mangalayatanonline": {
        name: "Mangalayatan University (Online)",
        logo: "images/universities/mangalayatanonline.png",
        tagline: "UGC Approved Online Degree Programs",
        location: "Aligarh, Uttar Pradesh",
        mode: "Online Education",
        approval: "UGC Entitled"
    },

    "amity": {
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

    "lpu": {
        name: "LPU (Online)",
        logo: "images/universities/lpu.png",
        tagline: "UGC Approved Online Degree Programs",
        location: "Jalandhar, Punjab",
        mode: "Online Education",
        approval: "UGC Entitled"
    },

    "chandigarh": {
    name: "Chandigarh University (Online)",
    logo: "images/universities/chandigarh.png",
    tagline: "Flexible Online Degree Programs for Career Growth",
    location: "Mohali, Punjab",
    mode: "Online Education",
    approval: "UGC Entitled"
},

"mangalayatandistance": {
    name: "Mangalayatan University (Distance)",
    logo: "images/universities/mangalayatandistance.png",
    tagline: "Distance Degree Programs",
    location: "Aligarh, Uttar Pradesh",
    mode: "Distance Education",
    approval: "UGC Approved"
},

"manipal": {
    name: "Manipal University Jaipur (Online)",
    logo: "images/universities/manipal.png",
    tagline: "UGC Entitled Online Degree Programs",
    location: "Jaipur, Rajasthan",
    mode: "Online Education",
    approval: "UGC Entitled"
},

"subharti": {

    name: "Swami Vivekanand Subharti University",
    logo: "images/universities/subharti.png",
    tagline: "UGC Recognized Distance Education Programs",
    location: "Meerut, Uttar Pradesh",
    mode: "Distance Education",
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
    .replace(".html", "");


// =========================================
// CURRENT UNIVERSITY
// =========================================

const currentUniversity =
    universityPages[currentPage];


// =========================================
// DOM READY
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    if (!currentUniversity) {

        console.error(
            "University data not found:",
            currentPage
        );

        return;

    }


    // =====================================
    // UNIVERSITY
    // =====================================

    const universityInput =
        document.getElementById("university");

    if (universityInput) {

        universityInput.innerHTML = "";

        const option =
            document.createElement("option");

        option.value =
            currentUniversity.name;

        option.textContent =
            currentUniversity.name;

        option.selected = true;

        universityInput.appendChild(option);

    }


    // =====================================
    // UNIVERSITY LOGO
    // =====================================

    const universityLogo =
        document.getElementById("universityLogo");

    if (universityLogo) {

        universityLogo.src =
            currentUniversity.logo;

        universityLogo.alt =
            currentUniversity.name;

    }


    // =====================================
    // UNIVERSITY NAME
    // =====================================

    const universityName =
        document.getElementById("universityName");

    if (universityName) {

        universityName.textContent =
            currentUniversity.name;

    }


    // =====================================
    // TAGLINE
    // =====================================

    const tagline =
        document.getElementById("universityTagline");

    if (tagline) {

        tagline.textContent =
            currentUniversity.tagline;

    }


    // =====================================
    // LOCATION
    // =====================================

    const location =
        document.getElementById("universityLocation");

    if (location) {

        location.textContent =
            currentUniversity.location;

    }


    // =====================================
    // MODE
    // =====================================

    const mode =
        document.getElementById("universityMode");

    if (mode) {

        mode.textContent =
            currentUniversity.mode;

    }


    // =====================================
    // APPROVAL
    // =====================================

    const approval =
        document.getElementById("universityApproval");

    if (approval) {

        approval.textContent =
            currentUniversity.approval;

    }


    // =====================================
    // CURRENT UNIVERSITY COURSE DATA
    // =====================================

    const data =
        universityData[currentUniversity.name];


    // =====================================
    // CATEGORY
    // =====================================

    const category =
        document.getElementById("category");


    // =====================================
    // COURSE
    // =====================================

    const course =
        document.getElementById("course");


    // =====================================
    // STREAM
    // =====================================

    const stream =
        document.getElementById("stream");


    // =====================================
    // CATEGORY CHANGE
    // =====================================

    if (category && course && stream && data) {

        category.addEventListener("change", function () {

            course.innerHTML =
                '<option value="">Select Course</option>';

            stream.innerHTML =
                '<option value="">Select Stream / Specialization</option>';


            const selectedCategory =
                this.value;


            if (!selectedCategory ||
                !data[selectedCategory]) {

                return;

            }


            const courses =
                data[selectedCategory];


            Object.keys(courses).forEach(function (courseName) {

                const option =
                    document.createElement("option");

                option.value =
                    courseName;

                option.textContent =
                    courseName;

                course.appendChild(option);

            });

        });


        // =====================================
        // COURSE CHANGE
        // =====================================

        course.addEventListener("change", function () {

            stream.innerHTML =
                '<option value="">Select Stream / Specialization</option>';


            const selectedCategory =
                category.value;

            const selectedCourse =
                this.value;


            if (!selectedCategory ||
                !selectedCourse ||
                !data[selectedCategory]) {

                return;

            }


            const streams =
                data[selectedCategory][selectedCourse];


            if (!streams ||
                streams.length === 0) {

                const option =
                    document.createElement("option");

                option.value =
                    "General";

                option.textContent =
                    "General";

                stream.appendChild(option);

                return;

            }


            streams.forEach(function (streamName) {

                const option =
                    document.createElement("option");

                option.value =
                    streamName;

                option.textContent =
                    streamName;

                stream.appendChild(option);

            });

        });

    }


    // =========================================
    // UNIVERSITY COURSE CARDS
    // =========================================

    const universityCourses =
        document.getElementById("universityCourses");


    if (universityCourses && data) {

        let html = "";


        // =====================================
        // UG
        // =====================================

        if (data.UG) {

            Object.keys(data.UG).forEach(function (courseName) {

                const streams =
                    data.UG[courseName];


                html += `

                <div class="col-lg-4 col-md-6">

                    <div class="course-card">

                        <h5>${courseName}</h5>

                        <p>

                            ${
                                streams.length
                                ? streams.join(" • ")
                                : "General Program"
                            }

                        </p>

                    </div>

                </div>

                `;

            });

        }


        // =====================================
        // PG
        // =====================================

        if (data.PG) {

            Object.keys(data.PG).forEach(function (courseName) {

                const streams =
                    data.PG[courseName];


                html += `

                <div class="col-lg-4 col-md-6">

                    <div class="course-card">

                        <h5>${courseName}</h5>

                        <p>

                            ${
                                streams.length
                                ? streams.join(" • ")
                                : "General Program"
                            }

                        </p>

                    </div>

                </div>

                `;

            });

        }


        universityCourses.innerHTML =
            html;

    }

});
