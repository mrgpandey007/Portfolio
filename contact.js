(function(){
  emailjs.init("iUSp71Mk1u1mEwhI_");
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_r4lye6i", "template_35y5h5m", this)
    .then(function() {
      alert("✅ Message sent successfully!");
      document.getElementById("contact-form").reset();
    }, function(error) {
      alert("❌ Failed to send message: " + error.text);
    });
});