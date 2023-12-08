  
 // Footer
 var currentYear = new Date().getFullYear();
 document.getElementById('current-year').textContent += currentYear;




/* alert */
console.log('I Apologize for the unintentional mistake. Assuring you this will not be repeated in future....!!!'); // just saying hello

  // Alert Button
  document.getElementById('btn-alert').addEventListener('click', function () {
    alert('I Apologize for the unintentional mistake. Assuring you this will not be repeated in future....!!!');
  });

  


//Use JavaScript to change the button label, so the text of the button changes when the mouse hovers over it and then reverts when it leaves.
// Hover Button

var hoverButton = document.getElementById('btn-hover').onmouseover = () => {
    document.getElementById('btn-hover').innerText = '~ . . welcome . . ~';
};

document.getElementById('btn-hover').onmouseleave = () => {
    document.getElementById('btn-hover').innerText = 'Click here to login';
};



   // Incrementing Button
   let count = 1;

     document.getElementById('btn-counter').addEventListener('click', function () {
     count++;
     document.getElementById('txt-counter').innerText = `Number: ${count}`;

     

// Check whether the number is even or odd.
if (count % 2 === 0) {
  document.getElementById('txt-counter').classList.remove('odd');
  document.getElementById('txt-counter').classList.add('even');
} else {
  document.getElementById('txt-counter').classList.remove('even');
  document.getElementById('txt-counter').classList.add('odd');
}
});



   
  // For Loops
  const numbersList = document.getElementById('numbers');

  for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
    
    // Change color based on even or odd
    listItem.style.color = i % 2 === 0 ? 'rgb(115, 0, 255)' : 'rgb(0, 0, 0)';

    numbersList.appendChild(listItem);
  }