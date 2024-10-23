// Popup on load
window.addEventListener('load', function () {
    const popup = document.getElementById('celebration-popup');
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
});

// Scroll progress bar
window.addEventListener('scroll', function () {
    const scrollProgress = document.getElementById('scroll-progress-bar');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
});

// Load menu from JSON
fetch('./data/menu.json')
    .then(response => response.json())
    .then(data => {
        const breakfastMenu = document.getElementById('breakfast-menu').querySelector('tbody');
        const lunchMenu = document.getElementById('lunch-menu').querySelector('tbody');

        data.breakfast.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>₹ ${item.price}</td>
            `;
            breakfastMenu.appendChild(row);
        });

        data.lunch.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>₹ ${item.price}</td>
            `;
            lunchMenu.appendChild(row);
        });
    })
    .catch(error => console.error('Error loading menu data:', error));

// Review Form
function openReviewForm() {
    document.getElementById("reviewForm").style.display = "block";
}

function submitReview() {
    var reviewText = document.getElementById("review").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (reviewText.trim() === "") {
      alert("Please enter a review.");
      return;
    } else if (name.trim() === "") {
        alert("Please enter a name.");
        return;
    } else if (email.trim() === "") {
        alert("Please enter a email.");
        return;
    }
    // alert("Review submitted! Thank you.");
    sendEmail(name, email, reviewText, "Review submitted! Thank you.", "Review");
    document.getElementById("reviewForm").style.display = "none";
}
function send() {
    var name1 = document.getElementById("name1").value;
    var email1 = document.getElementById("email1").value;
    var msg = document.getElementById("message").value;
    if (name1.trim() === "") {
        alert("Please enter a name.");
        return;
    } else if (msg.trim() === "") {
        alert("Please enter a massage.");
        return;
    } else if (email1.trim() === "") {
        alert("Please enter a email.");
        return;
    }
    //   alert("Review submitted! Thank you.");
    sendEmail(name1, email1, msg, "Message sent successfully!", "Enquiry");
    document.getElementById("name1").value = "";
    document.getElementById("email1").value = "";
    document.getElementById("message").value = "";
}

// Initialize EmailJS
(function(){
    var key = env.key;
    emailjs.init({
      publicKey: key,
    });
 })();

// Send Email using EmailJS
function sendEmail(name, email, message, alertText, type) {
    var service = env.ser;
    var template = env.tem;
    emailjs.send(service, template, {
      from_name: name,
      to_name: "Sridhar",
      email: email,
      message: message,
      type: type,
      replay_to: email,
    }).then((response) => {
      alert(alertText);
      console.log('SUCCESS!', response.status, response.text);
    }, (error) => {
      alert(`Failed to send your ${type} Message. Please try again later.`);
      console.log(error)
    });
} 
  


var websiteVersion = "2.0";
var lastUpdated = new Date(2024, 9, 23);
document.getElementById("v").textContent = websiteVersion;
document.getElementById("lu").textContent = lastUpdated.toLocaleString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});