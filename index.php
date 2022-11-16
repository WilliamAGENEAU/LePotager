<!DOCTYPE html>
<html lang="fr">

<head>
    <title>D4G grp 14</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="D4G">
    <link rel="icon"  href="images" type="image/x-icon">
    <link rel="stylesheet" href="css/style.css">
    <script src="main.js"></script>
</head>

<nav role='navigation'>
  <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <a href="#"><li>-----</li></a>
      <a href="#"><li>-----</li></a>
      <a href="#"><li>-----</li></a>
	  <div id="outer">
  		<div class="inner">
		  <button type="submit"><i class="fa fa-file-text-o"></i> Print</button>
	  </div>
	  <div class="inner">
		  <button type="submit"><i class="fa fa-file-text-o"></i> Devis</button>
	  </div>
	  </div>
    </ul>
  </div>
</nav>

<?php
	session_start();
	
	// So we include PHPExcel to perform the reading
	require_once dirname(__FILE__, 2) . "/LePotager/utils/lib/PHPExcel-1.8/Classes/PHPExcel.php";

	$ods_file = dirname(__FILE__, 2) . '/LePotager/utils/Fichier csv.ods';

	$excelReader = PHPExcel_IOFactory::createReaderForFile($ods_file);
	$excelObj = $excelReader->load($ods_file);
	$worksheet = $excelObj->getSheet(0);

	$formations = array(); // all the good practices
	$lastRow = 995; // the last row of the file which content something not null
	$lastColumn = 15;
    $panier = array();

	// Get all the good practices and put them into an array
	for ($row = 1; $row <= $lastRow; $row++) {
		$nbr2 = 0;
		$ascii = ord('A');  // get ASCII code 
		for ($column = 1, $nbr1 = 0; $column <= $lastColumn; $column++, $nbr1++) {
			if ($column < 27) {
				$nextLetter = chr($ascii + $nbr1); // convert ascii to char
				$formations[$row][$column] = $worksheet->getCell($nextLetter . $row)->getValue();
			} else { // will go through this just from AA to AF column
				$nextLetter = chr($ascii + $nbr2++); // convert ascii to char
				$formations[$row][$column] = $worksheet->getCell("A" . $nextLetter . $row)->getValue();
			}
		}
	}

    var_dump($formations);

?>
</html>