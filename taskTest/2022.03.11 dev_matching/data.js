const API = 'https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=';
const input = getDOM('input');
const suggestion  = getDOM(".Suggestion");
let selectSuggestion = 0;
let selectedLanguage = [];