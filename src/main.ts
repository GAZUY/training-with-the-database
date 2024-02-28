import "./style.css"

// Проба с сервером
//========================================================================
const field = document.querySelector('.register') as HTMLDivElement
const email = document.querySelector('#email') as HTMLInputElement
const passvord = document.querySelector('#passvord') as HTMLInputElement
const faren = field.querySelector('button') as HTMLButtonElement

  faren.onclick = async function() {
    if (email.value != '' && passvord.value != ''){
      const result = await fetch('http://localhost:3000/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({email:email.value, hash: passvord.value})
      })
      const data = await result.json()
      console.log(data)
    }
  }



//========================================================================
// ПЯТНАШКИ
// ===================================================
// Обращаемся к элементам, создаем массив DIVов эаполняем через цикл id.
const reset = document.querySelector('#reset') as HTMLButtonElement
const demo = document.querySelector('#demo') as HTMLButtonElement
const tag = document.querySelector('#TAG') as HTMLDivElement
let elDiv: HTMLDivElement[] = []
for (let i = 1; i < 16; i ++){
  elDiv.push(document.createElement ('div'))
  elDiv[i-1].setAttribute('id', `D${i}`)
}
elDiv.push(document.createElement ('div'))
  elDiv[15].setAttribute('id', `D${0}`)

  let demoArr: number[] = []
  //=======================================================
  // перемешиваем массив перемещая id с элемента на элемент в случайном порядкеЭ но с условием перемещения (верхЭ низ, право, лево). заполняем родительский DIV элементами массива. Записываем ходы в массив.


function shuffleArray (indexD0:number){
  let whereToMove 
  do {
   let round = []
   if (indexD0 + 4 <= 15 && 0 <= indexD0 + 4 ) round.push(indexD0 + 4)
   if (indexD0 - 4 <= 15 && 0 <= indexD0 - 4 ) round.push(indexD0 - 4)
   if (indexD0 + 1 <= 15 && 0 <= indexD0 + 1 && indexD0 !=3 && indexD0 !=7 && indexD0 !=11) round.push(indexD0 + 1)
   if (indexD0 - 1 <= 15 && 0 <= indexD0 - 1 && indexD0 !=4 && indexD0 !=8 && indexD0 !=12) round.push(indexD0 - 1)
   whereToMove = round[Math.floor(Math.random() * round.length)]
   let atr1 = elDiv[indexD0].getAttribute('id')
        elDiv[indexD0].setAttribute('id', `${elDiv[whereToMove].getAttribute('id')}`)
        elDiv[whereToMove].setAttribute('id', `${atr1}`)
        indexD0 = whereToMove 
        demoArr.push(indexD0)   
      
  } while (indexD0 != 0);
  do {
    let round = []
    if (indexD0 + 4 <= 15 && 0 <= indexD0 + 4 ) round.push(indexD0 + 4)
    if (indexD0 - 4 <= 15 && 0 <= indexD0 - 4 ) round.push(indexD0 - 4)
    if (indexD0 + 1 <= 15 && 0 <= indexD0 + 1 && indexD0 !=3 && indexD0 !=7 && indexD0 !=11) round.push(indexD0 + 1)
    if (indexD0 - 1 <= 15 && 0 <= indexD0 - 1 && indexD0 !=4 && indexD0 !=8 && indexD0 !=12) round.push(indexD0 - 1)
    whereToMove = round[Math.floor(Math.random() * round.length)]
    let atr1 = elDiv[indexD0].getAttribute('id')
        elDiv[indexD0].setAttribute('id', `${elDiv[whereToMove].getAttribute('id')}`)
        elDiv[whereToMove].setAttribute('id', `${atr1}`)
        indexD0 = whereToMove 
        demoArr.push(indexD0)   
      
  } while (indexD0 != 15);
  demoArr.unshift(15)
}
 elDiv.map((el) => tag.appendChild(el))
 //======================================================================
//  прописываем логику игры (обмен ID). Добавляем все ходы в массив.
 


