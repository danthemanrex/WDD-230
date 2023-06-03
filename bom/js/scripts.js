const input = document.querySelector('#favchap');
const button = document.querySelector('#myButton');
const list = document.querySelector('.list');

button.onclick = function(){
    let nameChapter = input.value;

    if (nameChapter.trim() == ''){      // if the text is empty print an alert
        alert('Input field is empty');
        return true
    }
    
    input.innerHTML= ''; 
    
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.textContent = nameChapter;
    let buttonli = document.createElement('button');
    buttonli.textContent = '❌'

    li.appendChild(span);
    li.appendChild(buttonli);
    list.appendChild(li);

    buttonli.addEventListener('click', function(){ 
        li.remove();
    });

}

button.addEventListener('click', function() {
    input.focus(); // focus the text selector into the input
    input.value = ''; // eliminate the text after added
})