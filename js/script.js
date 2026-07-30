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

"Amity University (Online)": {
UG:["BBA","BCA","B.Com","BA"],
PG:["MBA","MCA","M.Com","MA"]
},

"Amrita University (Online)": {
UG:["BBA","BCA","B.Com","BA","B.Sc"],
PG:["MBA","MCA","M.Com","MA","M.Sc"]
},

"Mangalayatan University (Online & Distance)": {
UG:["BA","BBA","BCA","B.Com","B.Sc","B.Lib"],
PG:["MBA","MCA","MA","M.Com","M.Sc","M.Lib"]
},

"Jain University (Online)": {
UG:["BA","BBA","BCA","B.Com"],
PG:["MBA","MCA","MA","M.Com"]
},

"Jamia Hamdard (Distance)": {
UG:["BA","B.Com"],
PG:["MA","M.Com"]
},

"LPU (Online)": {
UG:["BA","BBA","BCA","B.Com"],
PG:["MBA","MCA","MA","M.Com"]
},

"Subharti University (Distance)": {
UG:["BA","BBA","BCA","B.Com","B.Sc","B.Lib"],
PG:["MBA","MCA","MA","M.Com","M.Sc","M.Lib"]
},

"NMIMS (ONLINE)": {
UG:["BBA","B.Com"],
PG:["MBA"]
},

"Shoolini University (Online & Distance)": {
UG:["BBA","BCA","B.Sc"],
PG:["MBA","MCA","M.Sc"]
},

"Galgotias University (Online)": {
UG:["BA","BBA","BCA","B.Com"],
PG:["MBA","MCA","M.Com"]
},

"Manipal University Jaipur (Online)": {
UG:["BBA","BCA","B.Com"],
PG:["MBA","MCA","M.Com"]
},

"Sharda University (Online)": {
UG:["BA","BBA","BCA","B.Com"],
PG:["MBA","MCA","M.Com"]
},

"SRM University (Online)": {
UG:["BBA","BCA"],
PG:["MBA","MCA"]
},

"Chandigarh University (online)": {
UG:["BA","BBA","BCA","B.Com"],
PG:["MBA","MCA","M.Com"]
},

"Andhra University (Online)": {
UG:["BA","B.Com"],
PG:["MBA","MA","M.Com"]
},

"Parul University (Online)": {
UG:["BA","BBA","BCA","B.Com"],
PG:["MBA","MCA","M.Com"]
},

"UPES University (Online)": {
UG:["BBA","BCA","B.Com"],
PG:["MBA","MCA"]
},

"Sikkim Manipal University (Online)": {
UG:["BA","B.Com"],
PG:["MBA","MA","M.Com"]
},

"Mizoram University (Online)": {
UG:["BA","B.Com"],
PG:["MA","M.Com"]
},

"Alliance University (Online)": {
UG:["BBA","BCA","B.Com"],
PG:["MBA","MCA"]
},

"DY Patil University Mumbai (Online)": {
UG:["BBA","BCA","B.Com"],
PG:["MBA","MCA","M.Com"]
},

"DY Patil University Pune (Online)": {
UG:["BBA","BCA","B.Com"],
PG:["MBA","MCA","M.Com"]
}

};


// =========================
// STREAM DATABASE
// =========================

const streams = {

"MBA":[
"Marketing Management",
"Finance Management",
"Human Resource Management",
"Operations Management",
"Business Analytics",
"Digital Marketing",
"Information Technology",
"Data Science",
"Artificial Intelligence"
],

"MCA":[
"Computer Applications",
"Cloud Computing",
"Cyber Security",
"Machine Learning"
],

"BCA":[
"Computer Applications"
],

"BBA":[
"General"
],

"BA":[
"General",
"Hindi",
"English",
"Political Science",
"Economics",
"Sociology",
"History",
"Education",
"Public Administration",
"Journalism & Mass Communication"
],

"MA":[
"Hindi",
"English",
"Political Science",
"Economics",
"Sociology",
"History",
"Education",
"Public Administration",
"Journalism & Mass Communication"
],

"B.Com":[
"General"
],

"M.Com":[
"General"
],

"B.Sc":[
"PCM",
"PCB",
"ZBC"
],

"M.Sc":[
"Mathematics",
"Physics",
"Chemistry"
],

"B.Lib":[
"Library Science"
],

"M.Lib":[
"Library Science"
]

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

const courseList = uni[category.value];

courseList.forEach(function(item){

course.innerHTML +=
`<option value="${item}">${item}</option>`;

});

});

// =========================
// COURSE CHANGE
// =========================

course.addEventListener("change", function(){

stream.innerHTML =
'<option value="">Select Stream / Specialization</option>';

const streamList = streams[this.value];

if(!streamList){

return;

}

streamList.forEach(function(item){

stream.innerHTML +=
`<option value="${item}">${item}</option>`;

});

});

});

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
