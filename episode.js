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
   for(var i = 0 ; i < items.length ; i++){
      console.log("Name:"+items[i].name) 
      console.log("Air Date:"+items[i].air_date)
      console.log("Episode:"+items[i].episode)
      console.log("EpisodeCharacter:"+items[i].characters)
      console.log("EpisodeURL:"+items[i].url)
      

   }
}