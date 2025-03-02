const btn = document.getElementById("theme-change").addEventListener("click", function (event) {
    event.preventDefault()
    let randomNum1 = Math.floor(Math.random() * 256);
    let randomNum2 = Math.floor(Math.random() * 223);
    let randomNum3 = Math.floor(Math.random() * 253);
    let randomColor = `
rgb(${randomNum1},${randomNum2},${randomNum3})
`;
    document.body.style.backgroundColor = randomColor;
    document.getElementById("theme").style.backgroundColor = randomColor;
});
const blogBtn = document.getElementById("blog-btn").addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "blog.html"
})
const clearHistory = document.getElementById("clear-history").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("history").innerHTML = " ";
})

const now = new Date();
const formattedDate = now.toLocaleDateString('en-US', {
    weekday: 'long',
});
const formattedDate2 = now.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

const date = document.getElementById("new-date");

const newDate = document.createElement('p');
newDate.innerHTML = ` ${formattedDate},<br><span class="font-bold ">
                  ${formattedDate2}</span>`;

date.appendChild(newDate);

const dd1 = document.getElementById("completed1").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated Successfully");
    const task = convertInnerTextValue("task");
    const completedTask = convertInnerTextValue("completed-task");
    let updateTask = task - 1;
    let updateCompletedTask = completedTask + 1;
    changeValue("task", updateTask);
    changeValue("completed-task", updateCompletedTask);

    const math = document.getElementById("div-1-text").innerText;

    const time = new Date().toLocaleTimeString();

    const history = document.getElementById("history");

    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <p class="m-3 p-3 bg-[#f4f7ff] rounded-lg text-start">You have completed the task ${math} at ${time}</p>
    `;
    history.appendChild(newDiv);
    disabled("completed1");
    checkBothButtonsDisabled();

})

const dd2 = document.getElementById("completed2").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated Successfully");
    const task = convertInnerTextValue("task");
    const completedTask = convertInnerTextValue("completed-task");
    let updateTask = task - 1;
    let updateCompletedTask = completedTask + 1;
    changeValue("task", updateTask);
    changeValue("completed-task", updateCompletedTask);

    const math = document.getElementById("div-2-text").innerText;

    const time = new Date().toLocaleTimeString();

    const history = document.getElementById("history");

    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <p class="m-3 p-3 bg-[#f4f7ff] rounded-lg text-start">You have completed the task ${math} at ${time}</p>
    `;
    history.appendChild(newDiv);
    disabled("completed2");
    checkBothButtonsDisabled();

})

const dd3 = document.getElementById("completed3").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated Successfully");
    const task = convertInnerTextValue("task");
    const completedTask = convertInnerTextValue("completed-task");
    let updateTask = task - 1;
    let updateCompletedTask = completedTask + 1;
    changeValue("task", updateTask);
    changeValue("completed-task", updateCompletedTask);

    const math = document.getElementById("div-3-text").innerText;

    const time = new Date().toLocaleTimeString();

    const history = document.getElementById("history");

    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <p class="m-3 p-3 bg-[#f4f7ff] rounded-lg text-start">You have completed the task ${math} at ${time}</p>
    `;
    history.appendChild(newDiv);
    disabled("completed3");
    checkBothButtonsDisabled();

})

const dd4 = document.getElementById("completed4").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated Successfully");
    const task = convertInnerTextValue("task");
    const completedTask = convertInnerTextValue("completed-task");
    let updateTask = task - 1;
    let updateCompletedTask = completedTask + 1;
    changeValue("task", updateTask);
    changeValue("completed-task", updateCompletedTask);

    const math = document.getElementById("div-4-text").innerText;

    const time = new Date().toLocaleTimeString();

    const history = document.getElementById("history");

    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <p class="m-3 p-3 bg-[#f4f7ff] rounded-lg text-start">You have completed the task ${math} at ${time}</p>
    `;
    history.appendChild(newDiv);
    disabled("completed4");
    checkBothButtonsDisabled();

})

const dd5 = document.getElementById("completed5").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated Successfully");
    const task = convertInnerTextValue("task");
    const completedTask = convertInnerTextValue("completed-task");
    let updateTask = task - 1;
    let updateCompletedTask = completedTask + 1;
    changeValue("task", updateTask);
    changeValue("completed-task", updateCompletedTask);

    const math = document.getElementById("div-5-text").innerText;

    const time = new Date().toLocaleTimeString();

    const history = document.getElementById("history");

    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <p class="m-3 p-3 bg-[#f4f7ff] rounded-lg text-start">You have completed the task ${math} at ${time}</p>
    `;
    history.appendChild(newDiv);
    disabled("completed5");
    checkBothButtonsDisabled();

})

const dd6 = document.getElementById("completed6").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated Successfully");
    const task = convertInnerTextValue("task");
    const completedTask = convertInnerTextValue("completed-task");
    let updateTask = task - 1;
    let updateCompletedTask = completedTask + 1;
    changeValue("task", updateTask);
    changeValue("completed-task", updateCompletedTask);

    const math = document.getElementById("div-6-text").innerText;

    const time = new Date().toLocaleTimeString();

    const history = document.getElementById("history");

    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <p class="m-3 p-3 bg-[#f4f7ff] rounded-lg text-start">You have completed the task ${math} at ${time}</p>
    `;
    history.appendChild(newDiv);
    disabled("completed6");
    checkBothButtonsDisabled();
})

function checkBothButtonsDisabled() {
    const button1 = document.getElementById("completed1");
    const button2 = document.getElementById("completed2");
    const button3 = document.getElementById("completed3");
    const button4 = document.getElementById("completed4");
    const button5 = document.getElementById("completed5");
    const button6 = document.getElementById("completed6");

    if (button1.disabled && button2.disabled && button3.disabled && button4.disabled && button5.disabled && button6.disabled) {
        alert("congrates!!! You have completed all the current task");
    }
}




