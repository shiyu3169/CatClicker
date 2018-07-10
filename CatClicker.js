var catList = [
	{name: "Andy", picture:"https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426", counter:0},
	{name: "Bob", picture:"https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496", counter:0},
	{name: "Coffee", picture:"https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454", counter:0},
	{name: "David", picture:"https://lh3.ggpht.com/cesD31eroFxIZ4IEeXPAJkx_8i5-haU3P9LQosGNfV-GfAPUh2bE4iw4zV6Mc9XobWOR70BQh2JAP57wZlM=s0#w=640&h=480", counter:0},
	{name: "Effy", picture:"https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=495", counter:0}
];
var currentCatName;

function init() {
	// fetch the list of cat name
	var ul = document.querySelector("ul");
	for(cat of catList) {
		var li = document.createElement("li");
		li.classList.add("list-group-item");
		li.innerHTML = cat.name;
		li.addEventListener('click', function(catCopy){
			currentCatName = catCopy.path[0].innerHTML
		  	fetchCat(currentCatName);
		}, false);

		ul.appendChild(li);
	}

	// edit button
	var editCat = document.querySelector("#editCat");
	editCat.style.display = 'none';
	editCat.addEventListener('click', function() {
			editingCat(currentCatName);
		}, true)

	document.querySelector("#editForm").addEventListener("submit", update);
}


function update(e){
		e.preventDefault();

		let cat = catList.find(
		catInList => {
			return catInList.name === currentCatName;
			}
		);

		const index = catList.indexOf(cat);

		currentCatName = cat.name =  document.querySelector("#name").value;
		cat.picture = document.querySelector("#url").value;
		cat.counter = document.querySelector("#counter").value;

		catList[index] = cat;
		fetchCat(cat.name);

		jQuery('#editModal').modal('hide');
	}


// init the edit modal
function editingCat(name) {
	let cat = catList.find(
		catInList => {
			return catInList.name === name;
		}
	);
	document.querySelector("#catTitle").innerHTML += cat.name;
	document.querySelector("#name").setAttribute("value", cat.name);
	document.querySelector("#url").setAttribute("value", cat.picture);
	document.querySelector("#counter").setAttribute("value", cat.counter);
}

function fetchCat(name) {
	editCat.style.display = 'block';

	let cat = catList.find(
		catInList => {
			return catInList.name === name;
		}
	);
	let output = document.querySelector('#output');

	output.innerHTML="";

	let h2 = document.createElement('h2');
	h2.innerHTML=cat.name;

	let img = document.createElement('img');
	img.setAttribute("src", cat.picture);
	
	img.addEventListener('click', function(){
		cat.counter++;
		counter.innerHTML = cat.counter;
	}, false);

	let counter = document.createElement('h3');
	counter.innerHTML = cat.counter;

	output.appendChild(h2);
	output.appendChild(img);
	output.appendChild(counter);
}