// Disable Script Start
// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Disable text selection
document.addEventListener('selectstart', function(event) {
    event.preventDefault();
});

// Disable Ctrl+C (Copy)
document.addEventListener('copy', function(event) {
    event.preventDefault();
});

// Disable Ctrl+V (Paste)
document.addEventListener('paste', function(event) {
    event.preventDefault();
});
// Disable Script End