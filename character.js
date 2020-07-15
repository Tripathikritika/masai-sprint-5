var query = ""
var queryTwo = ""
var activePage = 1
window.onload=function(){
   var searchBar = document.querySelector('.search-container')
   searchBar.addEventListener('keyup',debouncer(1000,getSingleChar))
   handleGet()
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
    //alert("pop")
   var xhr = new XMLHttpRequest()
   xhr.open('GET', 'https://rickandmortyapi.com/api/character/?name='+query )
   xhr.send()
   xhr.onload = function(){
      if(xhr.status === 200){
         var res = JSON.parse(xhr.response)
         console.log(res)
         AllCharacter(res)
        
      }
      else{
         var div = document.createElement('div')
         div.textContent = "The Request has Failed. Please Try again Later!!"
      }
   }

}

function AllCharacter(data){
   var items  = data.results
   var displayResult = document.getElementById('charResult')
   displayResult.setAttribute('class','row')
   displayResult.textContent = ""

   for(var i = 0 ; i < items.length ; i++){
      var card = document.createElement('div')
      card.setAttribute('class','card m-2 pl-2 col-lg-5')

      var cardRow = document.createElement('div')
      cardRow.setAttribute('class','row no-gutters')

      var cardCol = document.createElement('div')
      cardCol.setAttribute('class','col-md-4')
      var  img = document.createElement('img')
      img.setAttribute('src',items[i].image)
      img.setAttribute('class','card-img')
      
      cardCol.append(img)

      var cardBody = document.createElement('div')
      cardBody.setAttribute('class','card-body col-md-8')

      var namePara = document.createElement('p')
      namePara.textContent = "Name: "+items[i].name

      var DatePara = document.createElement('p')
      DatePara.textContent = "Gender: "+items[i].gender

      var statusPara = document.createElement('p')
      statusPara.textContent = "Status: "+items[i].status

      var speciesPara = document.createElement('p')
      speciesPara.textContent = "Species: "+items[i].species

      cardBody.append(namePara,DatePara,statusPara,speciesPara)
      cardRow.append(cardCol,cardBody)
      card.append(cardRow)
      displayResult.append(card)     

   }
}

function getSingleChar(){
   var xhr = new XMLHttpRequest()
   xhr.open('GET', 'https://rickandmortyapi.com/api/character/?name='+ query)
   xhr.send()
   xhr.onload = function(){
      if(xhr.status === 200){
         var res = JSON.parse(xhr.response)
         console.log(res)
         displaySingleChar(res)
        
      }
      else{
         var div = document.createElement('div')
         div.textContent = "The Request has Failed. Please Try again Later!!"
      }
   }
}

function displaySingleChar(data){
   var items  = data.results
   var displayResult = document.getElementById('charResult')
   displayResult.setAttribute('class','row')
   displayResult.textContent = ""

   for(var i = 0 ; i < items.length ; i++){
      var card = document.createElement('div')
      card.setAttribute('class','card m-2 pl-2 col-lg-5')

      var cardRow = document.createElement('div')
      cardRow.setAttribute('class','row no-gutters')

      var cardCol = document.createElement('div')
      cardCol.setAttribute('class','col-md-4')
      var  img = document.createElement('img')
      img.setAttribute('src',items[i].image)
      img.setAttribute('class','card-img')
      
      cardCol.append(img)

      var cardBody = document.createElement('div')
      cardBody.setAttribute('class','card-body col-md-8')

      var namePara = document.createElement('p')
      namePara.textContent = "Name: "+items[i].name

      var DatePara = document.createElement('p')
      DatePara.textContent = "Gender: "+items[i].gender

      var statusPara = document.createElement('p')
      statusPara.textContent = "Status: "+items[i].status

      var speciesPara = document.createElement('p')
      speciesPara.textContent = "Species: "+items[i].species

      cardBody.append(namePara,DatePara,statusPara,speciesPara)
      cardRow.append(cardCol,cardBody)
      card.append(cardRow)
      displayResult.append(card)     

   }
}