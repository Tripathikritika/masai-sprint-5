window.addEventListener('load',function(){
    handleGet()
})

function handleGet(){
   var xhr = new XMLHttpRequest()
   xhr.open('GET', 'https://rickandmortyapi.com/api/episode/')
   xhr.send()
   xhr.onload = function(){
      if(xhr.status === 200){
         var res = JSON.parse(xhr.response)
         console.log(res)
         getCharacter(res)
        
      }
      else{
         var div = document.createElement('div')
         div.textContent = "The Request has Failed. Please Try again Later!!"
      }
   }

}

function getCharacter(data){
   var items  = data.results 
   var displayResult = document.getElementById('res')
   displayResult.textContent = ""
   for(var i = 0 ; i < items.length ; i++){
      var card = document.createElement('div')
      card.setAttribute('class','card')

      var cardBody = document.createElement('div')
      cardBody.setAttribute('class','card-body')

      var namePara = document.createElement('p')
      namePara.textContent = "Name:"+items[i].name

      var DatePara = document.createElement('p')
      DatePara.textContent = "Air Date:"+items[i].air_date

      var episodeNumPara = document.createElement('p')
      episodeNumPara.textContent = "Episode:"+items[i].episode

      var episodeCharPara = document.createElement('p')
      episodeCharPara.textContent = "EpisodeCharacter:"+items[i].characters

      var episodeUrlPara = document.createElement('p')
      episodeUrlPara.textContent = "EpisodeURL:"+items[i].url

      cardBody.append(namePara,DatePara,episodeNumPara,episodeCharPara,episodeUrlPara)
      card.append(cardBody)
      displayResult.append(card)     

   }
}