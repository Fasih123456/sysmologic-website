function sendMail(e) {
    e.preventDefault();

    const form = document.querySelector('.contact-form');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        companyUrl: document.getElementById("companyUrl").value,
        comments: document.getElementById("comments").value
    };

    console.log(params); // confirm companyUrl is present
    
    console.log("Email sent successfully");
    
    emailjs
        .send("service_70qiruf", "template_rssdvgp", params)
        .then(() => {
            document.getElementById("alertMessage").innerText = "Your message has been sent successfully.";
            // clear all form fields
            form.reset();
            
        })
        .catch(() => {
            document.getElementById("alertMessage").innerText =
                "Something went wrong. Please try again.";
        });
}
