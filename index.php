<?php
// This PHP file can be named index.php or similar.

$games = [
    ["href" => "games/bob-the-robber-2/", "src" => "images/bob-the-robber-2.png", "alt" => "bob the robber 2"],
    ["href" => "games/vex7/", "src" => "images/vex7.jpeg", "alt" => "vex 7"],
    ["href" => "games/vex6/", "src" => "images/vex6.jpeg", "alt" => "vex 6"],
    ["href" => "games/moto-x3m/", "src" => "images/moto-x3m.jpg", "alt" => "moto x3m"],
    ["href" => "games/retro-bowl/", "src" => "images/retro-bowl.jpg", "alt" => "retrobowl"],
    ["href" => "games/drive-mad/", "src" => "images/drive-mad.jpg", "alt" => "drive mad"],
    ["href" => "games/slope/", "src" => "images/slope.jpg", "alt" => "slope"],
    ["href" => "games/motox3m2/", "src" => "images/motox3m2.jpg", "alt" => "moto x3m2"],
    ["href" => "games/1v1lol/", "src" => "images/1v1icon.png", "alt" => "1v1 lol"],
    ["href" => "games/a-dance-of-fire-and-ice/", "src" => "images/adofai.png", "alt" => "a dance of fire and ice"],
    ["href" => "games/amongus/", "src" => "images/auicon.png", "alt" => "among us"],
    ["href" => "games/backrooms/", "src" => "images/backrooms.png", "alt" => "backrooms"],
    ["href" => "games/badicecream2/", "src" => "images/badice2.png", "alt" => "bad ice cream 2"],
    ["href" => "games/baldisbasics/", "src" => "images/baldi.png", "alt" => "baldis basics"],
    ["href" => "games/basketballstars/", "src" => "images/basketballstars.png", "alt" => "basketball stars"],
    ["href" => "games/basketbrosio/", "src" => "images/basketbros.png", "alt" => "basketbros.io"],
    ["href" => "games/2048/", "src" => "images/2048.png", "alt" => "2048"],
    ["href" => "games/bitlife/", "src" => "images/bitlife.png", "alt" => "bitlife"],
    ["href" => "games/worldshardestgame/", "src" => "images/worldhardestgame.png", "alt" => "world's hardest game"],
    ["href" => "games/worldshardestgame2/", "src" => "images/worldshardestgame2.png", "alt" => "world's hardest game 2"],
    ["href" => "games/slope2/", "src" => "images/slope21.png", "alt" => "slope 2"],
    ["href" => "games/sm64/", "src" => "images/sm64.png", "alt" => "super mario 64"],
    ["href" => "games/stickman-hook/", "src" => "images/stickmanhook.png", "alt" => "stickman hook"],
    ["href" => "games/minecraft-18/", "src" => "images/minecraft.png", "alt" => "minecraft"],
    ["href" => "games/drift-boss/", "src" => "images/driftboss.png", "alt" => "drift boss"],
    ["href" => "games/core-ball/", "src" => "images/coreball.png", "alt" => "core ball"],
    ["href" => "games/wordle/", "src" => "images/wordleicon.png", "alt" => "wordle"],
    ["href" => "games/subway-surfers/", "src" => "images/subwaysurfers.png", "alt" => "subway surfers"],
    ["href" => "games/bad-ice-cream/", "src" => "images/badice1.png", "alt" => "bad ice cream"],
    ["href" => "games/bad-ice-cream-3/", "src" => "images/badice3.png", "alt" => "bad ice cream 3"],
    ["href" => "games/cell-machine/", "src" => "images/cellmachine.png", "alt" => "cell machine"],
    ["href" => "games/cookie-clicker/", "src" => "images/cookie.png", "alt" => "cookie clicker"],
    ["href" => "games/getaway-shootout/", "src" => "images/getaway.png", "alt" => "getaway shootout"],
    ["href" => "games/paperio2/", "src" => "images/paperio2.png", "alt" => "paper io 2"],
    ["href" => "games/temple-run-2/", "src" => "images/templerun2.png", "alt" => "temple run 2"],
    ["href" => "games/tunnel-rush/", "src" => "images/tunelrush.png", "alt" => "tunnel rush"],
    ["href" => "games/drift-hunters/", "src" => "images/drifthunters.png", "alt" => "drift hunters"],
    ["href" => "games/ducklife4/", "src" => "images/ducklife4.png", "alt" => "duck life 4"],
    ["href" => "games/doom/", "src" => "images/doom.png", "alt" => "doom"],
    ["href" => "games/fnaf2/", "src" => "images/fnaf2.png", "alt" => "five nights at freddys 2"],
    ["href" => "games/madalin-stunt-cars-2/", "src" => "images/madalin-stunt-cars-2.png", "alt" => "madalin stunt cars 2"],
    ["href" => "games/madalin-stunt-cars-3/", "src" => "images/Madalin-Stunt-Cars-3.png", "alt" => "madalin stunt cars 3"],
    ["href" => "games/krunker/", "src" => "images/krunker.png", "alt" => "krunker"],
    ["href" => "games/chrome-dino/", "src" => "images/dino.gif", "alt" => "chrome dino"],
    ["href" => "games/csgo-clicker/", "src" => "images/csgoclickerBG.png", "alt" => "csgo clicker"],
    ["href" => "games/10-minutes-till-dawn/", "src" => "images/10minstilldawn.png", "alt" => "10 minutes till dawn"],
    ["href" => "games/jetpack-joyride/", "src" => "images/jetpackjoy.png", "alt" => "jetpack joyride"],
    ["href" => "games/fridaynightfunkin/", "src" => "images/fnf.png", "alt" => "friday night funkin"],
];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unblocked V2</title>
    <link rel="stylesheet" href="/main.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.2.0/css/all.css">
