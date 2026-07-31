// ======================================
// EDULIGHT LEARNING POINT
// PART 1
// University Database
// ======================================

console.log("Edulight Learning Point Loaded");

// =========================
// UNIVERSITY DATABASE
// =========================

const universityData = {

"Amity University (Online)":{

UG:{

"BBA":["General"],

"BCA":["Computer Applications"],

"B.Com":["General"],

"BA":[
"General",
"English",
"Hindi",
"Political Science",
"Economics"
]

},

PG:{

"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Business Analytics",
"Digital Marketing",
"Information Technology"
],

"MCA":[
"Cloud Computing",
"Cyber Security",
"Artificial Intelligence"
],

"M.Com":["General"],

"MA":[
"Hindi",
"English",
"Political Science",
"Economics"
]

}

},

// =====================================

"Amrita University (Online)":{

UG:{

"BBA":["General"],

"BCA":["Computer Applications"],

"B.Com":["General"],

"BA":[
"General",
"English",
"Hindi"
],

"B.Sc":[
"PCM",
"PCB"
]

},

PG:{

"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Operations Management",
"Business Analytics"
],

"MCA":[
"Artificial Intelligence",
"Cloud Computing"
],

"M.Com":["General"],

"MA":[
"English",
"Hindi"
],

"M.Sc":[
"Mathematics",
"Physics"
]

}

},

// =====================================

"Mangalayatan University (Online & Distance)":{

UG:{

"BA":[
"General",
"Hindi",
"English",
"Political Science",
"Economics",
"Sociology",
"History"
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
"Information Technology",
"Operations Management",
"Business Analytics"
],

"MCA":[
"Artificial Intelligence",
"Cyber Security",
"Cloud Computing"
],

"MA":[
"Hindi",
"English",
"Political Science",
"Economics",
"Sociology",
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

// =====================================

"Jain University (Online)":{

UG:{

"BBA":["General"],

"BCA":["Computer Applications"],

"B.Com":["General"],

"BA":[
"General",
"English"
]

},

PG:{

"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Business Analytics",
"International Finance",
"Digital Marketing"
],

"MCA":[
"Artificial Intelligence",
"Cloud Computing"
],

"M.Com":["General"],

"MA":[
"English"
]

}

},

// =====================================

"Jamia Hamdard (Distance)":{

UG:{

"BA":[
"General"
],

"B.Com":[
"General"
]

},

PG:{

"MA":[
"Hindi",
"English"
],

"M.Com":[
"General"
]

}

},

// =====================================

"LPU (Online)":{

UG:{

"BBA":["General"],

"BCA":["Computer Applications"],

"B.Com":["General"],

"BA":[
"General",
"English"
]

},

PG:{

"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Business Analytics",
"Data Science",
"Digital Marketing"
],

"MCA":[
"Artificial Intelligence",
"Cyber Security",
"Cloud Computing"
],

"M.Com":[
"General"
],

"MA":[
"English"
]

},

// =====================================

"Subharti University (Distance)":{

UG:{

"BA":["General","Hindi","English","Political Science","History"],

"BBA":["General"],

"BCA":["Computer Applications"],

"B.Com":["General"],

"B.Sc":["PCM","PCB","ZBC"],

"B.Lib":["Library Science"]

},

PG:{

"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Information Technology"
],

"MCA":[
"Artificial Intelligence",
"Cyber Security"
],

"MA":[
"Hindi",
"English",
"Political Science",
"History"
],

"M.Com":["General"],

"M.Sc":[
"Mathematics",
"Chemistry"
],

"M.Lib":["Library Science"]

}

},

// =====================================

"NMIMS (ONLINE)":{

UG:{

"BBA":["General"],

"B.Com":["General"]

},

PG:{

"MBA":[
"Marketing Management",
"Finance Management",
"Business Analytics",
"Human Resource Management"
]

}

},

// =====================================

"Shoolini University (Online & Distance)":{

UG:{

"BBA":["General"],

"BCA":["Computer Applications"]

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

"M.Sc":[
"Mathematics",
"Data Science"
]

}

},

// =====================================

"Galgotias University (Online)":{

UG:{

"BA":["General"],

"BBA":["General"],

"BCA":["Computer Applications"],

"B.Com":["General"]

},

PG:{

"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Business Analytics",
"Operations Management"
],

"MCA":[
"Artificial Intelligence",
"Cloud Computing"
],

"M.Com":["General"]

}

},

// =====================================

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
"HR Management",
"Business Analytics",
"Data Science"
],

"MCA":[
"Artificial Intelligence",
"Cyber Security"
],

"M.Com":["General"]

}

},

// =====================================

"Sharda University (Online)":{

UG:{

"BA":["General"],

"BBA":["General"],

"BCA":["Computer Applications"],

"B.Com":["General"]

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
"Cloud Computing"
],

"M.Com":["General"]

}

},

// =====================================

