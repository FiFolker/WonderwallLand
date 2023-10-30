<?php
$frets = 24;
$strings = [1=>'E', 2=>'A', 3=>'D', 4=>'G', 5=>'B', 6=>'E'];
$notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G','G#', 'A', 'A#', 'B'];

if (isset($_GET['string']) && isset($_GET['fret'])) {
	$string = $_GET['string'];
	$fret = $_GET['fret'];
	$note = $strings[$string];
	$note = array_search($note, $notes) + $fret;
	$note = $note % count($notes);
	$note = $notes[$note];
	echo "note trouvé : ".$note;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Wonderwall Land</title>
	<style>
		a{
			text-decoration: none;
			color: black;
		}

		.fret{
			display: inline;
		}
	</style>
</head>
<body>
	<div class="fretboard">
	<?php foreach ($strings as $key=>$string) { ?>
		<div class="<?= $string ?>">
			<?= $string ?>
		<?php for ($fret=1; $fret < $frets; $fret++) { ?> 
			
			<div class="fret">	
			|<a href="?string=<?= $key ?>&fret=<?= $fret ?>">-</a>|
			</div>
				
		<?php } ?>
		
		</div>
	<?php } ?>
	</div>
</body>
</html>