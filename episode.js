// var query = ''
window.onload=function(){
   handleGet()
   var searchBar = document.querySelector('.search-container')
   searchBar.addEventListener('keyup',debouncer(0,getSingelEpisode))
   searchBar.addEventListener('keydown',debouncer(0,getEpisodeByName))
   searchBar.addEventListener('load',handleGet)

}

function debouncer(delay,callback){
   var debounce;
   return function(){
      query = event.target.value
      debounce && clearTimeout(debounce)
      debounce = setTimeout(function(){
         activePage = 1
         callback(query)
      },delay)
   }
}

function handleGet(){
   var xhr = new XMLHttpRequest()
   xhr.open('GET', 'https://rickandmortyapi.com/api/episode/')
   xhr.send()
   xhr.onload = function(){
      if(xhr.status === 200){
         var res = JSON.parse(xhr.response)
         console.log(res)
         getEpisode(res)
        
      }
      else{
         var div = document.createElement('div')
         div.textContent = "The Request has Failed. Please Try again Later!!"
      }
   }

}

function getEpisode(data){
   var items  = data.results 
   var displayResult = document.getElementById('res')
   displayResult.setAttribute('class','row')
   displayResult.textContent = ""

   for(var i = 0 ; i < items.length ; i++){
      var card = document.createElement('div')
      card.setAttribute('class','card col-lg-3')

      var cardBody = document.createElement('div')
      cardBody.setAttribute('class','card-body')

      var namePara = document.createElement('p')
      namePara.textContent = "Name: "+items[i].name

      var DatePara = document.createElement('p')
      DatePara.textContent = "Air Date: "+items[i].air_date

      var episodeNumPara = document.createElement('p')
      episodeNumPara.textContent = "Episode: "+items[i].episode

      var episodeUrlPara = document.createElement('a')
      episodeUrlPara.setAttribute('class','card-link')
      episodeUrlPara.innerHTML = "EpisodeURL: " + "<a href= "+">" + items[i].url+ "</a>"

      cardBody.append(namePara,DatePara,episodeNumPara,episodeUrlPara)
      card.append(cardBody)
      displayResult.append(card)     

   }
}
function getSingelEpisode(){
   var xhr = new XMLHttpRequest()
   xhr.open('GET', 'https://rickandmortyapi.com/api/episode/?episode='+query)
   xhr.send()
   xhr.onload = function(){
      if(xhr.status === 200){
         var res = JSON.parse(xhr.response)
         console.log(res)
         singleEpisode(res)
        
      }
      else{
         var div = document.createElement('div')
         div.textContent = "The Request has Failed. Please Try again Later!!"
      }
   }

}

function singleEpisode(data){
   var items  = data.results 
   var displayResult = document.getElementById('res')
   displayResult.textContent = ""

   for(var i = 0 ; i < items.length ; i++){
      var card = document.createElement('div')
      card.setAttribute('class','card m-3 col-lg-6')

      var cardBody = document.createElement('div')
      cardBody.setAttribute('class','card-body')

      var namePara = document.createElement('p')
      namePara.textContent = "Name: "+items[i].name

      var DatePara = document.createElement('p')
      DatePara.textContent = "Air Date: "+items[i].air_date

      var episodeNumPara = document.createElement('p')
      episodeNumPara.textContent = "Episode: "+items[i].episode

      var episodeUrlPara = document.createElement('a')
      episodeUrlPara.setAttribute('class','card-link')
      episodeUrlPara.innerHTML = "EpisodeURL: " + "<a href= "+">" + items[i].url+ "</a>"

      cardBody.append(namePara,DatePara,episodeNumPara,episodeUrlPara)
      card.append(cardBody)
      displayResult.append(card)     

   }
}

function getEpisodeByName(){
   var xhr = new XMLHttpRequest()
   xhr.open('GET', 'https://rickandmortyapi.com/api/episode/?name='+query)
   xhr.send()
   xhr.onload = function(){
      if(xhr.status === 200){
         var res = JSON.parse(xhr.response)
         console.log(res)
         nameEpisode(res)
        
      }
      else{
         var div = document.createElement('div')
         div.textContent = "The Request has Failed. Please Try again Later!!"
      }
   }
}
function nameEpisode(data){
   var items  = data.results 
   var displayResult = document.getElementById('res')
   displayResult.textContent = ""

   for(var i = 0 ; i < items.length ; i++){
      var card = document.createElement('div')
      card.setAttribute('class','card m-3 col-lg-6')

      var cardBody = document.createElement('div')
      cardBody.setAttribute('class','card-body')

      var namePara = document.createElement('p')
      namePara.textContent = "Name: "+items[i].name

      var DatePara = document.createElement('p')
      DatePara.textContent = "Air Date: "+items[i].air_date

      var episodeNumPara = document.createElement('p')
      episodeNumPara.textContent = "Episode: "+items[i].episode

      var episodeUrlPara = document.createElement('a')
      episodeUrlPara.setAttribute('class','card-link')
      episodeUrlPara.innerHTML = "EpisodeURL: " + "<a href= "+">" + items[i].url+ "</a>"

      cardBody.append(namePara,DatePara,episodeNumPara,episodeUrlPara)
      card.append(cardBody)
      displayResult.append(card)     

   }
}