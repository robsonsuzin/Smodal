<?php
require(__DIR__ . "/../src/source/Smodal.php");
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="<?= "css/style.css"; ?>"/>
    <link rel="stylesheet" href="<?= "css/icons/styles.css"; ?>"/>
    <title>Exemplo da Smodal</title>
</head>
<body>
<h1>Smodal</h1>
<h2>Abrir uma modal de dialog:</h2>
<?php
$smodalinfo = (new \SuzinCode\Smodal\Smodal())
    ->setSmodaltype('info')
    ->setSaddhtml('js-title', 'Olá você tem aqui uma mensagem para apresentar!')
    ->renderString();
?>
<a class="btn btn-normal btn-blue" href="#" <?= $smodalinfo; ?> >Abrir Modal</a>
<?php
$smodaldelete = (new \SuzinCode\Smodal\Smodal())
    ->setSmodaltype('delete')
    ->setSaddhtml('js-title', 'Você em certeza que deseja apagar esse registro!')
    ->renderString();
?>
<a class="btn btn-normal btn-red" href="#" <?= $smodaldelete; ?> >Deletar Modal</a>
<h2>Remover um elemento da modal:</h2>
<?php
$smodalremovelement = (new \SuzinCode\Smodal\Smodal())
    ->setSmodaltype('delete')
    ->setSaddhtml('js-title', 'Você em certeza que deseja apagar esse registro!')
    ->setSremoveelement('js-cancel')
    ->renderString();
?>
<a class="btn btn-normal btn-blue" href="#" <?= $smodalremovelement; ?> >Abrir Modal Removendo Elemento</a>

<a class="btn btn-normal btn-red" href="#" <?= $smodaldelete; ?> >Deletar Modal</a>

<h2>Adicionando um data ou atributo em um elemento:</h2>
<h3>Adicionar um data ao elemento 'js-confirm' ou seja o botão Apagar e Abrindo uma nova modal!</h3>
<?php
$smodaladddata = (new \SuzinCode\Smodal\Smodal())
    ->setSmodaltype('delete')
    ->setSaddhtml('js-title', 'Você em certeza que deseja apagar esse registro!')
    ->setSaddhtml('js-confirm', 'Abrir Segunda Modal')
    ->setSadddata('js-confirm', 'post', 'callback.php')
    ->setSadddata('js-confirm', 'id', '1')
    ->setSremoveattr('js-confirm', 'smodalclose')
    ->setSremoveelement('js-cancel')
    ->renderString();
?>
<a class="btn btn-normal btn-blue" href="#" <?= $smodaladddata; ?> >Abrir Modal</a>

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="<?= 'js/script.js'; ?>"></script>
<script src="<?= '../src/js/smodal.js'; ?>"></script>
</body>
</html>


