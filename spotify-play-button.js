var spotify_pattern_http = /open\.spotify\.com\/track\/(.*)/gi ;
var spotify_pattern_uri = /spotify:track:(.*)/gi ;

plugin.onMessageInsertion = function(event){
    var last_insertion = Talker.getLastInsertion() ;
    var text = last_insertion.text();
    if( text.match(spotify_pattern_http) ) {
        var spotify_uri = text.replace(/.*track\//, '') ;
        var iframe = '<iframe src="https://embed.spotify.com/?uri=spotify:track:' + spotify_uri + '" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>' ;
        last_insertion.html(iframe) ;
    }
    if( text.match(spotify_pattern_uri) ) {
        var spotify_uri = text.replace(/.*spotify:track:/, '') ;
        var iframe = '<iframe src="https://embed.spotify.com/?uri=spotify:track:' + spotify_uri + '" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>' ;
        last_insertion.html(iframe) ;
    }
} ;