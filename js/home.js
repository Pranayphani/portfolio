

  // Replace with your actual EmailJS public key
  emailjs.init("YOUR_PUBLIC_KEY");

  function submitForm(e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target)
      .then(() => {
        alert(" Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert(" Failed to send message. Try again later.");
      });
   }
