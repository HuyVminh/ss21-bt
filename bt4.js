// let list = [{
//     id: 1,
//     content: "Learn Javascript Session 01",
//     dueDate: "2023-04-17",
//     status: "Pending",
//     assignedTo: "Anh Bách",
// },
// {
//     id: 2,
//     content: "Learn Javascript Session 2",
//     dueDate: "2023-04-17",
//     status: "Pending",
//     assignedTo: "Lâm th`",
// },
// {
//     id: 3,
//     content: "Learn CSS Session 1",
//     dueDate: "2023-04-17",
//     status: "Pending",
//     assignedTo: "Hiếu Ci ớt ớt",
// },
// ];
// localStorage.setItem("bt4_list", JSON.stringify(list));

let list = JSON.parse(localStorage.getItem("bt4_list"));
// chuc nang read
function showlist() {
    let str = "";
    list.forEach(e =>
        str += `<tr>
        <td>${e.id}</td>
        <td>${e.content}</td>
        <td>${e.dueDate}</td>
        <td>${e.status}</td>
        <td>${e.assignedTo}</td>
        <td>
            <button onclick="fix(${e.id})">Edit</button>
            <button onclick="del(${e.id})">Delete</button>
        </td>
    </tr>`
    );
    document.getElementById("tablebody").innerHTML = str;
}
showlist();

function getNewID() {
    let idMax = 0;
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (idMax < element.id) {
            idMax = element.id;
        }
    }
    return idMax + 1;
}
// chuc nang add
let index;
function save() {
    let contentS = document.getElementById("inputcontent");
    let dueDateS = document.getElementById("inputdate");
    let statusS = document.getElementById("status");
    let assignedToS = document.getElementById("usename");
    if (index >= 0) {
        list[index].content = contentS.value;
        list[index].dueDate = dueDateS.value;
        list[index].status = statusS.value;
        list[index].assignedTo = assignedToS.value;
    } else {
        let obj = {
            id: getNewID(),
            content: contentS.value,
            dueDate: dueDateS.value,
            status: statusS.value,
            assignedTo: assignedToS.value,
        };
        list.push(obj);
    }
    localStorage.setItem("bt4_list", JSON.stringify(list));
    showlist();

}

//chuc nang fix
// an nut fix se lay gia tri o id can fix len o input

function findIndexbyId(iD) {
    for (let i = 0; i < list.length; i++) {
        if (iD == list[i].id) {
            return i;
        }
    }
    return -1;
}
function fix(id) {
    index = findIndexbyId(id);
    console.log(index);
    document.getElementById("inputcontent").value = list[index].content;
    document.getElementById("inputdate").value = list[index].dueDate;
    document.getElementById("status").value = list[index].status;
    document.getElementById("usename").value = list[index].assignedTo;
    return index;
}

// chuc nang xoa

function del(id) {
    index = findIndexbyId(id);
    list.splice(index, 1);
    localStorage.setItem("bt4_list", JSON.stringify(list));
    showlist();
}