"Chandigarh University (online)":{

UG:{

"BA":["General"],

"BBA":["General"],

"BCA":["Computer Applications"],

"B.Com":["General"]

},

PG:{

"MBA":[
"Marketing Management",
"Finance Management",
"HR Management",
"Business Analytics",
"International Business"
],

"MCA":[
"Artificial Intelligence",
"Cyber Security"
],

"M.Com":["General"]

}

},  

// =====================================

"SRM University (Online)":{

UG:{
"BBA":["General"],
"BCA":["Computer Applications"]
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
"Cloud Computing"
]
}

},

// =====================================

"Parul University (Online)":{

UG:{
"BA":["General"],
"BBA":["General"],
"BCA":["Computer Applications"],
"B.Com":["General"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Business Analytics",
"Hospital Management"
],

"MCA":[
"Artificial Intelligence",
"Cyber Security"
],

"M.Com":["General"]
}

},

// =====================================

"Andhra University (Online)":{

UG:{
"BA":["General"],
"B.Com":["General"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management"
],

"MA":[
"English",
"Hindi",
"Economics"
],

"M.Com":["General"]
}

},

// =====================================

"UPES Online":{

UG:{
"BBA":["General"],
"BCA":["Computer Applications"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"Business Analytics",
"Oil & Gas Management"
],

"MCA":[
"Artificial Intelligence",
"Cloud Computing"
]
}

},

// =====================================

"Sikkim Manipal University (Online)":{

UG:{
"BA":["General"],
"B.Com":["General"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"HR Management"
],

"MA":[
"English",
"Political Science"
],

"M.Com":["General"]
}

},

// =====================================

"Mizoram University (Online)":{

UG:{
"BA":["General"]
},

PG:{
"MA":[
"English",
"Political Science",
"History"
]
}

},

// =====================================

"DY Patil University Mumbai (Online)":{

UG:{
"BBA":["General"],
"BCA":["Computer Applications"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Healthcare Management"
],

"MCA":[
"Artificial Intelligence",
"Cloud Computing"
]
}

},

// =====================================

"DY Patil University Pune (Online)":{

UG:{
"BBA":["General"],
"BCA":["Computer Applications"]
},

PG:{
"MBA":[
"Marketing Management",
"Finance Management",
"Business Analytics",
"Hospital Management"
],

"MCA":[
"Artificial Intelligence",
"Cyber Security"
]
}

},
 
};

// ======================================
// PART 2
// FILTER LOGIC
// ======================================

document.addEventListener("DOMContentLoaded", function () {

const university = document.getElementById("university");
const category = document.getElementById("category");
const course = document.getElementById("course");
const stream = document.getElementById("stream");

// =========================
// UNIVERSITY CHANGE
// =========================

university.addEventListener("change", function () {

category.selectedIndex = 0;

course.innerHTML =
'<option value="">Select Course</option>';

stream.innerHTML =
'<option value="">Select Stream / Specialization</option>';

});

// =========================
// CATEGORY CHANGE
// =========================

category.addEventListener("change", function () {

course.innerHTML =
'<option value="">Select Course</option>';

stream.innerHTML =
'<option value="">Select Stream / Specialization</option>';

if (university.value === "") {

alert("Please select University first.");

category.selectedIndex = 0;

return;

}

const uni = universityData[university.value];

if (!uni) {

console.log("University Not Found");

return;

}

const courseList = Object.keys(uni[category.value]);

courseList.forEach(function(item){

course.innerHTML +=
`<option value="${item}">${item}</option>`;

});
 
});

// =========================
// COURSE CHANGE
// =========================

if(course){

course.addEventListener("change",function(){

stream.innerHTML='<option value="">Select Stream / Specialization</option>';

if(
universityData[university.value] &&
universityData[university.value][category.value] &&
universityData[university.value][category.value][this.value]
){

let list =
universityData[university.value][category.value][this.value];

list.forEach(function(item){

stream.innerHTML+=`<option>${item}</option>`;

});

}

});

}

// ======================================
// PART 3
// GOOGLE SHEET SUBMIT
// ======================================

document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("admissionForm");

if (!form) return;

form.addEventListener("submit", function (e) {

e.preventDefault();

const data = {

name: form.name.value,
mobile: form.mobile.value,
email: form.email.value,
university: form.university.value,
category: form.category.value,
course: form.course.value,
stream: form.stream.value

};

fetch("https://script.google.com/macros/s/AKfycbyeehpAweTytrnjV4QRJtmxCeeFAacv4hdDxM-1Ub227UyLeBCwYu3WF5YwgFmwcsE/exec", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify(data)

})

.then(res => res.json())

.then(result => {

document.getElementById("successMessage").classList.remove("d-none");

form.reset();

// Reset dropdowns

document.getElementById("course").innerHTML =
'<option value="">Select Course</option>';

document.getElementById("stream").innerHTML =
'<option value="">Select Stream / Specialization</option>';

setTimeout(function(){

document.getElementById("successMessage").classList.add("d-none");

},5000);

})

.catch(error=>{

console.log(error);

alert("Something went wrong!");

});

});

});
