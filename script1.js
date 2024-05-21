function createprofile(artname, artdescrip, minprice, maxprice, artimg){
    let html = `<div class="card">
    <a href="${artimg}" target="_blank">
    <img src="${artimg}" alt="${artname}">
    </a>
    <div class="txt">
    <h1>${artname}</h1>
    <span>${artdescrip}</span><span>Price: ₹${minprice} to ₹${maxprice}</span></div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}
createprofile("Elephant", "This is an Elephant which can be available in silver as well as copper metal in different sizes and weights from 60grams to 500 grams.", 6787, 89898, "/image/elephant.jpg")
createprofile("Guitar", "This is an Guitar which is available in silver as well as copper from 1kg to 2kg.", 10000, 40000, "img/guitar.jpg")
createprofile("Peacock", "A Peacock of silver which can be available in silver as well as copper in the range of 300grams to 700grams.", 5000, 10000, "/image/peacock.jpg")
createprofile("Camel", "A Camel which can be available in silver as well as copper metal from 1kg to 2kg.", 10000, 20000, "/image/camel.jpg")
createprofile("Peahen", "A  Peahen available in both silver and copper from 100gm to 700grams.", 5000, 10000, "/image/peahen.jpg")
createprofile("Antique Water Jug", "An Antique water jug which is available in silver  as well as copper in different sizes and weight.", 70000, 200000, "/image/waterjug.jpg")