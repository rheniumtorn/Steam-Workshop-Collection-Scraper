// This script scrapes a Steam Workshop Collection and retrieves the titles and IDs for each mod

let modTitles = document.querySelectorAll('.workshopItemTitle');
let workshopIDs = document.querySelectorAll("[id^='sharedfile_']");
let titleList = [];
let idList = [];

// Grab each mod title from collection 
for (let i = 0; i < modTitles.length; i++) {
    titleList.push(modTitles[i].outerText)   
   }

// Grab each workshop ID from collection
for (let i = 0; i < workshopIDs.length; i++) {
    idList.push(workshopIDs[i].id)
   }

// Create new HTML element 
let elWrap = document.createElement("div");
let el = document.createElement("div");

// Create span elements for header text
let titleTxt = document.createElement("span");
    titleTxt.innerText = "Mod Titles:";

let idTxt = document.createElement("span");
    idTxt.innerText = "Workshop IDs:";

// Create text area element and populate with Title list
let textBox1 = document.createElement("textarea");
    textBox1.setAttribute("id","textBox1");
    textBox1.innerText = titleList;
    textBox1.innerText = textBox1.innerText.replaceAll(",", ";");

// Create text area element and populate with ID list
let textBox2 = document.createElement("textarea");
    textBox2.setAttribute("id","textBox2");
    textBox2.innerText = idList;
    textBox2.innerText = textBox2.innerText.replaceAll("sharedfile_", "").replaceAll(",", ";");

// CSS styling

    // Wrapper
    elWrap.style.width = "100%";
    elWrap.style.height = "100%";
    elWrap.style.backgroundColor = "rgba(0,0,0,0.6)";
    elWrap.style.zIndex = "9998";
    elWrap.style.position = "fixed";
    elWrap.style.top = "0";
    elWrap.style.left = "0";

    // Main element
    el.style.backgroundColor = "#273D54";
    el.style.color = "#ddd";
    el.style.fontSize = "16px";
    el.style.textAlign = "center";
    el.style.width = "100%";
    el.style.padding = "2.5rem";
    el.style.borderTop = "1px solid rgba(255,255,255,0.15)";
    el.style.borderBottom = "1px solid rgba(255,255,255,0.15)";
    el.style.boxShadow =  "0 0 20px 0px black";
    el.style.zIndex = "9999";
    el.style.position = "fixed";
    el.style.top = "20%";
    el.style.left = "0";

    // Header text
    titleTxt.style.color = "#67c1f5";
    idTxt.style.color = "#67c1f5";
    
    // Text boxes
    textBox1.style.marginTop = "5px";
    textBox2.style.marginTop = "5px";

// Append elements to page
elWrap.appendChild(el);
el.appendChild(titleTxt);
el.appendChild(document.createElement("br")); // break
el.append(textBox1);
el.appendChild(document.createElement("br")); // break
el.appendChild(document.createElement("br")); // break
el.appendChild(idTxt);
el.appendChild(document.createElement("br")); // break
el.append(textBox2);
document.body.appendChild(elWrap);

