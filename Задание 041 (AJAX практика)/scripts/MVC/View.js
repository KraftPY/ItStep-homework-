export class View{
    constructor(addUser){
        this.links = {
            btnAddUser: document.querySelector('.add_user'),
            table: document.querySelector('table'),
            th: document.querySelectorAll('th')
        }
        this.links.btnAddUser.addEventListener('click', addUser);
        this.links.th.forEach((el) => el.addEventListener('click', ()=> this.sortTable(event.target.cellIndex)));
        this.num = 0;
    }
    renderUser(user){
        const   tr = document.createElement('tr'),
                td = document.createElement('td'),
                btnDel = document.createElement('button');

        this.num++;
        tr.innerHTML = `
            <td>${this.num}</td>
            <td>${user.name.first} ${user.name.last}</td>
            <td>${user.gender}</td>
            <td>${user.dob.age}</td>
            <td>${user.login.username}</td>
            <td>${user.login.password}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>`;
        btnDel.classList.add('btn_delete');
        btnDel.innerText = 'x';
        this.links.table.appendChild(tr).appendChild(td).appendChild(btnDel);
        btnDel.addEventListener('click', ()=> tr.remove());
    }
    sortTable(numCell){
        let arrTR = [...document.querySelectorAll('tr')].slice(1),
            arr = [...document.querySelectorAll('tr')].slice(1);
        arrTR.sort((rowA, rowB)=> (rowA.cells[numCell].textContent > rowB.cells[numCell].textContent) ? 1 : -1);
        if (arrTR.every((el, i)=> el.cells[numCell].textContent == arr[i].cells[numCell].textContent)) {
            arrTR.sort((rowA, rowB)=> (rowA.cells[numCell].textContent < rowB.cells[numCell].textContent) ? 1 : -1);
        }
        this.links.table.append(...arrTR);
    }
}