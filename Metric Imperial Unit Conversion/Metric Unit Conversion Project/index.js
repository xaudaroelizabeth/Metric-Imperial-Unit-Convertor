/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
let convertEl = document.getElementById("convert-btn")
let lengthEl = document.getElementById ("length-el")
let volumeEl = document.getElementById ("volume-el")
let massEl = document.getElementById ("mass-el")

function round(val){
  return Math.round((val + Number.EPSILON) * 100) / 100  
}

convertEl.addEventListener("click",function(){
    
    let value = inputEl.value
    lengthEl.innerHTML = value + " Meters = " + round(value * 3.281) + " Feet " + " | " + value + " Feet = " + round(value / 3.281) + " Meters"
    
    volumeEl.innerHTML=  value + " Liters = " + round(value * 0.264) + " Gallons " + " | " + value + " Gallons = " + round(value / 0.264) + " Liters"
    
    massEl.innerHTML = value + " Kilo = " + round(value * 2.204) + " Pounds " + " | " + 
    value + " Pounds = " + round(value / 2.204) + " Kilo"
    
})