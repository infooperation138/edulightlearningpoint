// =========================================
// EDULIGHT LEARNING POINT
// script.js
// =========================================

console.log("Edulight Learning Point Loaded");

// =========================================
// UNIVERSITY DATABASE
// =========================================

const universityData = {

"Amrita University (Online)":{

UG:{
"BBA":[
"General Management",
"Digital Marketing",
"FinTech & Banking",
"International Finance (Accredited by ACCA)",
"Data Analytics",
"Computer Applications"],
 
"B.Com":["General"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Business Analytics",
"Operations Management",
"International Finance & Accounting",
"FinTech",
"Artificial Intelligence",
"General Management",
"ESG (Environmental, Social & Governance)"
],

"MCA":[
"Artificial Intelligence",
"Cyber Security",
"AI & Machine Learning",
"Cloud Computing"
],

"M.Com":[
 "General",
 "Finance & Accounting"],

}

},

// ========================================= "Chandigarh University (Online)":{ UG:{ "BBA":["General"], "BCA":["Computer Applications"], "B.Com":["General"], "BA":["English","Psychology"] }, PG:{ "MBA":[ "Marketing Management", "Finance Management", "Human Resource Management", "Business Analytics", "International Business" ], "MCA":[ "Artificial Intelligence", "Machine Learning", "Cyber Security" ], "M.Com":["General"] } }, // =========================================
// =========================================

"Mangalayatan University (Online)":{

UG:{
"BA":["General"],

"BBA":["General"],

"BCA":[
"General"],

"Diploma":[
"DCA",
"DBA",
"Art & Humanities",
"JMC",
"Commerce & Business Studies"
]

},

PG:{

"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Operations Management"
 ],
 
 "MBA Plus":[
 "Digital Marketing",
 "Supply Chain Management",
"Business Analytics",
"Information Technology"
],

"MCA":[
"General"
],

"MA":[
"English",
"Political Science",
"Education",
"Public Administration",
"JMC"
],

 "PG Diploma":[
"Computer Applcation",
"JMC",
"Business Management"
 ],

"M.Com":[
"General"
],

"M.Sc":[
"Mathematics"
]

}

},

// =========================================

"Mangalayatan University (Distance)":{

UG:{
"BA":[
"General",
"JMC"],

"B.Com":["General"],

"B.Sc":[
"PCM",
"PCB",
"ZBC"
],

"B.Lib":[
"Library Science"
]

},

PG:{

"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Operations Management",
"Tourism & Hospitality Management"
],

"MA":[
"Sociology",
"Economics",
"History"
],

"M.Sc":[
"Chemistry",
"Physics"
],

"M.Lib":[
"Library Science"
]

}

},
 
// =========================================

"Amity University (Online)":{

UG:{
"BBA":["General","Data Analytics","Travel & Tourism Management"],
"BCA":["Data Science","Data Engineering","Financial Technology & AI","Data Analytics","Cloud Security","Software Engineering"],
"B.Com":["General","Hons","International Finance & Accounting"],
"BA":["General","Hindi","Tamil","Kannada","Telugu","Hindi","Sociology","Political Science","English","Economics"]
},

PG:{
"MBA":[
"Data Science",
"Business Analytics",
"International Finance",
"General Management",
"Digital Marketing Management",
"Hospital & Healthcare Management",
"Dual Specialization"
],

"MCA":[
"Software Engineering",
"FinTech & AI",
"Machine Learning & AI",
"Cyber Security",
"Blockchain Technology & Management"
],

"M.Com":["Financial Management"],

"MA":[
"JMC",
"Public Policy & Governance"
]

}

},

// =========================================

"Jain University (Online)":{

UG:{
"BBA":["General"],
"BCA":["Computer Applications"],
"B.Com":["General"],
"BA":["Journalism","Psychology"]
},

PG:{

"MBA":[
"Marketing",
"Finance",
"HR",
"International Business",
"Logistics",
"Healthcare"
],

"MCA":[
"Artificial Intelligence",
"Cyber Security"
],

"M.Com":["General"],

"MA":[
"English"
]

}

},

 // =========================================

"Jamia Hamdard (Distance)":{

UG:{
"BBA":["General"],
"BCA":["General"]
},

PG:{
"MBA":["General"]
}

},

// =========================================

"LPU (Online)":{

UG:{
"BBA":["BBA"],
"BCA":["BCA"],
"B.Com":["General"],
"BA":[
"BA"
]
},

PG:{
"MBA":[
"MBA"
],

"MCA":[
"MCA"
],
 
"M.Com":["General"],

"M.Sc":["Economics","Mathematics"],

"MA":[
"English",
"Political Science","History","Sociology"
],

"Diploma":["Business Administration","Computer Application"]

}

},

