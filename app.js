"use strict"
let form = document.getElementById('form')
let table=document.getElementById('table')

let bookArr=[];


function Book (name , price ){
    this.name =name ;
    this.price=price;
    bookArr.push(this);
    this.randomArr=[];
    // saveToLs();
    

}


Book.prototype.random=function(){
    this.randomArr.push(Math.floor(Math.random()*(500-1+1)+1))
}

form.addEventListener('submit',handleSubmit)
function handleSubmit (event){
    event.preventDefault();
    const newName = event.target.name.value;
    const newprice = event.target.price.value;
    const int = new Book (newName ,newprice);
    int.random();
    saveToLs();
    int.render();

    // randomArr.random();

}

Book.prototype.render=function(){
    table.textContent=""
    for (let i = 0; i < bookArr.length; i++) {
        let trEl = document.createElement('tr')
        table.appendChild(trEl)
        let nametdEl =document.createElement('td')
        trEl.appendChild(nametdEl)
        nametdEl.textContent=this.name
        let priceTd =document.createElement('td')
        trEl.appendChild(priceTd)
        priceTd.textContent=this.price
        let pageTd =document.createElement('td')
        trEl.appendChild(pageTd)
        pageTd.textContent=this.randomArr
        
        
   
   
    }
    }

    function saveToLs(){
        const coverted =JSON.stringify(bookArr);
        localStorage.setItem('book','coverted');
    }
    function getFromLs(){
        const data =localStorage.getItem('book');
        const parsed =JSON.parse(data);
        if (parsed !== null){
            for (let i = 0; i < parsed.length; i++) {
                let reInt =new Book (parsed[i].name,parsed[i].price)
                reInt.render();
                randomArr.random();
                
            }
        }
    }
    getFromLs();