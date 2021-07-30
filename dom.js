var form = document.getElementById('addForm');
var ItemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);
//Delete events
ItemList.addEventListener('click', removeItem);
//Filter Events
filter.addEventListener('keyup',filterItems);

//Add  Items

function addItem(e){
e.preventDefault();
//Get input value
var newItem = document.getElementById('item').value;
//create new li elemets
var li = document.createElement('li');
//add class
li.className = 'list-group-item';
//add text node with input value
li.appendChild(document.createTextNode(newItem));
//create delete button element
var deleteBtn = document.createElement('button');
//add classes to delete button
deleteBtn.className='btn btn-danger btn-sm float-right delete';
deleteBtn.style.float= 'right';
//Append text node
deleteBtn.appendChild(document.createTextNode('X'));
//Append delete button to li
li.appendChild(deleteBtn);
//add li with text to ul(ItemList)
ItemList.appendChild(li);
//Empty additem text in bar after addition to li
document.getElementById('item').value="";
}

//Remove Items

function  removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            var li = e.target.parentElement;
            ItemList.removeChild(li);
        }
    }
    
}

//filter Items
function filterItems(e) {
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //Get lis'
    var items = ItemList.getElementsByTagName('li');
    //convert to array
    Array.from(items).forEach(function (item) {
        
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1)
        item.style.display = 'block';
    else{
        item.style.display = 'none';
    }    
        
    });
}