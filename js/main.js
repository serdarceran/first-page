// Developer info object
const developerInfo = {
    name: 'Hede Hodo',
    type: 'Full Stack Developer',
    location: 'Earth',
    interests: ['Clean Code', 'DevOps', 'Cloud Architecture'],
    currentlyLearning: 'Always something new!'
};

// Function to update the code snippet
function updateCodeSnippet() {
    const codeElement = document.getElementById('dev-info');
    if (codeElement) {
        codeElement.textContent = JSON.stringify(developerInfo, null, 4);
    }
}

// Function to handle theme switching
function toggleTheme() {
    const root = document.documentElement;
    const isDark = root.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    updateCodeSnippet();
    
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-theme');
    }
});
