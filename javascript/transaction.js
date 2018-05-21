let submitButton = document.getElementById("submit-button");
function popup1() {
    event.preventDefault();
    submitButton.classList.toggle("loading");
    setTimeout(() => {submitButton.classList.toggle("loading");
                      submitButton.classList.toggle("success");
                     }, 1500);
    setTimeout(() => {document.getElementById("form").submit();
                      alert("Success!");   
                     }, 2500);
}