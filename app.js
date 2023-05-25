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



