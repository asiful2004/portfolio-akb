window.addEventListener("load", function () {
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function () {
        document.querySelector(".preloader").style.display = "none";

    }, 1000)
})

// Aside Navbar

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        // remove back section
        removeBackSectionClass();

        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }


        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                // add back section
                addBackSectionClass(j);
            }
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })

}

function removeBackSectionClass() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section")
    }
}

function addBackSectionClass(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")

}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", asideSectionTogglerBtn)
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}





document.addEventListener('DOMContentLoaded', function () {
    const backgroundMusic = document.getElementById('background-music');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const currentTimeSpan = document.getElementById('current-time');
    const durationSpan = document.getElementById('duration');
    const volumeControl = document.getElementById('volume-control');

    // Initialize the controller
    backgroundMusic.volume = volumeControl.value;
    
    // Update the duration once the metadata is loaded
    backgroundMusic.addEventListener('loadedmetadata', function() {
        durationSpan.textContent = formatTime(backgroundMusic.duration);
    });

    // Update current time as the song plays
    backgroundMusic.addEventListener('timeupdate', function() {
        currentTimeSpan.textContent = formatTime(backgroundMusic.currentTime);
    });

    // Play/Pause functionality
    playPauseBtn.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            backgroundMusic.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    // Volume control
    volumeControl.addEventListener('input', function() {
        backgroundMusic.volume = volumeControl.value;
    });

    // Format time in minutes and seconds
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});

window.addEventListener('load', function() {
    const preloader = document.getElementById('custom-preloader');
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    preloader.style.transition = 'visibility 0s 1s, opacity 1s linear'; // Optional: smooth fade-out
});

// text animation for typing text

const text = "Akib Hasan";
let index = 0;
const speed = 100; // Typing speed
const delayAfterFinish = 1000; // Delay after full text is typed before clearing

function type() {
    if (index < text.length) {
        document.getElementById("type-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, speed);
    } else {
        setTimeout(clearText, delayAfterFinish); // Wait before clearing text
    }
}

function clearText() {
    if (index > 0) {
        document.getElementById("type-text").innerHTML = text.substring(0, index - 1);
        index--;
        setTimeout(clearText, speed / 2); // Clearing speed is faster
    } else {
        setTimeout(type, delayAfterFinish); // Start typing again
    }
}

window.onload = function() {
    type(); // Start the typing animation when the page loads
};

document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress-in");

    progressBars.forEach((bar, index) => {
        const percentage = bar.getAttribute("data-percentage");

        // Add a small delay for each progress bar to animate one after another smoothly
        setTimeout(() => {
            bar.style.width = percentage + '%';
        }, index * 500);  // Adjust delay as needed; 500ms between each bar
    });
});
