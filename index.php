<!DOCTYPE html>
<html lang="fr">

<head>
    <title>D4G grp 14</title>
	<link rel="icon" href="images\favicon.ico" type="image/x-icon">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="D4G">
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
		<div id="panier">
    		<li>-----</li>
      		<li>-----</li>
      		<li>-----</li>
		</div>
	  <div id="outer">
  		<div class="inner">
		  <button type="submit" onclick="printDiv()"><i ></i> Print</button>
	  </div>
	  <div class="inner">
	  <form action="https://formspree.io/f/mwkzywdl" method="POST"><br>
                <input type="email" name="_replyto" placeholder="Email"><br>
                <button type="submit">Devis</button>
            </form>
	  </div>
	  </div>
    </ul>
  </div>
</nav>
<body>
	<div class="titre">
	<img src="images\DESIGN4GREEN_logo_vecto_Blanc.png" width="40%" weight="40%">
	</div>
	<h1> Formations Green IT / Eco-Design / Eco-Conception</h1>
	<div id='carte'>
		<iframe src="https://api.jawg.io/maps/c111bdcc-60ac-4d6b-9713-81ca5d705f0e/b0b3057a-7554-4d39-b93a-af8b7a11184f.html?access-token=mSx8rWaBLl4TKFIAND6r9V8or0NfCPwyPr5QgPVCt4lLcHCAmxzZbawvhGuq9yMD" width="1200px" height="800px"></iframe>
	</div>
</body>
<script>
    function printDiv() {
        var divContents = document.getElementById("panier").innerHTML;
        var a = window.open('', '', 'height=800, width=800');
        a.document.write('<html>');
        a.document.write(
            '<head><link rel="stylesheet" href="./../css/style.css" type="text/css"><link rel="stylesheet" href="./../utils/lib/bootstrap.min.css" /></head>'
        );
        a.document.write('<body>');
        a.document.write(divContents);
        a.document.write('</body></html>');
        a.document.close();
        a.print();
    }
</script>
</html>
