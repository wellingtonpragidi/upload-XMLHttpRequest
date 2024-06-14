<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Upload XMLHttpRequest</title>
</head>
<body>

    <form method="POST" action="" enctype="multipart/form-data">
        <input id="upload" type="file" accept=".*" name="upload" />
        <label for="upload" class="btn">Escolher Arquivo</label>
    </form>
    <span id="file-type"></span><br />
    <input id="file-url" type="url" name="file-url" /><br />
    <input id="file-dir" type="text" name="file-dir" />
    <div id="callback"></div>

<script src="script.js"></script>
</body>
</html>