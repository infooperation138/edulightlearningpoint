const universities = [

{
name:"Amrita University (Online)",
logo:"images/universities/amrita.png",
page:"amrita.html"
},

{
name:"Mangalayatan University (Online)",
logo:"images/universities/mangalayatanonline.png",
page:"mangalayatan-online.html"
},

{
name:"Mangalayatan University (Distance)",
logo:"images/universities/mangalayatandistance.png",
page:"mangalayatan-distance.html"
},

{
name:"Amity University (Online)",
logo:"images/universities/amity.png",
page:"amity.html"
},

{
name:"Jain University (Online)",
logo:"images/universities/jain.png",
page:"jain.html"
},

{
name:"Jamia Hamdard (Distance)",
logo:"images/universities/jamia.png",
page:"jamia.html"
},

{
name:"LPU (Online)",
logo:"images/universities/lpu.png",
page:"lpu.html"
},

{
name:"Subharti University (Distance)",
logo:"images/universities/subharti.png",
page:"subharti.html"
},

{
name:"NMIMS (Online)",
logo:"images/universities/nmims.png",
page:"nmims.html"
},

{
name:"Shoolini University (Online)",
logo:"images/universities/shoolini.png",
page:"shoolini.html"
},

{
name:"Galgotias University (Online)",
logo:"images/universities/galgotias.png",
page:"galgotias.html"
},

{
name:"Manipal University Jaipur",
logo:"images/universities/manipal.png",
page:"manipal.html"
},

{
name:"Sharda University",
logo:"images/universities/sharda.png",
page:"sharda.html"
},

{
name:"SRM University",
logo:"images/universities/srm.png",
page:"srm.html"
},

{
name:"Chandigarh University",
logo:"images/universities/cu.png",
page:"chandigarh.html"
},

{
name:"Andhra University",
logo:"images/universities/andhra.png",
page:"andhra.html"
},

{
name:"Parul University",
logo:"images/universities/parul.png",
page:"parul.html"
},

{
name:"DY Patil University Mumbai",
logo:"images/universities/dypmumbai.png",
page:"dyp-mumbai.html"
},

{
name:"DY Patil University Pune",
logo:"images/universities/dyppune.png",
page:"dyp-pune.html"
}

];

const grid=document.getElementById("universitiesGrid");

universities.forEach(function(uni){

grid.innerHTML += `

<div class="col-lg-3 col-md-4 col-sm-6">

<a href="${uni.page}" class="text-decoration-none">

<div class="university-card">

<img src="${uni.logo}" alt="${uni.name}">

<h5>${uni.name}</h5>

</div>

</a>

</div>

`;

});
