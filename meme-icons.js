plugin.Meme = function(matcher, path, meaning){
  this.matcher = matcher;

  this.replacementString = [
 ' <img src="', path,
 '" class="memes" style="position:relative; top:2px" alt="', meaning,
 '" title="', meaning, '" /> '
  ].join('');

  this.tableMeme = [
 ' <img src="', path,
 '" class="memes" style="position:relative; max-width:50px; max-heigh:50px" alt="', meaning,
 '" title="', meaning, '" onClick="Talker.sendMessage(\':', meaning,
 ':\'); $.facebox.close();" /> '
  ].join('');
}

var domain = "https://github.com/osclass/talkerapp-plugins/raw/master/memes/";

plugin.memes = [
new plugin.Meme(/(^|\s):foreveraloneexcited:($|\s)/, domain + "foreveraloneexcited.png", "foreveraloneexcited"),
new plugin.Meme(/(^|\s):mouthopen:($|\s)/, domain + "mouthopen.png", "mouthopen"),
new plugin.Meme(/(^|\s):hehehe:($|\s)/, domain + "hehehe.png", "hehehe"),
new plugin.Meme(/(^|\s):concentrated:($|\s)/, domain + "concentrated.png", "concentrated"),
new plugin.Meme(/(^|\s):redeyes:($|\s)/, domain + "redeyes.png", "redeyes"),
new plugin.Meme(/(^|\s):closeenough:($|\s)/, domain + "closeenough.png", "closeenough"),
new plugin.Meme(/(^|\s):baww:($|\s)/, domain + "baww.png", "baww"),
new plugin.Meme(/(^|\s):concentrated2:($|\s)/, domain + "concentrated2.png", "concentrated2"),
new plugin.Meme(/(^|\s):conflictingemotions:($|\s)/, domain + "conflictingemotions.png", "conflictingemotions"),
new plugin.Meme(/(^|\s):axe:($|\s)/, domain + "axe.jpg", "axe"),
new plugin.Meme(/(^|\s):derrrp:($|\s)/, domain + "derrrp.png", "derrrp"),
new plugin.Meme(/(^|\s):suspicious2:($|\s)/, domain + "suspicious2.png", "suspicious2"),
new plugin.Meme(/(^|\s):horror:($|\s)/, domain + "horror.png", "horror"),
new plugin.Meme(/(^|\s):happyface:($|\s)/, domain + "happyface.png", "happyface"),
new plugin.Meme(/(^|\s):sidemouth:($|\s)/, domain + "sidemouth.png", "sidemouth"),
new plugin.Meme(/(^|\s):newspaperguy:($|\s)/, domain + "newspaperguy.png", "newspaperguy"),
new plugin.Meme(/(^|\s):heckno:($|\s)/, domain + "heckno.png", "heckno"),
new plugin.Meme(/(^|\s):awwyeah:($|\s)/, domain + "awwyeah.png", "awwyeah"),
new plugin.Meme(/(^|\s):pffftcchchchhfffttt:($|\s)/, domain + "pffftcchchchhfffttt.png", "pffftcchchchhfffttt"),
new plugin.Meme(/(^|\s):originalrage:($|\s)/, domain + "originalrage.png", "originalrage"),
new plugin.Meme(/(^|\s)f7u12($|\s)/, domain + "originalrage.png", "originalrage"),
new plugin.Meme(/(^|\s):somuchwin:($|\s)/, domain + "somuchwin.png", "somuchwin"),
new plugin.Meme(/(^|\s):ninja:($|\s)/, domain + "ninja.jpg", "ninja"),
new plugin.Meme(/(^|\s):foreveralone:($|\s)/, domain + "foreveralone.jpg", "foreveralone"),
new plugin.Meme(/(^|\s):smile2:($|\s)/, domain + "smile2.png", "smile2"),
new plugin.Meme(/(^|\s):newspaperguytear:($|\s)/, domain + "newspaperguytear.png", "newspaperguytear"),
new plugin.Meme(/(^|\s):infinitodesprecio:($|\s)/, domain + "infinitodesprecio.jpeg", "infinitodesprecio"),
new plugin.Meme(/(^|\s):femaleretarded:($|\s)/, domain + "femaleretarded.png", "femaleretarded"),
new plugin.Meme(/(^|\s):likeasir:($|\s)/, domain + "likeasir.jpg", "likeasir"),
new plugin.Meme(/(^|\s):megusta:($|\s)/, domain + "megusta.png", "megusta"),
new plugin.Meme(/(^|\s):waitaminute:($|\s)/, domain + "waitaminute.png", "waitaminute"),
new plugin.Meme(/(^|\s):no:($|\s)/, domain + "no.jpg", "no"),
new plugin.Meme(/(^|\s):asiantroll:($|\s)/, domain + "asiantroll.png", "asiantroll"),
new plugin.Meme(/(^|\s):excitedtroll:($|\s)/, domain + "excitedtroll.png", "excitedtroll"),
new plugin.Meme(/(^|\s):dudecomeon:($|\s)/, domain + "dudecomeon.png", "dudecomeon"),
new plugin.Meme(/(^|\s):biggrin:($|\s)/, domain + "biggrin.png", "biggrin"),
new plugin.Meme(/(^|\s):pukerainbows:($|\s)/, domain + "pukerainbows.jpg", "pukerainbows"),
new plugin.Meme(/(^|\s):suspicious:($|\s)/, domain + "suspicious.png", "suspicious"),
new plugin.Meme(/(^|\s):smile:($|\s)/, domain + "smile.png", "smile"),
new plugin.Meme(/(^|\s):determined:($|\s)/, domain + "determined.png", "determined"),
new plugin.Meme(/(^|\s):maximumtrolling:($|\s)/, domain + "maximumtrolling.jpg", "maximumtrolling"),
new plugin.Meme(/(^|\s):femalefuckyea:($|\s)/, domain + "femalefuckyea.png", "femalefuckyea"),
new plugin.Meme(/(^|\s):itssomething:($|\s)/, domain + "itssomething.jpg", "itssomething"),
new plugin.Meme(/(^|\s):fuckyea:($|\s)/, domain + "fuckyea.png", "fuckyea"),
new plugin.Meme(/(^|\s):cerealguy:($|\s)/, domain + "cerealguy.jpg", "cerealguy"),
new plugin.Meme(/(^|\s):melvin:($|\s)/, domain + "melvin.png", "melvin"),
new plugin.Meme(/(^|\s):mentira:($|\s)/, domain + "mentira.jpg", "mentira"),
new plugin.Meme(/(^|\s):fapfap:($|\s)/, domain + "fapfap.png", "fapfap"),
new plugin.Meme(/(^|\s):lol:($|\s)/, domain + "lol.png", "lol"),
new plugin.Meme(/(^|\s):iamdisappointed:($|\s)/, domain + "iamdisappointed.png", "iamdisappointed"),
new plugin.Meme(/(^|\s):surprised:($|\s)/, domain + "surprised.png", "surprised"),
new plugin.Meme(/(^|\s):femalemilk:($|\s)/, domain + "femalemilk.png", "femalemilk"),
new plugin.Meme(/(^|\s):whywithhands:($|\s)/, domain + "whywithhands.png", "whywithhands"),
new plugin.Meme(/(^|\s):happy:($|\s)/, domain + "happy.png", "happy"),
new plugin.Meme(/(^|\s):rageguy:($|\s)/, domain + "rageguy.jpg", "rageguy"),
new plugin.Meme(/(^|\s):originaltroll:($|\s)/, domain + "originaltroll.png", "originaltroll"),
new plugin.Meme(/(^|\s):okay:($|\s)/, domain + "okay.png", "okay"),
new plugin.Meme(/(^|\s):shocked:($|\s)/, domain + "shocked.png", "shocked"),
new plugin.Meme(/(^|\s):yuno:($|\s)/, domain + "yuno.png", "yuno"),
new plugin.Meme(/(^|\s):femalerage2:($|\s)/, domain + "femalerage2.png", "femalerage2"),
new plugin.Meme(/(^|\s):trollface:($|\s)/, domain + "trollface.jpg", "trollface"),
new plugin.Meme(/(^|\s):sadtroll:($|\s)/, domain + "sadtroll.png", "sadtroll"),
new plugin.Meme(/(^|\s):prrrr:($|\s)/, domain + "prrrr.png", "prrrr"),
new plugin.Meme(/(^|\s):challenge:($|\s)/, domain + "challenge.png", "challenge"),
new plugin.Meme(/(^|\s):ewbte2:($|\s)/, domain + "ewbte2.png", "ewbte2"),
new plugin.Meme(/(^|\s):femalefapfap:($|\s)/, domain + "femalefapfap.png", "femalefapfap"),
new plugin.Meme(/(^|\s):gtfo:($|\s)/, domain + "gtfo.png", "gtfo"),
new plugin.Meme(/(^|\s):straightface:($|\s)/, domain + "straightface.png", "straightface"),
new plugin.Meme(/(^|\s):trolldadjump:($|\s)/, domain + "trolldadjump.png", "trolldadjump"),
new plugin.Meme(/(^|\s):femalerage:($|\s)/, domain + "femalerage.png", "femalerage"),
new plugin.Meme(/(^|\s):pokerface:($|\s)/, domain + "pokerface.jpg", "pokerface"),
new plugin.Meme(/(^|\s):laughing:($|\s)/, domain + "laughing.png", "laughing"),
new plugin.Meme(/(^|\s):ayfkm:($|\s)/, domain + "ayfkm.png", "ayfkm"),
new plugin.Meme(/(^|\s):whynot:($|\s)/, domain + "whynot.jpg", "whynot"),
new plugin.Meme(/(^|\s):trolldad:($|\s)/, domain + "trolldad.jpg", "trolldad"),
new plugin.Meme(/(^|\s):ewbte:($|\s)/, domain + "ewbte.png", "ewbte"),
new plugin.Meme(/(^|\s):sweaty:($|\s)/, domain + "sweaty.png", "sweaty"),
new plugin.Meme(/(^|\s):angry:($|\s)/, domain + "angry.png", "angry"),
new plugin.Meme(/(^|\s):free:($|\s)/, domain + "free.jpg", "free"),
new plugin.Meme(/(^|\s):milk:($|\s)/, domain + "milk.png", "milk"),
new plugin.Meme(/(^|\s):thoughtful:($|\s)/, domain + "thoughtful.png", "thoughtful"),
new plugin.Meme(/(^|\s):motherofgod:($|\s)/, domain + "motherofgod.jpg", "motherofgod"),
new plugin.Meme(/(^|\s):cerealspitting:($|\s)/, domain + "cerealspitting.png", "cerealspitting"),
new plugin.Meme(/(^|\s):femalehappy:($|\s)/, domain + "femalehappy.png", "femalehappy"),
new plugin.Meme(/(^|\s):ninjahappycry:($|\s)/, domain + "ninjahappycry.png", "ninjahappycry"),
new plugin.Meme(/(^|\s):hihi:($|\s)/, domain + "hihi.png", "hihi"),
new plugin.Meme(/(^|\s):awesomehihi:($|\s)/, domain + "hihi.gif", "awesomehihi"),
new plugin.Meme(/(^|\s):ninjafu:($|\s)/, domain + "ninjafu.png", "ninjafu"),
new plugin.Meme(/(^|\s):ceralninja:($|\s)/, domain + "ceralninja.png", "ceralninja"),
new plugin.Meme(/(^|\s):ceralninjasplit:($|\s)/, domain + "ceralninjasplit.png", "ceralninjasplit")

];

