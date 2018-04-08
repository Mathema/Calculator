<html>
<head>
    <title>Calculator App</title>
    <link rel="stylesheet" href="style1.css">
</head>
<body>
    <div class="calc-body">
        
        <div class="main">
            <div class="display"></div>
            <div class="buttons">
            	<?php
                $array = array(7,8,9,'/',4,5,6,'X',1,2,3,'-', 0,'.','=','+');
            	$buttons = "";
            	for($i=0; $i<count($array); $i++)
            	$buttons .="<div class='button'>$array[$i]</div>";
            	echo $buttons;
            	?>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>