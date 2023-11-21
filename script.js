let statistika_js=document.querySelector('.statistika') 
let question_js=document.querySelector('.question') 
let question1 = document.querySelector('.question') // берем данные из  HTML для окна вопроса
let answer0 = document.querySelectorAll('.answer') //берем данные из HTML для окна вопроса
let start_cont= document.querySelector('.start')//берем данные из html контейнер со статистикой
let btn= document.querySelector('.start_btn')//берем данные из html контейнер со статистикой
let main=document.querySelector('.bolshoy')



function randint(min,max){ // функция рандомного вопроса
    return Math.round(Math.random()*(max-min)+min)
}
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) { // Цикл повторяется до тех пор, пока остаются элементы для перемешивания
    randomIndex = Math.floor(Math.random() * currentIndex); // Выбираем оставшийся элемент.
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [    // Меняем местами с текущим элементом.
      array[randomIndex], array[currentIndex]];
  }
  return array; // Возвращаем перемешанный массив
}

let signs =['+','-','*','/'] // масив знаков
function randomSign(){ // функция рандома знака
         return signs[randint(0,3)]
}
class Question{// класс для вопросов "инструкция"
    constructor(){
        let a = randint(1, 30)
        let b = randint(1, 30)
        let sign = randomSign()
        this.question = `${a} ${sign} ${b}`
        if(sign=='+') {this.correct = a + b}
        else if(sign=='-') {this.correct = a - b}
        else if(sign=='*') {this.correct = a * b}
        else if(sign=='/') {this.correct = a / b}

        
        this.answers=[
        randint(this.correct - 15, this.correct - 1),
        randint(this.correct - 15, this.correct - 1),
        this.correct,
        randint(this.correct + 1, this.correct + 15),
        randint(this.correct + 1, this.correct + 15),
         ]
    shuffle (this.answers)
        }
                
    display() { // отображаем класс на экране
        question1.innerHTML=this.question
        for (let i=0; i< this.answers.length; i+=1)
        {
           answer0[i].innerHTML=this.answers[i]
        }
      }
        } 
        main.style.display='none'
       start_cont.style.display='flex'
       let counter_correct  // счетчик правильных ответов
    let counter  // счетчик вопросов
    let current_quetion // текущий вопрос



     btn.addEventListener('click', function(){
     main.style.display='flex'
     start_cont.style.display='none'
    
    counter_correct= 0 // счетчик правильных ответов
    counter= 0 // счетчик вопросов
    current_quetion= new Question()// текущий вопрос

   
     current_quetion.display()//отобразить вопрос текущий
    
     setTimeout(function(){
       main.style.display='none'
       start_cont.style.display='flex'
                statistika_js.innerHTML= 
     `Вы дали ${counter_correct} правильных ответов из ${counter}.
      Точность - ${Math.round(counter_correct*100/counter)}% `},10000)
})

     for(let i = 0;i<answer0.length; i+=1){ // проверим клик на кнопки ответов
         answer0[i].addEventListener('click', function() {
     
    if(answer0[i].innerHTML==current_quetion.correct){
       console.log("Правильно")
       answer0[i].style.background='green'
       setTimeout(()=>{answer0[i].style.background= 'white'},200)
      counter_correct+=1
    

    }
       
    else{
       console.log("Неправильно")
        answer0[i].style.background='red'
        setTimeout(()=>{answer0[i].style.background= 'white'},200)
     
    }
    counter+=1 // изменение счетчика
    current_quetion=new Question() // создание нового вопроса
    current_quetion.display() // отобразить новый вопрос
    })
     
    }
    
     
     
