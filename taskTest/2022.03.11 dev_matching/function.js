function getDOM(className) {
  return document.querySelector(className);
}

async function httpGetAsync(URL) {
  const response = await fetch(URL);
  const data = await response.json()
  if(response.ok){
    addSuggestion(data);
  }else{
    console.error(new Error(response.status));
  }
}
function clearSuggestion(){
  const suggestionList = getDOM('.Suggestion  ul')
  suggestion.setAttribute('style','display : none')
  suggestionList.innerHTML ="";
}
function addSuggestion(data){
  clearSuggestion();
  const suggestionList = getDOM('.Suggestion  ul')
  if(data.length > 0){
    suggestion.setAttribute('style','display : unset')
    for( i of data){
      let li = document.createElement('li');
      li.innerHTML=li.innerHTML + i;
      suggestionList.appendChild(li);
    }
    selectSuggestionByNum(0)
  }else{
    clearSuggestion();
  }
}
function getSuggestListSize(){
  const suggestionList = getDOM('.Suggestion  ul');
  return suggestionList.children.length;
}
function clearSelectedLanguage(){
  const selectedLanguageList = getDOM('.SelectedLanguage ul');
  selectedLanguageList.innerHTML = "";
}
function selectSuggestionByNum(num){
  const suggestionList = getDOM('.Suggestion  ul')
  for ( i in suggestionList.children){
    let node = suggestionList.children[i]
    if(num == i){
      node.setAttribute('class','Suggestion__item--selected')
    }else{
      if( node.classList ) node.classList.remove('Suggestion__item--selected');
    }
  }
}
function selectSuggetionDataByNum(num){
  const suggestionList = getDOM('.Suggestion  ul')
  for ( i in suggestionList.children){
    let node = suggestionList.children[i]
    if(num == i){
      return node.innerText;
    }
  }
}
function addSelectedLanguage(data){
  const selectedLanguageList = getDOM('.SelectedLanguage ul');
  let isExist = selectedLanguage.indexOf(data) > -1
  if(!isExist) {
    selectedLanguage.push(data);
  }
  selectedLanguageList.innerHTML = '<ul></ul>'
  for( i of selectedLanguage){
    let li = document.createElement('li');
    li.innerHTML=li.innerHTML + i;
    selectedLanguageList.appendChild(li);
  }
}
function init(){
  clearSuggestion();
  clearSelectedLanguage();
}