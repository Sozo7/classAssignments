/*Exercise 1: Selecting Nodes
<html>
	<body>
		<header>
			<ul>
				<li class="first">Item 1</li>
				<li class="selected">Item 2</li>
				<li class="last">Item 3</li>
			</ul>
		</header>
		<div class="col">
			<section>
				<h2>Section 1</h2>
			</section>
			<section class="current">
				<h2 class="highlight">Section 2</h2>
			</section>
			<section>
				<h1>Section 2</h1>
			</section>
		</div>
	</body>
</html>
Get the header element
Get all the section elements
Get the section element with class="current"
Get the section that comes after the current section
Get the h2 node from the section before the 'current' section
Get the div that contains the section that has an h2 with a class of 'highlight'
Get all the sections that contain an H2 (using a single statement); */

//get the header element
const header = document.getElementsByClassName('class list');
console.log(header);

//get all the section elements
const current = document.getElementsByTagName('different groups');
console.log(current);

// get the section element with class="current"
const present = document.getElementsByClassName('Section 2');
console.log(present);

//Get the h2 node from the section before the 'current' section
const node =  document.getElementsByName("Section 1");
console.log(node);

//get the div that contains the section that has an h2 with a class of 'highlight'
const elements = document.getElementsByClassName('h2 class');
console.log(elements);

//Get all the sections that contain an H2 (using a single statement);
const h2 = document.querySelectorAll('h2');
console.log(h2);






