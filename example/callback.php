<?php
require(__DIR__ . "/../src/source/Smodal.php");

$id = filter_var($_POST['id'], FILTER_VALIDATE_INT);

$smodalcallback = (new \SuzinCode\Smodal\Smodal())
    ->setSmodalname('modal_teste')
    ->setSmodalwidth(400)
    ->setSmodaltype('info')
    ->setSaddhtml('js-title', $id . ' Modal sendo aberto pelo callback do Ajax :)')
    ->setSremoveelement('js-confirm')
    ->setSremoveclass('js-cancel', 'icon-ban')
    ->setSremoveattr('js-cancel', 'smodalclose')
    ->setSadddata('js-cancel', 'post', 'callback.php')
    ->setSadddata('js-cancel', 'id', $id + 1)
    ->renderObject();

$json['smodal'] = $smodalcallback;
echo json_encode($json);
return;
