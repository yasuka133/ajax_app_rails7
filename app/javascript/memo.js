function post (){
  const form = document.getElementById("form");
  form.addEventListener("submit",(e) =>{
    e.preventDefault();
    const formDate = new FormDate(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
};

window.addEventListener('turbo:load', post);