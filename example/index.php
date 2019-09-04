<?php
require(__DIR__ . "/../src/Smodal.php");
use RobsonSuzin\Smodal\Smodal;
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
<h4>Abrir uma modal de dialog:</h4>
<?php
$smodalinfo = (new Smodal())
    ->setSmodaltemplate('info')
    ->setSaddhtml('js-title', 'Olá você tem aqui uma mensagem para apresentar!')
    ->renderString();
?>
<a class="btn btn-normal btn-blue" href="#" <?= $smodalinfo; ?> >Abrir Modal</a>
<?php
$smodaldelete = (new Smodal())
    ->setSmodaltype('delete')
    ->setSaddhtml('js-title', 'Você em certeza que deseja apagar esse registro!')
    ->renderString();
?>
<a class="btn btn-normal btn-red" href="#" <?= $smodaldelete; ?> >Deletar Modal</a>
<h4>Remover um elemento da modal:</h4>
<?php
$smodalremovelement = (new Smodal())
    ->setSmodaltype('delete')
    ->setSaddhtml('js-title', 'Você em certeza que deseja apagar esse registro!')
    ->setSremoveelement('js-cancel')
    ->renderString();
?>
<a class="btn btn-normal btn-blue" href="#" <?= $smodalremovelement; ?> >Abrir Modal Removendo Elemento</a>

<a class="btn btn-normal btn-red" href="#" <?= $smodaldelete; ?> >Deletar Modal</a>

<h3>Adicionando um data ou atributo em um elemento:</h3>
<h4>Adicionar um data ao elemento 'js-confirm' ou seja o botão Apagar e Abrindo uma nova modal!</h4>
<?php
$smodaladddata = (new Smodal())
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

<h3>Abrindo uma modal com um template 'teste':</h3>
<?php
$smodaltemplate = (new Smodal())
    ->setSmodaltemplate('teste')
    ->setSaddhtml('js-title', 'Esse conteúdo foi adicionado dinamicamente')
    ->renderString();
?>
<a class="btn btn-normal btn-blue" href="#" <?= $smodaltemplate; ?> >Abrir Modal</a>

<h3>Abrindo uma modal enviando conteudo html:</h3>
<?php
$smodalhtml = (new Smodal())
    ->setSmodalhtml('Esse conteúdo foi adicionado dinamicamente')
    ->renderString();
?>
<a class="btn btn-normal btn-blue" href="#" <?= $smodalhtml; ?> >Abrir Modal</a>

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="<?= 'js/script.js'; ?>"></script>
<script src="<?= '../src/js/smodal.js'; ?>"></script>
</body>
</html>


