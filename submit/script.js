let form = document.querySelector("#submit");
let callback  = document.querySelector("#callback");
let inputurl  = document.querySelector("#file-url");
let inputdir  = document.querySelector("#file-dir");
let inputype  = document.querySelector("#file-type");
form.addEventListener('submit', event => {
    event.preventDefault();
    var upload = new FormData(form);
    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost/upload-XMLHttpRequest/submit/upload.php");
    request.addEventListener('load', function() {
        if(this.status == 200) {
            var result = JSON.parse(this.response);
            inputype.innerHTML = result.type;
            inputurl.value = result.url;
            inputdir.value = result.path;
            callback.innerHTML = '<img src="'+result.url+'" alt="" />';
        }
    });
    request.send(upload);
});