// =========================================

"Subharti University (Distance)":{

UG:{
"BA":[
"Hindi",
"English",
"History",
"Political Science"
],

"BBA":["General"],

"BCA":["Computer Applications"],

"B.Com":["General"],

"B.Sc":[
"PCM",
"PCB",
"ZBC"
],

"B.Lib":[
"Library Science"
]

},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Operations Management"
],

"MCA":[
"Artificial Intelligence",
"Machine Learning"
],

"MA":[
"Hindi",
"English",
"History"
],

"M.Com":["General"],

"M.Sc":[
"Mathematics",
"Physics",
"Chemistry"
],

"M.Lib":[
"Library Science"
]

}

},

// =========================================

"NMIMS (ONLINE)":{

UG:{
"BBA":["General"],
"B.Com":["General"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Business Analytics"
]
}

},

// =========================================

"Shoolini University (Online & Distance)":{

UG:{
"BBA":["General"],
"BCA":["Computer Applications"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"Business Analytics"
],

"MCA":[
"Artificial Intelligence",
"Cloud Computing"
],

"M.Sc":[
"Data Science"
]
}

},

// =========================================

"Galgotias University (Online)":{

UG:{
"BBA":["General"],
"BCA":["Computer Applications"],
"B.Com":["General"],
"BA":["English","Political Science"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Business Analytics"
],

"MCA":[
"Artificial Intelligence",
"Cyber Security"
],

"M.Com":["General"]
}

},

// =========================================

"Manipal University Jaipur (Online)":{

UG:{
"BBA":["General"],
"BCA":["Computer Applications"],
"B.Com":["General"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Analytics",
"Operations Management"
],

"MCA":[
"Cloud Computing",
"Cyber Security",
"Artificial Intelligence"
],

"M.Com":["General"]
}

},

// =========================================

"Sharda University (Online)":{

UG:{
"BBA":["General"],
"BCA":["Computer Applications"],
"B.Com":["General"],
"BA":["English"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Business Analytics"
],

"MCA":[
"Artificial Intelligence",
"Data Science"
],

"M.Com":["General"]
}

},

// =========================================

"SRM University (Online)":{

UG:{
"BBA":["General"],
"BCA":["Computer Applications"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"HR Management"
],

"MCA":[
"Cloud Computing",
"Cyber Security"
]
}

},

// =========================================

"Andhra University (Online)":{

UG:{
"BA":["General"],
"B.Com":["General"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management"
],

"MA":[
"English",
"Economics"
],

"M.Com":["General"]
}

},

// =========================================

"Parul University (Online)":{

UG:{
"BBA":["General"],
"BCA":["Computer Applications"],
"B.Com":["General"],
"BA":["English"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"HR Management",
"Business Analytics"
],

"MCA":[
"Artificial Intelligence",
"Cloud Computing"
],

"M.Com":["General"]
}

},

// =========================================

"UPES (Online)":{

UG:{
"BBA":["General"],
"BCA":["Computer Applications"],
"B.Com":["General"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Operations Management",
"Business Analytics",
"Oil & Gas Management"
],

"MCA":[
"Artificial Intelligence",
"Cloud Computing",
"Cyber Security"
],

"M.Com":["General"]
}

},

// =========================================

"Sikkim Manipal University (Online)":{

UG:{
"BA":["English","Political Science","Sociology"],
"B.Com":["General"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Systems"
],

"MA":[
"English",
"Political Science"
],

"M.Com":["General"]
}

},

// =========================================

"Mizoram University (Online)":{

UG:{
"BA":["English","History","Political Science"],
"B.Com":["General"]
},

PG:{
"MA":[
"English",
"History",
"Political Science"
],

"M.Com":["General"]
}

},

// =========================================

"DY Patil University Mumbai (Online)":{

UG:{
"BBA":["General"],
"BCA":["Computer Applications"],
"B.Com":["General"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Hospital Administration",
"Business Analytics"
],

"MCA":[
"Artificial Intelligence",
"Cyber Security"
],

"M.Com":["General"]
}

},

// =========================================

"DY Patil University Pune (Online)":{

UG:{
"BBA":["General"],
"BCA":["Computer Applications"],
"B.Com":["General"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Project Management",
"International Business"
],

"MCA":[
"Cloud Computing",
"Artificial Intelligence"
],

"M.Com":["General"]
}

},

// =========================================

"Jain University (Online)":{

UG:{
"BBA":["General"],
"BCA":["Computer Applications"],
"B.Com":["General"],
"BA":["English","Journalism"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Business Analytics",
"International Finance"
],

"MCA":[
"Artificial Intelligence",
"Cyber Security",
"Cloud Computing"
],

"M.Com":["General"],

"MA":[
"English",
"Journalism"
]
}

},

