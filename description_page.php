<?php
    $conn = mysqli_connect("localhost", "missingyou13", "wlsthf13");
    mysqli_select_db($conn, "missingyou13");
    $result = mysqli_query($conn, "SELECT * FROM navi");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="shortcut icon" href="/image/favicon.png" type="image/x-icon">
    <link rel="icon" href="/image/favicon.png" type="image/x-icon">
    <meta charset="UTF-8">
    <title>JINSOL_EDEN</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>@import url(/portfolio.css);</style>
    <script src="/jquery-3.2.1.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,400,500,700,900" rel="stylesheet">
</head>
<body>
        <div id="header">
             
             <h1><a href="http://dothegee.org"><img src="/image/logo.svg" id="home_logo" alt="logo"></a></h1>
            
            <ul id="menu">
                <li>
                    <a ng-href="about" href="about"> + About me </a>
                </li>
                <li>
                    <a href="mailto:dldrmak@naver.com" target="_blank">+ dldrmak@naver.com</a>
                </li>
            </ul>
            
            <div id="nav">
               <a href="#" id="menu_icon"></a>
                <ul>  
                <?php
                    while( $row = mysqli_fetch_assoc($result)){
                    echo '<li><a href="http://www.dothegee.org/index.php?id='.$row['id'].'">'.$row['category'].'</a></li>'."\n";}    
                ?>
                </ul>
            </div>
        </div>
            
            <div class="description">
            <?php
                $sql = "SELECT topic.id,title,subtitle,src,description,years,author FROM topic LEFT JOIN images ON images.gowithtopic = topic.id WHERE topic.id=".$_GET['id'];
                $result = mysqli_query($conn,$sql);   
                $row = mysqli_fetch_assoc($result);
                echo '<div class="aboutcontent"><h3 id="description_subtitle">'
                .$row['subtitle'].'</h3><h1 id="description_title">'
                .$row['title'].'</h1><p id="description_text">'
                .$row['description'].'</p><p id="year">'
                .$row['years'].'</p>';
          
          ?>
            </div>
            <div id="slider_secondpage">
            <?php
                $sql = "SELECT topic.id,title,subtitle,src,description,years,author FROM topic LEFT JOIN images ON images.gowithtopic = topic.id WHERE topic.id=".$_GET['id'];
                $result = mysqli_query($conn,$sql);
                while($row = mysqli_fetch_assoc($result)){   
                echo '<img class="item_secondpage" src="'.$row['src'].'" alt="'.$row['alt'].'">';
                }
            ?>
            </div>
       
            <ul id="menu_2">
                <li>
                    <a ng-href="about" href="about"> + About me </a>
                </li>
                <li>
                    <a href="mailto:dldrmak@naver.com" target="_blank">+ dldrmak@naver.com</a>
                </li>
            </ul>
            
        <div id="footer">
            <p>© 2017  Eden. Designer & Web Developer.</p>
        </div>
</body>
<script src="/javascript.js"></script>
    <script src="mune.js"></script>
</html>