var issue_tracking_project = 'https://github.com/osclass/osclass/issues/' ;

plugin.onMessageInsertion = function(event) {
    var last_insertion = Talker.getLastInsertion() ;
    var content = last_insertion.text() ;
    var match = content.match(/#([0-9]+)/) ;

    if( match ) {
        var id = match[1] ;
        content = content.replace(/#([0-9]+)/, '<a href="' + issue_tracking_project + id + '">#' + id + '</a>') ;
        last_insertion.html(content) ;
    }
}