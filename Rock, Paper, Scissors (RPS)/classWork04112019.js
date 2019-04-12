//Get the top-level header element
const topLevel = $('.ul');


//Get all the section elements
const findAll = $('section').find("*");


//Get the section element with class="current"
let findSection = $('.current');


//Get the section that comes after the current section
$current.next('section');


//Get the h2 node from the section before the 'current' section
$current.prev('.current').find('h2');


//Get the div that contains the section that has an h2 with a class of 'highlight'
$('.highlight').parent().parent();


//Get all the sections that contain an H2 and store them in an Array
let allH2 = Array.from($('section').find('h2'));