let button = document.getElementById('addButton');
var sno = 1;
let taskContainer = document.getElementById('taskcontainer');
let input = document.getElementById('input');
button.addEventListener('click',()=>{
    let item = document.createElement('li');
    var del_button = document.createElement('button');
    del_button.textContent = "-";
    del_button.setAttribute('class','del_btn');
    item.setAttribute('class','listItem');
    if(input.value == ''){
        alert('Task shouldnt be empty');
    }else{
        let task = sno+" . "+input.value;
        item.textContent = task;
        taskContainer.appendChild(item);
        input.value = '';
        item.setAttribute('id',sno)
        del_button.setAttribute('id','btn'+sno);
        item.appendChild(del_button)
        sno++;
    }
});
document.addEventListener('keydown',(e)=>{
   // console.log(e.key);
    if(e.key == 'Enter'){
        let item = document.createElement('li');
        item.setAttribute('class','listItem');
        var del_button = document.createElement('button');
        del_button.textContent = "-";
        del_button.setAttribute('class','del_btn');
        if(input.value == ''){
            alert('Task shouldnt be empty');
        }else{
            let task = sno+" . "+input.value;
            item.textContent = task;
            taskContainer.appendChild(item);
            input.value = '';
            del_button.setAttribute('id','btn'+sno);
            item.setAttribute('id',sno)
            item.appendChild(del_button)
            sno++;
        }
    }
});
document.getElementById('delete-items').onclick = ()=>{
    var items = document.getElementsByClassName('del_btn');
    for(let i=0;i<items.length;i++){
        items[i].style.visibility = 'visible';
        items[i].addEventListener('click',(e)=>{
            let parent = e.target.parentElement;
            console.log(parent);
            taskContainer.removeChild(parent);
        })
    }
}