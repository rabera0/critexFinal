// script.js
// document.addEventListener('DOMContentLoaded', function() {
//     const audio = document.getElementById('backgroundAudio');
    
//     // You can control the audio playback using JavaScript
//     // For example, to pause the audio after 10 seconds:
//     setTimeout(() => {
//       audio.pause();
//     }, 10000); // Pause after 10 seconds (10000 milliseconds)
//   });


const popups = [];
const popups2 = [];
let activePopups = 0;

function stars(event) {
    const button = document.querySelector('button');
    // button.style.transform = "scale(2)";
    button.textContent = "Join Now";

    var audio = document.getElementById('backgroundAudio');
      audio.play();

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Create and display multiple random popups
    const popupsContainer = document.getElementById('popups');

    const usedPositions = new Set();
    const rand1=Math.floor(Math.random() * 20+1);
    // const rand2=Math.floor(Math.random() * 5+1);
    

    for(let i = 0; i < 2; i++) {
        const rand1=Math.floor(Math.random() * 20+1);
        
        // Generate a unique random position
        let randomX, randomY;
        do {
            randomX = Math.random() * screenWidth;
            randomY = Math.random() * screenHeight;
        } while (usedPositions.has(`${randomX}-${randomY}`));

        usedPositions.add(`${randomX}-${randomY}`);

        const popup = document.createElement('div');
        popup.classList.add('popup');
        
        // Set the popup's position
        popup.style.left = `${randomX - 150}px`;
        popup.style.top = `${randomY}px`;
        // Generate a random scale between 1 and 2
        const popupSize = Math.random() + 0.75; // This generates a random number between 1 and 2

        // Apply the random scale to the popup element
        popup.style.transform = `scale(${popupSize})`;

        // Add content to the popups
        popup.innerHTML = '<img src="imgs/' + rand1+ '.gif" alt="">';

        // Append the popup to the popups container
        popupsContainer.appendChild(popup);


        // Increment the activePopups counter
        activePopups++;

        //  Store popup information in the array
        popups.push({
            element: popup,
            x: randomX,
            y: randomY
        });

        setTimeout(() => {
            fadeOutPopup(popup);
        }, 15000); // 15 seconds
}

    }

  
// Function to fade out a popup chatGPT help
function fadeOutPopup(popup) {
    let opacity = 1;
    const fadeOutInterval = setInterval(() => {
        opacity -= 0.02; // Adjust the rate of opacity decrease as needed
        popup.style.opacity = opacity.toFixed(2);

        if (opacity <= 0) {
            clearInterval(fadeOutInterval);
            popup.remove(); // Remove the popup from the DOM when opacity is 0

            // Decrement the activePopups counter
            activePopups--;

            // Check if all popups have faded out
            if (activePopups === 0) {
                // Reset the button to its original state
                const button = document.querySelector('button');
                // button.style.transform = "scale(1)";
                // button.textContent = "Join Now";
            }
        }
    }, 10); // Adjust the interval as needed for smoother or faster fading
}

// Event listener to trigger the popups and pass the mouse event
document.querySelector('button').addEventListener('click', (event) => {
    stars(event);
});