plugin.onMessageInsertion = function(event) {
  var element = Talker.getLastInsertion();

  _.each(plugin.memes, function(meme) {
 element.replace(meme.matcher, meme.replacementString);
  });
}

plugin.onCommand = function (event) {
    if (event.command == "memelist") {
        Talker.getMessageBox().val('');
        
        Talker.sendMessage(":foreveraloneexcited: :mouthopen: :hehehe: :concentrated: :redeyes: :closeenough: :baww: :concentrated2: :conflictingemotions: :axe: \n:derrrp: :suspicious2: :horror: :happyface: :sidemouth: :newspaperguy: :heckno: :awwyeah: :pffftcchchchhfffttt: :originalrage: \n:somuchwin: :ninja: :foreveralone: :smile2: :newspaperguytear: :infinitodesprecio: :femaleretarded: :likeasir: :megusta: :waitaminute: \n:no: :asiantroll: :excitedtroll: :dudecomeon: :biggrin: :pukerainbows: :suspicious: :smile: :determined: :maximumtrolling: \n:femalefuckyea: :itssomething: :fuckyea: :cerealguy: :melvin: :mentira: :fapfap: :lol: :iamdisappointed: :surprised: \n:femalemilk: :whywithhands: :happy: :rageguy: :originaltroll: :okay: :shocked: :yuno: :femalerage2: :trollface: \n:sadtroll: :prrrr: :challenge: :ewbte2: :femalefapfap: :gtfo: :straightface: :trolldadjump: :femalerage: :pokerface: \n:laughing: :ayfkm: :whynot: :trolldad: :ewbte: :sweaty: :angry: :free: :milk: :thoughtful: \n:motherofgod: :cerealspitting: :femalehappy: ");
        return false;
    } else if (event.command == "memebox") {
        Talker.getMessageBox().val('');
        var html = '<div style="width:700px;">';
        for(i = 0; i<plugin.memes.length; i++){
            html = html + plugin.memes[i].tableMeme;
        }
        html = html + '</div>';
        jQuery.facebox.settings.opacity = 0.4;
        jQuery.facebox(html);
        return false;
    }
};