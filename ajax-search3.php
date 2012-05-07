<div>
<?php
require_once('831046mysqlconnect030584.php');

if(isset($_GET['keyword'])){
$keyword = mysql_escape_string(trim($_GET['keyword'])) ;
$thispage= $_GET['thispage'];
$nextpage= ($thispage+1);


// ****IF**** THERE ARE VALUES ALREADY IN THE ADDRESS BAR (i.e. if someone refreshes, load these results!)






// END OF THIS LITTLE EXPERIMENT


// Test script to get total number of pages

$sqlpages=mysql_query("SELECT * FROM guides WHERE area LIKE '%$keyword%' OR name LIKE '%$keyword%' OR country LIKE '%$keyword%'");
$pagecount=mysql_num_rows($sqlpages);
$numberofpages=$pagecount / 5;
$pagesceil= ceil($numberofpages);

$rowstart=$thispage * 5 - 5; 

$sql=mysql_query("SELECT * FROM guides WHERE area LIKE '%$keyword%' OR name LIKE '%$keyword%' OR country LIKE '%$keyword%' LIMIT $rowstart, 5");

$count=mysql_num_rows($sql);

if($count > 0)
{
while($row=mysql_fetch_array($sql))
{
echo "<a href='#readguide.php?id=$row[guideid]' class='boo'";
echo "<p>";

$name=$row['name'];
$area= $row['area'];
$country=$row['country'];
$reviewtype=$row['reviewtype'];
if($reviewtype=="food"){
    $img="restaurant.png";
} else {
}

if($reviewtype=="destination"){
    $img="globe.png";
} else {
}

if($reviewtype=="trip"){
    $img="liberty.png";
} else {
}

if($reviewtype=="tour"){
    $img="plane.png";
} else {
}

if($reviewtype=="accom"){
    $img="hotel.png";
} else {
}


if(isset($img)) {
echo "<img src='images/menuimages/$img' class='spaceright'>";
} else {
echo "<img src='images/noImageAvailable.jpg' height='60px' class='spaceright' />";
}
if($reviewtype=="destination") {
    echo "$area, $country";
} else {
     echo $name . " in " . $area . ", " . $country . "<br /><br />";
}





echo "</a></class>";
echo "<div style='clear: both'></div>";
}
echo "<br /><br />";



if ($thispage==$pagesceil){
    $moreresults="no";
} else {
    $moreresults="yes";
}

if ($thispage==1) {
    $previous="no";
} else {
    $previous="yes";
}

// echo "<div id='moreandprev'>";

$previouspage=($thispage -1);

if ($moreresults=="yes") {
echo "<a href='#ajax-search3.php?thispage=$nextpage&totalpages=$pagesceil&keyword=$keyword' class='bbq'><button class='floatright'>More Results</button></a><br /><br />";
} else {
}


if ($previous=="yes") {
    echo "<a href='#ajax-search3.php?thispage=$previouspage&totalpages=$pagesceil&keyword=$keyword' class='bbq'><button>Previous Results</button></a><br /><br />";
} else {
}

/*echo "<div id='navigation'>";
*/
echo "Page ";
echo $thispage ;
echo "of ";
echo $pagesceil;


//echo "</div>";

}

}
else
{
echo "<p>No Results</p>";
}

if($count==0){
    echo "Sorry we cannot find any results for " . $keyword;

}


?>
</div>
<div style="clear: both"></div>