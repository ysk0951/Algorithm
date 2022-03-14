document.addEventListener("DOMContentLoaded", () => {
  //init
  init();

  //addEvent
  input.addEventListener('input', function (v) {
    let word = v.currentTarget.value;
    if(word.length > 0){
      httpGetAsync(API + word);
    }else{
      clearSuggestion()
    }
  })
  window.addEventListener('keydown' , function(v){
    let size = getSuggestListSize();
    if(size == 0){
      selectSuggestion = 0;
    }else if(size > 0 && v.code == 'ArrowDown'){
      selectSuggestion = (selectSuggestion + 1) % size ;
      selectSuggestionByNum(selectSuggestion)
    }else if(size > 0 && v.code == 'ArrowUp'){
      selectSuggestion = (selectSuggestion - 1) % size ;
      if(selectSuggestion < 0) selectSuggestion =+ size-1 ;
      selectSuggestionByNum(selectSuggestion)
    }
    if(size !==0 && (v.code == 'Enter' || v.code =='NumpadEnter')){
      var data = selectSuggetionDataByNum(selectSuggestion);
      this.alert(data);
      addSelectedLanguage(data);
    }
  })
});
