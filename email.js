function sendMail(e) {
    e.preventDefault();
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        companyUrl: document.getElementById("companyUrl").value,
        comments: document.getElementById("comments").value
    };

    console.log(params); // confirm companyUrl is present

    emailjs
        .send("service_70qiruf", "template_rssdvgp", params)
        .then(() => {
            document.getElementById("message").innerText =
                "Your message has been sent successfully";
        })
        .catch(() => {
            document.getElementById("message").innerText =
                "Something went wrong. Please try again.";
        });
}
