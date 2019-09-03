<?php
require(__DIR__ . "/../src/source/Smodal.php");

$smodal = (new \SuzinCode\Smodal\Smodal())
->setSmodaltype('info')
->renderString();

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="<?= __DIR__ . "css/style.css"; ?>"/>
    <title>Exemplo da Smodal</title>
</head>
<body>
<a href="#" <?= $smodal;?> >Abrir Modal</a>
</body>
</html>