let d0 = document.querySelector('#D0') as HTMLDivElement
shuffleArray(elDiv.indexOf(d0))
console.log(elDiv.indexOf(d0))
tag.onclick = function(event){
  let target = event.target as any
    if (target.tagName == 'DIV'){
       let d0 = document.querySelector('#D0') as HTMLDivElement
       demoArr.push(elDiv.indexOf(target))
       if (elDiv.indexOf(d0) == 7 && elDiv.indexOf(target) == 8 || elDiv.indexOf(d0) == 8 && elDiv.indexOf(target) == 7 ||
       elDiv.indexOf(d0) == 3 && elDiv.indexOf(target) == 4 || elDiv.indexOf(d0) == 4 && elDiv.indexOf(target) == 3 ||
       elDiv.indexOf(d0) == 11 && elDiv.indexOf(target) == 12 || elDiv.indexOf(d0) == 12 && elDiv.indexOf(target) == 11)
       {
        
       }else{
         if (Math.max(elDiv.indexOf(d0), elDiv.indexOf(target)) - Math.min(elDiv.indexOf(d0), elDiv.indexOf(target)) == 1 || Math.max(elDiv.indexOf(d0), elDiv.indexOf(target)) - Math.min(elDiv.indexOf(d0), elDiv.indexOf(target)) == 4){
        let atr = elDiv[elDiv.indexOf(d0)].getAttribute('id')
        elDiv[elDiv.indexOf(d0)].setAttribute('id', `${elDiv[elDiv.indexOf(target)].getAttribute('id')}`)
        elDiv[elDiv.indexOf(target)].setAttribute('id', `${atr}`)
        }
       }
      
        
    }
}





// =============================================================
// demo.onclick = function(event){
//   let target = event.target as HTMLButtonElement
//   if (target){
//     let a = demoArr[demoArr.length - 1]
//   for (let i = demoArr.length - 2; i >= 0; i-- ){
//      if (demoArr[i] == demoArr[i-2]) demoArr.splice(demoArr[i-2],1)
//     (function(i) {
//     setTimeout(function() {
//     console.log ('a'+a)
//     console.log ('demoArr[i]'+demoArr[i])
//     let atr = elDiv[demoArr[i]].getAttribute('id')
//         elDiv[demoArr[i]].setAttribute('id', `${elDiv[a].getAttribute('id')}`)
//         elDiv[a].setAttribute('id', `${atr}`)
//         a = demoArr[i]
//     },  1000 + (1000 * i))
//   })(i)   
    
//   }}
// }
// console.log(demoArr)
// ========================================================================= 


const tagEl = document.querySelectorAll('#TAG DIV') as NodeListOf<Element>
      for (let i = 0; i< 16; i ++){
        if(parseInt(String(elDiv[i].getAttribute('id'))) ==  (i+1) && i == 15){
        
            tag.insertAdjacentHTML('afterbegin', `<p>ПОБЕДА</p>`) 
          }else{
            break
          
        }

      }


      function wait(ms: number) {
        return new Promise((resolve)=>{setTimeout(()=>resolve(true),ms)})
      }

      demo.onclick = async function(event){
        let target = event.target as HTMLButtonElement
        if (target) {
          for (let i =0; i < demoArr.length-1; i++){
            if (demoArr[i] == demoArr[i+2]){
              demoArr.splice(i+1,2)
            }
          }
          for (let i =0; i < demoArr.length-1; i++){
            if (demoArr[i] == demoArr[i+2]){
              demoArr.splice(i+1,2)
            }
          }
          let a = demoArr[demoArr.length - 1]
          for (let i = demoArr.length - 2; i >= 0; i-- ){      
            await wait(400) 
            let atr = elDiv[demoArr[i]].getAttribute('id')
            elDiv[demoArr[i]].setAttribute('id', `${elDiv[a].getAttribute('id')}`)
            elDiv[a].setAttribute('id', `${atr}`)
            a = demoArr[i]
            
          }
        }
      }
