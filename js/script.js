// ================================
// EDULIGHT LEARNING POINT
// script.js
// ================================

console.log("Edulight Learning Point Loaded");

// ================================
// UNIVERSITY DATA
// ================================

const universityData = {

"Amrita University (Online)": {
UG:["BBA","BCA","B.Com","BA","B.Sc"],
PG:["MBA","MCA","M.Com","MA","M.Sc"]
},

"Mangalayatan University (Online & Distance)": {
UG:["BA","BBA","BCA","B.Com","B.Sc","B.Lib"],
PG:["MBA","MCA","MA","M.Com","M.Sc","M.Lib"]
},

"Amity University (Online)": {
UG:["BA","BBA","BCA","B.Com"],
PG:["MBA","MCA","MA","M.Com"]
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
UG:["BBA","BCA"],
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
}

};

// ================================
// STREAMS
// ================================

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

"B.Com":["General"],

"M.Com":["General"],

"B.Sc":[
"PCM",
"PCB",
"ZBC"
],

"M.Sc":["Mathematics","Physics","Chemistry"],

"B.Lib":["Library Science"],

"M.Lib":[
"Library Science"
]

};

// ================================
// DOM READY
// ================================

document.addEventListener("DOMContentLoaded",function(){

const form=document.getElementById("admissionForm");

const university=document.querySelector('[name="university"]');
const category=document.getElementById("category");
const course=document.getElementById("course");
const stream=document.getElementById("stream");

// ================================
// UNIVERSITY CHANGE
// ================================

if(university){

university.addEventListener("change",function(){

category.selectedIndex=0;

course.innerHTML='<option value="">Select Course</option>';

stream.innerHTML='<option value="">Select Stream / Specialization</option>';

});

}

// ================================
// CATEGORY CHANGE
// ================================

if(category){

category.addEventListener("change",function(){

course.innerHTML='<option value="">Select Course</option>';

stream.innerHTML='<option value="">Select Stream / Specialization</option>';

if(university.value==""){

alert("Please Select University First");

category.selectedIndex=0;

return;

}

const list=universityData[university.value][category.value];

list.forEach(function(item){

course.innerHTML+=`<option value="${item}">${item}</option>`;

});

});

}

// ================================
// COURSE CHANGE
// ================================

if(course){

course.addEventListener("change",function(){

stream.innerHTML='<option value="">Select Stream / Specialization</option>';

if(streams[this.value]){

streams[this.value].forEach(function(item){

stream.innerHTML+=`<option>${item}</option>`;

});

}

});

}

// ================================
// FORM SUBMIT
// ================================

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const data={

name:form.elements["name"].value,

mobile:form.elements["mobile"].value,

email:form.elements["email"].value,

university:form.elements["university"].value,

category:category.value,

course:course.value,

stream:stream.value

};

fetch("https://script.google.com/macros/s/AKfycbyeehpAweTytrnjV4QRJtmxCeeFAacv4hdDxM-1Ub227UyLeBCwYu3WF5YwgFmwcsE/exec",{

method:"POST",

body:JSON.stringify(data)

})

.then(res=>res.json())

.then(result=>{

document.getElementById("successMessage").classList.remove("d-none");

form.reset();

course.innerHTML='<option value="">Select Course</option>';

stream.innerHTML='<option value="">Select Stream / Specialization</option>';

})

.catch(err=>{

console.error(err);

alert("Something went wrong!");

});

});

}

});
