var twitter_api = 'https://api.twitter.com/1/statuses/oembed.json' ;
var twitter_pattern = /.*?twitter\.com\/(#!)?.*?status.*?/gi ;

plugin.onMessageInsertion = function(event){
    var last_insertion = Talker.getLastInsertion() ;
    var text = last_insertion.text() ;
    if( text.match(twitter_pattern) ) {
        $.ajax({
            url: twitter_api,
            dataType: "jsonp",
            type: "GET",
            data: "url=" + text.replace('#!/', ''),
            success: function(data) {
                last_insertion.html(data.html) ;
            }
        }) ;
    }
} ;