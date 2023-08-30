
var remove= document.getElementsByClassName('removeButton')
var add= document.getElementById('addingButton')
var listItem=document.getElementsByClassName('list')
var bookSection=document.getElementById('ul')


// for (var i=0;i<remove.length;i++){
//     remove[i].addEventListener('click', function(event){
//         // console.log(Array.from(remove).indexOf(event.target))
//         var listIndex=Array.from(remove).indexOf(event.target)
//         listItem[listIndex].parentNode.removeChild(listItem[listIndex])
//     })
// }
var title=document.getElementById('Title')
var author=document.getElementById('Author')

add.addEventListener('click', function(){
    // console.log(title.value)
    if (title.value.length !==0){
        var newList=document.createElement('div')
        var newTitle=document.createElement('div')
        var newAuthor=document.createElement('div')
        var newdivButton=document.createElement('div')
        newdivButton.classList.add('removed')
        var newButton= document.createElement('button')
        newButton.classList.add('removeButton')
        newButton.textContent='Remove'
        newTitle.appendChild(document.createTextNode(`" ${title.value} " by   `))
        newAuthor.appendChild(document.createTextNode(`${author.value} `))
        newAuthor.style.padding='7px'
        newdivButton.appendChild(newButton)
        newList.appendChild(newTitle)
        newList.appendChild(newAuthor)
        newList.appendChild(newdivButton)
        newList.classList.add('minorList')
        bookSection.appendChild(newList)
        title.value=''
        author.value=''
        }     
})


bookSection.addEventListener('click', function(event) {
    if (event.target.classList.contains('removeButton')) {
        var listItem = event.target.closest('.minorList');
        listItem.parentNode.removeChild(listItem);
    }
});