</head>
<body>
    <nav>
        <img src="images/icon.png" alt="logo">
        <h1>Unblocked V2</h1>
    </nav>

    <div class="featured">
        <h1>Popular:</h1>
        <div class="column">
          <a href="games/bob-the-robber-2/">
            <img src="images/bob-the-robber-2.png">
            <div class="play-button">
                <i class="fa-solid fa-play"></i>
            </div>
          </a>
          <a href="games/vex7/">
            <img src="images/vex7.jpeg">
            <div class="play-button">
                <i class="fa-solid fa-play"></i>
            </div>
          </a>
        </div>
        <div class="row">
          <a href="games/vex6">
            <img src="images/vex6.jpeg">
            <div class="play-button">
                <i class="fa-solid fa-play"></i>
            </div>
          </a>
        </div>
        <div class="row">
          <a href="games/drive-mad/">
            <img src="images/drive-mad.jpg">
            <div class="play-button">
                <i class="fa-solid fa-play"></i>
            </div>
          </a>
        </div>
        <div class="column">
          <a href="games/moto-x3m/">
            <img src="images/moto-x3m.jpg">
            <div class="play-button">
                <i class="fa-solid fa-play"></i>
            </div>
          </a>
          <a href="games/retro-bowl/">
            <img src="images/retro-bowl.jpg">
            <div class="play-button">
                <i class="fa-solid fa-play"></i>
            </div>
          </a>
        </div>
    </div>

    <div class="content">
        <hr>

        <div class="search">
            <input type="text" placeholder="Search..." oninput="">
            <button><i class="fas fa-search"></i></button>
        </div>

        <div id="games">
            <?php foreach ($games as $game): ?>
                <a href="<?= $game['href']; ?>">
                    <img src="<?= $game['src']; ?>" alt="<?= $game['alt']; ?>">
                </a>
            <?php endforeach; ?>
        </div>
    </div>

    <h2>Up To Date</h2>
    <h3>v2024.7</h3>

    <script src="script.js"></script>
</body>
</html>
