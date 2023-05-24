document.getElementById("hamburger").onclick = () =>{
    document.querySelector(".header ul").classList.toggle('shrinked');
      const theNav = document.querySelector('.nav');
      const parentDiv = document.querySelector('#hamburger');
      // Toggle the hamburger icon
      if (theNav.classList.contains('shrinked')) {
        parentDiv.removeChild(parentDiv.firstChild)
        parentDiv.classList.remove('exed');

        for (let i = 1; i <= 3; i++) {
            const childDiv = document.createElement('div');
            childDiv.textContent = '    ';
            parentDiv.appendChild(childDiv);
        }

        parentDiv.style.background = 'transparent';

      } else {
        // Create a text node with the 'X' symbol
        const crossSymbol = document.createTextNode('X');
        parentDiv.classList.add('exed');

        // Remove all existing child divs
        while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.firstChild);
        }

        // Add the 'X' symbol as the only child of the parent div
        parentDiv.appendChild(crossSymbol);
        parentDiv.style.background = 'red';
        parentDiv.style.color = 'white';
    }
}

//for the homepage
// Get all the target elements with class "box"
// const targetElements = document.querySelectorAll('.box');

// // Function to check if an element is in the viewport
// function isElementInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// // Function to toggle the 'active' class for the elements in the viewport
// function toggleActiveClass() {
//   targetElements.forEach(element => {
//     if (isElementInViewport(element)) {
//       element.classList.add('active');
//     } else {
//       element.classList.remove('active');
//     }
//   });
// }

// // Event listener for scroll events
// window.addEventListener('scroll', toggleActiveClass);

// Initial check for elements in the viewport
//toggleActiveClass();


