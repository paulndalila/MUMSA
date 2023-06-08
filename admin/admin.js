
// Get references to the div elements
var divs = document.querySelectorAll('.item');
var containers = document.querySelectorAll('.mains');

// Attach click event listeners to the div elements
for (var i = 0; i < 6; i++) {

    divs[i].addEventListener('click', function () {

        //removing existing selection
        for (var j = 0; j < 6; j++) {
            divs[j].classList.remove('active');
        }

        for (var m = 0; m < 4; m++) {
            containers[m].classList.add('tab');
        }

        //var clickedDivIndex = parseInt(this.);
        
        this.classList.add('active');

        var number = parseInt((this.id).match(/\d+/)[0]);

        console.log(number);

        // Checking the clicked item and activating appropriate field
        if (number == 1){
            var activateDashboard = document.getElementById('item1-active');
            activateDashboard.classList.remove('tab');
            console.log(activateDashboard);

        }else if(number == 2){
            var activateDashboard = document.getElementById('item2-active');
            activateDashboard.classList.remove('tab');

        }else if(number == 3){
            var activateDashboard = document.getElementById('item3-active');
            activateDashboard.classList.remove('tab');
        }else if(number == 4){
            var activateDashboard = document.getElementById('item4-active');
            activateDashboard.classList.remove('tab');
        }
        
    });
}
                    
