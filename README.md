# Talkerapp plugins

## Twitter oEmbed

Convert from a twitter status url to embedded representation of the tweet. Url example:

```
https://twitter.com/#!/osclass/status/176741384466866176
```

## Github issues permalinks

Convert #{number} text to a link of the correspondent issue in github. 

### How to change the url of the issue tracking project

Modify the following variable in *github-issues-permalinks.js* file:

```js
var issue_tracking_project = 'https://github.com/osclass/osclass/issues/' ;
```


## Meme icons

Convert :shortname: text to an icon of correspondent meme.

### Set-up

Upload *memes* folder to your domain.

Modify the following variable in *meme-icons.js* file:

```js
var domain = "http://www.yourdomain.com/memes/";
```

### Complete list of shortnames
:likeasir:
:suspicious:
:whynot:
:pokerface:
:awwyeah:
:angry:
:cerealguy:
:cerealspitting:
:concentrated:
:closeenough:
:determined:
:ewbte:
:foreveralone:
:fuckyea:
:gtfo:
:heckno:
:free:
:lol:
:megusta:
:mentira:
:no:
:okay:
:yuno:
:trollface:
:rageguy:
