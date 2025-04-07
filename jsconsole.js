
let bg = document.createElement("div");
bg.classList.add("bg", "d-flex", "flex-column");
document.body.appendChild(bg);
let header = document.createElement("h1");
header.textContent = "Time Converter";
header.classList.add("header");
bg.appendChild(header);
let paragraph = document.createElement("paragraph");
paragraph.textContent = "Enter hours and minutes values to convert into seconds";
paragraph.classList.add("paragraph");
bg.appendChild(paragraph);
let label1 = document.createElement("label");
label1.textContent = "Hours *";
label1.id = "label1";
label1.setAttribute("for", "hoursInput");
label1.style.marginTop = "20px";
label1.classList.add("paragraph");
bg.appendChild(label1);
let input1 = document.createElement("input");
input1.type = "text";
input1.classList.add("inputElement");
input1.id = "hoursInput";
bg.appendChild(input1);

let label2 = document.createElement("label");
label2.textContent = "Minutes *";
label2.id = "label2";
label2.setAttribute("for", "minutesInput");
label2.style.marginTop = "20px";
label2.classList.add("paragraph");
bg.appendChild(label2);
let input2 = document.createElement("input");
input2.type = "text";
input2.classList.add("inputElement");
input2.id = "minutesInput";
bg.appendChild(input2);

let button = document.createElement("button");
button.textContent = "Convert to Seconds";
button.classList.add("btn1");
button.id = "convertBtn";
bg.appendChild(button);
let para2 = document.createElement("paragraph");
para2.classList.add("para2");
para2.id = "errorMsg";
bg.appendChild(para2);

let container = document.createElement("div");
container.classList.add("contain", "d-none");
let remainings = document.createElement("paragraph");
remainings.id = "timeInSeconds";
container.appendChild(remainings);
bg.appendChild(container);

button.addEventListener("click", function(event) {
    let value1 = parseInt(input1.value);
    let value2 = parseInt(input2.value);
    if (input1.value === "" || isNaN(input1.value)) {
        para2.textContent = "Please enter a valid number in hours";
        container.classList.add("d-none");
    } else if (input2.value === "" || isNaN(input2.value)) {
        para2.textContent = "Please enter a valid number in minutes";
        container.classList.add("d-none");
    } else {
        let result = (((value1 * 60) * 60) + (value2 * 60));
        para2.textContent = "";
        remainings.textContent = result + "S";
        container.classList.remove("d-none");

    }
})