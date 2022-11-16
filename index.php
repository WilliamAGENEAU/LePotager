<?php
	session_start();
	
	// So we include PHPExcel to perform the reading
	require_once dirname(__FILE__, 2) . "/LePotager/utils/lib/PHPExcel-1.8/Classes/PHPExcel.php";

	$ods_file = dirname(__FILE__, 2) . '/LePotager/utils/Fichier_csv.ods';

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