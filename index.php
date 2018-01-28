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
    <style>@import url(portfolio.css);</style>
    <script src="/jquery-3.2.1.min.js"></script>
    <script src="jquery-ui.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,900" rel="stylesheet">
    <script src="mune.js"></script>
    <script src="scroll.js"></script>
    <script src="jquery.mousewheel.min.js"></script>
    <script>
        $(function(){
            var wid = $(window).width();
            if(wid >= 940){
                $("body,html").mousewheel(function(event, delta) {
                this.scrollLeft -= (delta);
                event.preventDefault();
                });
            }
        });
    </script>

</head>
<body -ms-overflow-style: none; >
    <div id = "bound">
      <div id="drag">
       <div id="scroll_ball"></div>
     </div>
    </div>
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


        <ul id="slider">
           <?php
//                id값이 비어 있지 않다면
                if(empty($_GET['id']) === false ){
                    $sql = "SELECT navi.id,title,subtitle,img,description,topic.id FROM navi LEFT JOIN topic ON topic.gowithnavi = navi.id WHERE navi.id=".$_GET['id'];
                    $result = mysqli_query($conn,$sql);
                    while($row = mysqli_fetch_assoc($result)){
                        echo '<li><a href="description_page.php?id='.$row['id'].'"><img class="item" src="'.$row['img'].'" alt="shoerepair_branding"></a><a class="subtitle" href="description_page.php?id='.$row['id'].'"><h3>'
                            .$row['title']
                            .'</h3><p>'
                            .$row['subtitle']
                            .'</p></a></li>'
                            ."\n";
                    }
//                id값이 비어 있다면
                }else{
                    $sql = "SELECT * FROM topic";
                    $result = mysqli_query($conn,$sql);
                    while($row = mysqli_fetch_assoc($result)){
                     echo '<li><a href="description_page.php?id='.$row['id'].'"><img class="item" src="'.$row['img'].'" alt="shoerepair_branding"></a><a class="subtitle" href="description_page.php?id='.$row['id'].'"><h3>'
                            .$row['title']
                            .'</h3><p>'
                            .$row['subtitle']
                            .'</p></a></li>'
                            ."\n";

                    }
                }
            ?>

        </ul>

<!-- keyframes에서 첫번째 사진과 마지막사진은 동일한 사진으로 로테이션 효과를 준다.-->

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

</html>
