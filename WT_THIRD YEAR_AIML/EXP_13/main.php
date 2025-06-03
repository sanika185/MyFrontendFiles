<?php
$dom = new DOMDocument();
 $dom->load('external.xml');
$dom->load('internal.xml');
if ($dom->validate()) {
    echo "XML document is valid.\n";
} else {
    echo "XML document is invalid.\n";
}
?>
