var query = ""
var activePage = 1
window.onload=function(){
   var searchBar = document.querySelector('.search-container')
   searchBar.addEventListener('keyup',debouncer(1000,getSingleChar))
   searchBar.addEventListener('dblclick',handleGet)
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
   xhr.open('GET', 'https://rickandmortyapi.com/api/character/' )
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
      card.setAttribute('class','card col-lg-6')

      var cardRow = document.createElement('div')
      cardRow.setAttribute('class','row no-gutters')

      var cardCol = document.createElement('div')
      cardCol.setAttribute('class','col-md-4 p-3')
      var  img = document.createElement('img')
      img.setAttribute('src',items[i].image)
      img.setAttribute('class','card-img img-fluid')
      
      cardCol.append(img)

      var cardBody = document.createElement('div')
      cardBody.setAttribute('class','card-body col-md-8')

      var namePara = document.createElement('p')
      namePara.textContent = items[i].name
      namePara.style.fontWeight = 'bold'

      var DatePara = document.createElement('p')
      DatePara.textContent = items[i].status  +"\n"+ "-"+"\n" +  items[i].species

      
      var genderPara = document.createElement('p')
      genderPara.textContent =  items[i].gender

      cardBody.append(namePara,DatePara,genderPara)
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
      card.setAttribute('class','card pl-5 col-lg-6 ')

      var cardRow = document.createElement('div')
      cardRow.setAttribute('class','row no-gutters')

      var cardCol = document.createElement('div')
      cardCol.setAttribute('class','col-md-4  p-3')
      var  img = document.createElement('img')
      img.setAttribute('src',items[i].image)
      img.setAttribute('class','card-img')
      
      cardCol.append(img)

      var cardBody = document.createElement('div')
      cardBody.setAttribute('class','card-body col-md-8')

      var namePara = document.createElement('p')
      namePara.textContent = items[i].name

      var DatePara = document.createElement('p')
      DatePara.textContent = items[i].status  +"\n"+ "-"+"\n" +  items[i].species

      var genderPara = document.createElement('p')
      genderPara.textContent = items[i].status

      cardBody.append(namePara,DatePara,genderPara)
      cardRow.append(cardCol,cardBody)
      card.append(cardRow)
      displayResult.append(card)     

   }
}
