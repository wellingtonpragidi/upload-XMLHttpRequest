let inputfile = document.querySelector("#upload");
let callback  = document.querySelector("#callback");
let inputurl  = document.querySelector("#file-url");
let inputdir  = document.querySelector("#file-dir");
let inputype  = document.querySelector("#file-type");
inputfile.addEventListener('change', function() {
    var file = this.files[0];
    var upload = new FormData();
    upload.append("upload", file);
    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost/upload-XMLHttpRequest/change/upload.php");
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