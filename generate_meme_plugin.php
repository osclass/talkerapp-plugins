<?php 


$icons = array();

if ($handler = opendir('memes')) {
    while (false !== ($file = readdir($handler))) {
        if ($file != "." && $file != "..") {
			$name = preg_replace('|\.([a-zA-Z]{3,4})|', '', $file);
            $icons[] = 'new plugin.Meme(/(^|\s):'.$name.':($|\s)/, domain + "'.$file.'", "'.$name.'")';
        }
    }
    closedir($handler);
}




$fp = fopen('meme-icons.js', 'w');

fwrite($fp, "plugin.Meme = function(matcher, path, meaning){\n");
fwrite($fp, "  this.matcher = matcher;\n");
fwrite($fp, "\n");
fwrite($fp, "  this.replacementString = [\n");
fwrite($fp, " ' <img src=\"', path,\n");
fwrite($fp, " '\" class=\"memes\" style=\"position:relative; top:2px\" alt=\"', meaning,\n");
fwrite($fp, " '\" title=\"', meaning, '\" /> '\n");
fwrite($fp, "  ].join('');\n");
fwrite($fp, "}\n");
fwrite($fp, "\n");
fwrite($fp, "var domain = \"http://www.yourdomain.com/memes/\";\n");
fwrite($fp, "\n");
fwrite($fp, "plugin.memes = [\n");
fwrite($fp, implode(",\n", $icons));
fwrite($fp, "\n];\n");
fwrite($fp, "\n");
fwrite($fp, "plugin.onMessageInsertion = function(event) {\n");
fwrite($fp, "  var element = Talker.getLastInsertion();\n");
fwrite($fp, "\n");
fwrite($fp, "  _.each(plugin.memes, function(meme) {\n");
fwrite($fp, " element.replace(meme.matcher, meme.replacementString);\n");
fwrite($fp, "  });\n");
fwrite($fp, "}\n");

fclose($fp);





?>
