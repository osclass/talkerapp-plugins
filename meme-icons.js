plugin.Meme = function(matcher, path, meaning){
  this.matcher = matcher;

  this.replacementString = [
 ' <img src="', path, 
 '" class="memes" style="position:relative; top:2px" alt="', meaning, 
 '" title="', meaning, '" /> '
  ].join('');
}

var domain = "http://www.yourdomain.com/memes/";

plugin.memes = [
  new plugin.Meme(/(^|\s):likeasir:($|\s)/, domain + "86feel_like_a_sir.jpg", "likeasir"),
  new plugin.Meme(/(^|\s):suspicious:($|\s)/, domain + "180px-That_suspicious.PNG", "suspicious"),
  new plugin.Meme(/(^|\s):whynot:($|\s)/, domain + "180px-Why_not.jpg", "whynot"),
  new plugin.Meme(/(^|\s):pokerface:($|\s)/, domain + "1279052383758.jpg", "pokerface"),
  new plugin.Meme(/(^|\s):awwyeah:($|\s)/, domain + "AwwYeah.png", "awwyeah"),
  new plugin.Meme(/(^|\s):angry:($|\s)/, domain + "Angry.png", "angry"),
  new plugin.Meme(/(^|\s):cerealguy:($|\s)/, domain + "CerealGuy.png", "cerealguy"),
  new plugin.Meme(/(^|\s):cerealspitting:($|\s)/, domain + "CerealSpitting.png", "cerealspitting"),
  new plugin.Meme(/(^|\s):concentrated:($|\s)/, domain + "Concentrated2.png", "concentrated"),
  new plugin.Meme(/(^|\s):closeenough:($|\s)/, domain + "CloseEnough.png", "closeenough"),
  new plugin.Meme(/(^|\s):determined:($|\s)/, domain + "Determined.png", "determined"),
  new plugin.Meme(/(^|\s):ewbte:($|\s)/, domain + "EWBTE2.png", "ewbte"),
  new plugin.Meme(/(^|\s):foreveralone:($|\s)/, domain + "ForeverAlone.png", "foreveralone"),
  new plugin.Meme(/(^|\s):fuckyea:($|\s)/, domain + "FuckYea.png", "fuckyea"),
  new plugin.Meme(/(^|\s):gtfo:($|\s)/, domain + "GTFO.png", "gtfo"),
  new plugin.Meme(/(^|\s):heckno:($|\s)/, domain + "HeckNo.png", "heckno"),
  new plugin.Meme(/(^|\s):free:($|\s)/, domain + "Its-free.jpg", "free"),
  new plugin.Meme(/(^|\s):lol:($|\s)/, domain + "LOL.png", "lol"),
  new plugin.Meme(/(^|\s):megusta:($|\s)/, domain + "MeGusta.png", "megusta"),
  new plugin.Meme(/(^|\s):mentira:($|\s)/, domain + "mentira-meme.jpg", "mentira"),
  new plugin.Meme(/(^|\s):no:($|\s)/, domain + "NO!.jpg", "no"),
  new plugin.Meme(/(^|\s):okay:($|\s)/, domain + "Okay.png", "okay"),
  new plugin.Meme(/(^|\s):yuno:($|\s)/, domain + "YUNO.png", "yuno"),
  new plugin.Meme(/(^|\s):trollface:($|\s)/, domain + "troll-face.jpg", "trollface"),
  new plugin.Meme(/(^|\s):rageguy:($|\s)/, domain + "RageGuy.jpg", "rageguy")
];

plugin.onMessageInsertion = function(event) {
  var element = Talker.getLastInsertion();

  _.each(plugin.memes, function(meme) {
 element.replace(meme.matcher, meme.replacementString);
  });
}

