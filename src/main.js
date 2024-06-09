// modern-normalize
import "../style/modern-normalize.css";

// styles
import "../style/style.css";

// components
import "../style/components/header.css";
import "../style/components/hero.css";
import "../style/components/destination.css";

// utility
import "../style/utility.css";



document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('show-sidebar');
    document.getElementById('overlay').classList.add('show-overlay');
});

document.getElementById('close-icon').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('show-sidebar');
    document.getElementById('overlay').classList.remove('show-overlay');
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('show-sidebar');
    document.getElementById('overlay').classList.remove('show-overlay');
});





// 
document.querySelectorAll('.links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});
