const toDoList = [];
function addToList1() {
    const inputElement = document.getElementById('first-input');
    const name = inputElement.value;
    toDoList.push(name);
    console.log(toDoList);
    inputElement.value = '';
}

// const toDoList2 = [];
// function renderToList() {
//     htmlList = '';
//     for (let i = 0; i < toDoList2.length; i++) {
//         const toDo = toDoList2[i];
//         const html = `<p>${toDo}</p>`;
//         htmlList += html;
//     }
//     document.querySelector('#to-do-list').innerHTML = htmlList;
// }

// function addToList2() {
//     const inputElement = document.getElementById('second-input');
//     const name = inputElement.value;
//     toDoList2.push(name);
//     inputElement.value = '';
//     renderToList();
// }

const toDoList2 = [];
function addToList2() {
    let htmlList = '';
    const inputElement = document.getElementById('second-input');
    const name = inputElement.value;
    toDoList2.push(name);
    inputElement.value = '';
    for (let i = 0; i < toDoList2.length; i++) {
        let html = `<p>${toDoList2[i]}</p>`;
        htmlList += html;
    }
    let divElement = document.getElementById('to-do-list');
    divElement.innerHTML = htmlList;
}

// const toDoList3 = [];
// function addToList3() {
//     let htmlList = '';
//     const inputElement = document.getElementById('third-input');
//     const name = inputElement.value;
//     toDoList3.push(name);
//     inputElement.value = '';
//     for (let i = 0; i < toDoList3.length; i++) {
//         let html = `<p>${toDoList3[i]}
//         <button onclick="
//         toDoList3.splice(${i},1);"
//         >Delete</button>
//         </p>`;
//         htmlList += html;
//     }
//     let divElement = document.getElementById('to-do-list3');
//     divElement.innerHTML = htmlList;
// }

const toDoList3 = [];
function renderToList() {
    htmlList = '';
    for (let i = 0; i < toDoList3.length; i++) {
        const toDoObject = toDoList3[i];
        // const name = toDoObject.name;
        // const date = toDoObject.date;
        const { name, date } = toDoObject;
        const html = `<div>${name}</div>
         <div>${date}</div>
        <button id="delete"
        onclick="
        toDoList3.splice(${i},1);
        renderToList();
        ">Delete</button>`;
        htmlList += html;
    }
    document.querySelector('#to-do-list3').innerHTML = htmlList;
}

function addToList3() {
    const inputElement = document.getElementById('third-input');
    const name = inputElement.value;
    const dateElement = document.querySelector('#date');
    const date = dateElement.value;
    toDoList3.push({
        // name: name,
        // date: date,
        name,
        date,
    });
    inputElement.value = '';
    renderToList();
}
