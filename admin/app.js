const profileWindow = document.getElementById("user-profile");
const newsWindow = document.getElementById("news-add");
const eventWindow = document.getElementById("event-add");

function closeProfileWindow(){
    profileWindow.style.display = "none";
}

function openProfileWindow(){
    profileWindow.style.display = "flex";
}

function closeNewsWindow(){
    newsWindow.style.display = "none";
}
function openNewsWindow(){
    newsWindow.style.display = "flex";
}

function closeEventWindow(){
    eventWindow.style.display = "none";
}
function openEventWindow(){
    eventWindow.style.display = "flex";
}