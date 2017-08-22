$(document).ready(function() {

  var orderOne= document.querySelector ('#physical');
  var orderTwo = document.querySelector ('#professional');
  var orderThree = document.querySelector ('#mental');
  var sectionOne = document.querySelector ('#section_1');
  var sectionTwo = document.querySelector ('#section_2');
  var sectionThree = document.querySelector ('#section_3');
  // var linkOne = document.querySelector ('#one');
  // var linkTwo = document.querySelector ('#two');
  // var linkThree = document.querySelector ('#three');

  orderTwo.addEventListener ('click', function (event) {
    console.log(event.target.textContent);
    sectionOne.className = 'section_3';
    sectionOne.id = 'section_3';
    // linkOne.href = '#stats';
    sectionTwo.className = 'section_1';
    sectionTwo.id = 'section_1';
    // linkTwo.href = '#section_2';
    sectionThree.className = 'section_2';
    sectionThree.id = 'section_2';
    // linkThree.href = '#section_3';
  });

  orderThree.addEventListener ('click', function (event) {
    console.log(event.target.textContent);
    sectionOne.className = 'section_2';
    sectionOne.id = 'section_2';
    // linkOne.href = '#section_3';
    sectionTwo.className = 'section_3';
    sectionTwo.id = 'section_3';
    // linkTwo.href = '#stats';
    sectionThree.className = 'section_1';
    sectionThree.id = 'section_1';
    // linkThree.href = '#section_2';
  });

});
