<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>javascript</title>
</head>
<body>


<button>click</button>


<script>
 
 var myButton = document.querySelectorAll('button');
 myButton[0].addEventListener("click", js);

function js() {
    alert("Hii");
}

</script>

</body>
</html>
