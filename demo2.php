<?php
    $conn = mysqli_connect("localhost", "missingyou13", "wlsthf13");
    mysqli_select_db($conn, "missingyou13");
    $result = mysqli_query($conn, "SELECT * FROM Editorial");
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
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,900" rel="stylesheet">
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
                echo '<li><a href="#">'.$row['title'].'</a></li>'."\n";}
                ?>
<!--
                    <li><a href="#">Editorial</a></li>
                    <li><a href="#">Typography</a></li>
                    <li><a href="#">User interface</a></li>
                    <li><a href="#">Brand Experience</a></li>
                    <li><a href="#">Others</a></li>
                    <li><a href="#">Contact</a></li>
-->
                </ul>
            </div>
        </div>


        <ul id="slider">
            <li>
                <a href="/description_page.html">
                    <img class="item"src="/image/shoe.png" alt="shoerepair_branding">
                </a>
                <a class="subtitle" href="/description_page.html">
                    <h3>이게 되능가 모르겠네  </h3>
                    <p>허이 쉬바 잘되는구만 </p>
                </a>
            </li>
            <li>
                <a href="/description_page.html">
                    <img class="item"src="/image/shoe.png" alt="shoerepair_branding">
                </a>
                <a class="subtitle" href="/description_page.html">
                    <h3>Shoe repair shop -  </h3>
                    <p>Dr.Nelson's shoe repair shop branding</p>
                </a>
            </li>
            <li>
                <a href="/description_page.html">
                    <img class="item"src="/image/shoe.png" alt="shoerepair_branding">
                </a>
                <a class="subtitle" href="/description_page.html">
                    <h3>Shoe repair shop -  </h3>
                    <p>Dr.Nelson's shoe repair shop branding</p>
                </a>
            </li>
            <li>
                <a href="/description_page.html">
                    <img class="item"src="/image/shoe.png" alt="shoerepair_branding">
                </a>
                <a class="subtitle" href="/description_page.html">
                    <h3>Shoe repair shop -  </h3>
                    <p>Dr.Nelson's shoe repair shop branding</p>
                </a>
            </li>
            <li>
                <a href="/description_page.html">
                    <img class="item"src="/image/shoe.png" alt="shoerepair_branding">
                </a>
                <a class="subtitle" href="/description_page.html">
                    <h3>Shoe repair shop -  </h3>
                    <p>Dr.Nelson's shoe repair shop branding</p>
                </a>
            </li>
            <li>
                <a href="/description_page.html">
                    <img class="item"src="/image/shoe.png" alt="shoerepair_branding">
                </a>
                <a class="subtitle" href="/description_page.html">
                    <h3>Shoe repair shop -  </h3>
                    <p>Dr.Nelson's shoe repair shop branding</p>
                </a>
            </li>
            <li>
                <a href="/description_page.html">
                    <img class="item"src="/image/shoe.png" alt="shoerepair_branding">
                </a>
                <a class="subtitle" href="/description_page.html">
                    <h3>Shoe repair shop -  </h3>
                    <p>Dr.Nelson's shoe repair shop branding</p>
                </a>
            </li>
            <li>
                <a href="/description_page.html">
                    <img class="item"src="/image/shoe.png" alt="shoerepair_branding">
                </a>
                <a class="subtitle" href="/description_page.html">
                    <h3>Shoe repair shop -  </h3>
                    <p>Dr.Nelson's shoe repair shop branding</p>
                </a>
            </li>
            <li>
                <a href="/description_page.html">
                    <img class="item"src="/image/shoe.png" alt="shoerepair_branding">
                </a>
                <a class="subtitle" href="/description_page.html">
                    <h3>Shoe repair shop -  </h3>
                    <p>Dr.Nelson's shoe repair shop branding</p>
                </a>
            </li>
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
<script src="/javascript.js"></script>
    <script src="mune.js"></script>
</html>