// =========================================
// END UNIVERSITY DATABASE
// =========================================

};

// =========================================
// DOM READY
// =========================================

document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("admissionForm");

const university = document.getElementById("university");
const category = document.getElementById("category");
const course = document.getElementById("course");
const stream = document.getElementById("stream");


// =========================================
// UNIVERSITY CHANGE
// =========================================

university.addEventListener("change", function () {

category.selectedIndex = 0;

course.innerHTML =
'<option value="">Select Course</option>';

stream.innerHTML =
'<option value="">Select Stream / Specialization</option>';

});

// =========================================
// CATEGORY CHANGE
// =========================================

category.addEventListener("change", function () {

course.innerHTML =
'<option value="">Select Course</option>';

stream.innerHTML =
'<option value="">Select Stream / Specialization</option>';

if (university.value === "") {

alert("Please Select University First");

category.selectedIndex = 0;

return;

}

const uni = universityData[university.value];

if (!uni) return;

const courseList = Object.keys(uni[category.value]);

courseList.forEach(function (item) {

course.innerHTML +=
`<option value="${item}">${item}</option>`;

});

});

// =========================================
// COURSE CHANGE
// =========================================

course.addEventListener("change", function () {

stream.innerHTML =
'<option value="">Select Stream / Specialization</option>';

if (university.value === "") return;

const uni = universityData[university.value];

if (!uni) return;

const categoryData = uni[category.value];

if (!categoryData) return;

const streamList = categoryData[course.value];

if (!streamList) return;

streamList.forEach(function (item) {

stream.innerHTML +=
`<option value="${item}">${item}</option>`;

});

});

// =========================================
// FORM SUBMIT
// =========================================

form.addEventListener("submit", function (e) {

e.preventDefault();

const data = {

name: form.name.value,

mobile: form.mobile.value,

email: form.email.value,

university: university.value,

category: category.value,

course: course.value,

stream: stream.value

};

fetch("https://script.google.com/macros/s/AKfycbyeehpAweTytrnjV4QRJtmxCeeFAacv4hdDxM-1Ub227UyLeBCwYu3WF5YwgFmwcsE/exec", {

method: "POST",

body: JSON.stringify(data)

})

.then(res => res.json())

.then(result => {

document.getElementById("successMessage").classList.remove("d-none");

form.reset();

category.selectedIndex = 0;

course.innerHTML =
'<option value="">Select Course</option>';

stream.innerHTML =
'<option value="">Select Stream / Specialization</option>';

})

.catch(err => {

console.error(err);

alert("Something went wrong!");

});

});

// =========================================
// SUCCESS MESSAGE AUTO HIDE
// =========================================

const successMessage = document.getElementById("successMessage");

if(successMessage){

setTimeout(function(){

successMessage.classList.add("d-none");

},5000);

}

// =========================================
// MOBILE NUMBER VALIDATION
// =========================================

const mobileInput = document.querySelector('[name="mobile"]');

if(mobileInput){

mobileInput.addEventListener("input",function(){

this.value=this.value.replace(/[^0-9]/g,"");

if(this.value.length>10){

this.value=this.value.slice(0,10);

}

});

}

// =========================================
// EMAIL VALIDATION
// =========================================

const emailInput=document.querySelector('[name="email"]');

if(emailInput){

emailInput.addEventListener("blur",function(){

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(this.value!="" && !emailPattern.test(this.value)){

alert("Please Enter Valid Email Address");

this.focus();

}

});

}

// =========================================
// NAME VALIDATION
// =========================================

const nameInput=document.querySelector('[name="name"]');

if(nameInput){

nameInput.addEventListener("input",function(){

this.value=this.value.replace(/[^A-Za-z ]/g,"");

});

}

// =========================================
// UNIVERSITY COURSE CARDS
// =========================================

const courseList = document.getElementById("courseList");

if (courseList && universityData["Mangalayatan University (Online)"]) {

    let html = "";

    const data = universityData["Mangalayatan University (Online)"];

    Object.keys(data.UG).forEach(course => {

        html += `
        <div class="card mb-3 shadow-sm">
            <div class="card-body">
                <h5>${course}</h5>
                <small>${data.UG[course].join(", ")}</small>
            </div>
        </div>`;
    });

    Object.keys(data.PG).forEach(course => {

        html += `
        <div class="card mb-3 shadow-sm">
            <div class="card-body">
                <h5>${course}</h5>
                <small>${data.PG[course].join(", ")}</small>
            </div>
        </div>`;
    });

    courseList.innerHTML = html;
}
 
// =========================================
// END OF SCRIPT
// =========================================

});                          
