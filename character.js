var NameQuery = ""
var activePage = 1
window.onload=function(){
   var searchBar = document.querySelector('.search-container')
   searchBar.addEventListener('keyup',debouncer(1000,getSingleChar))
//    searchBar.addEventListener('dblclick',handleGet)
}

function debouncer(delay,callback){
   var debounce;
   return function(){
      NameQuery = event.target.value
      debounce && clearTimeout(debounce)
      debounce = setTimeout(function(){
         activePage = 1
         console.log(NameQuery)
         callback(NameQuery)
      },delay)
   }
}

function getSingleChar(NameQuery){
  
    var url;
    if(NameQuery=="Alive" || NameQuery=="Dead" || NameQuery=="Unknown"){
        url = "https://rickandmortyapi.com/api/character/?status=" + NameQuery
    }
    else if(NameQuery=="Show All"){
      url = "https://rickandmortyapi.com/api/character/" 
    }
    else if(NameQuery=="Female" || NameQuery=="Male" || NameQuery=="Genderless" || NameQuery=="Unknown"){
      url = "https://rickandmortyapi.com/api/character/?gender=" + NameQuery 
    }
    else if(NameQuery=="Human" || NameQuery=="Alien" ){
      url = "https://rickandmortyapi.com/api/character/?species=" + NameQuery 
    }
    else{
        url = "https://rickandmortyapi.com/api/character/?name=" + NameQuery
    }


   var xhr = new XMLHttpRequest()
   xhr.open('GET', url )
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
      genderPara.textContent = items[i].gender 

      cardBody.append(namePara,DatePara,genderPara)
      cardRow.append(cardCol,cardBody)
      card.append(cardRow)
      displayResult.append(card)     

   }
}