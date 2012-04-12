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
Use the command */memelist* to retrieve the full list of shortnames available

