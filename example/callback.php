<?php
require(__DIR__ . "/../src/Smodal.php");

$id = filter_var($_POST['id'], FILTER_VALIDATE_INT);

$smodalcallback = (new \RobsonSuzin\Smodal\Smodal())

    ->setSmodalwidth(400)
    ->setSmodaltemplate('delete')
    ->setSaddhtml('js-title', $id . ' Modal sendo aberto pelo callback do Ajax :)')
    ->setSaddhtml('js-cancel', ' Abrir mais uma modal :)')
    ->setSremoveelement('js-confirm')
    ->setSremoveclass('js-cancel', 'icon-ban')
    ->setSremoveattr('js-cancel', 'smodalclose')
    ->setSadddata('js-cancel', 'post', 'callback.php')
    ->setSadddata('js-cancel', 'id', $id + 1)
    ->renderObject();

$json['smodal'] = $smodalcallback;
echo json_encode($json);
return;
