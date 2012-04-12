<?php 


$icons = array();
$memelist = '';
$sep = 0;

if ($handler = opendir('memes')) {
    while (false !== ($file = readdir($handler))) {
        if ($file != "." && $file != "..") {
			$name = preg_replace('|\.([a-zA-Z]{3,4})|', '', $file);
            $icons[] = 'new plugin.Meme(/(^|\s):'.$name.':($|\s)/, domain + "'.$file.'", "'.$name.'")';
			$memelist .= ":".$name.": ";
			$sep++;
			if($sep>=10) {
				$sep = 0;
				$memelist .= "\\n";
			}
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
fwrite($fp, "var domain = \"https://github.com/osclass/talkerapp-plugins/raw/master/memes/\";\n");
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

fwrite($fp, "\n");
fwrite($fp, "plugin.onCommand = function (event) {\n");
fwrite($fp, "    if (event.command == \"memelist\") {\n");
fwrite($fp, "        Talker.getMessageBox().val('');\n");
fwrite($fp, "        Talker.sendMessage(\"".$memelist."\");\n");
fwrite($fp, "        return false;\n");
fwrite($fp, "    }\n");
fwrite($fp, "};\n");


fclose($fp);





?>
