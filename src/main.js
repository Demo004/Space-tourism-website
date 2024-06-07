// modern-normalize
import "../style/modern-normalize.css";

// styles
import "../style/style.css";

// components
import "../style/components/header.css";

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
