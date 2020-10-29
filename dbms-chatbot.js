var frame = document.getElementById("frame")
    var input = document.getElementById("input")
    var botside = document.getElementById("botside")
    var userside = document.getElementById("userside")
    var msgno=0
    var guess=0
    var name

    function takeinput(){
            frame.innerHTML += userside.outerHTML
            msgno += 1
            frame.lastChild.id = msgno
            frame.lastChild.childNodes[1].textContent = input.value
            processinput(input.value)   
    }

    function inguess(){
        if(event.keyCode == 13){
        frame.innerHTML += userside.outerHTML
            msgno += 1
            frame.lastChild.id = msgno
            frame.lastChild.childNodes[1].textContent = input.value
            guess=input.value
        }   
    }

    function processinput(inputval){
        if(inputval != ""){
            if(inputval >= 1 && inputval <= 10){
                reply(inputval)
            }
            else{
                frame.innerHTML += botside.outerHTML;
                input.value = null;
                msgno += 1;
                frame.lastChild.id = msgno;
                reply(inputval)
            }
        }
    } 

   function reply(inputval){
       if(msgno == 2){
           frame.lastChild.childNodes[1].textContent = "Nice to meet you, " + inputval
           name = inputval
           frame.innerHTML += botside.outerHTML;
           input.value = null;
           msgno += 1;
           frame.lastChild.id = msgno;
           frame.lastChild.childNodes[1].textContent = "What do you wish to know/do? (Weather / Current Date and Time / Covid Situation / Guess a number / Tell a joke / Play quiz to get a discount)"
        }

        else if(inputval.includes("weather") || inputval.includes("WEATHER") || inputval.includes("Weather")){
        frame.lastChild.childNodes[1].textContent = "weather"
        }

        else if(inputval.includes("DATE") || inputval.includes("Date") || inputval.includes("date") || inputval.includes("Time") || inputval.includes("TIME") || inputval.includes("time")){
            var currentdate = new Date(); 
            var datetime = "Current date and time is: " + currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + " - "  + currentdate.getHours() + ":"  + currentdate.getMinutes() + ":" + currentdate.getSeconds() + " HRS";
        frame.lastChild.childNodes[1].textContent = datetime
        }

        else if(inputval.includes("covid") || inputval.includes("COVID") || inputval.includes("Covid") || inputval.includes("Corona") || inputval.includes("CORONA") || inputval.includes("corona")){
        frame.lastChild.childNodes[1].textContent = "covid"
        }

        else if(inputval.includes("guess") || inputval.includes("Guess") || inputval.includes("GUESS") || inputval.includes("Number") || inputval.includes("number")){
        frame.lastChild.childNodes[1].textContent = "Enter your guess for a number between 1-10"
        }

        else if(inputval >= 1 && inputval <= 10){
            var x=Math.floor(Math.random() * 10) + 1
            if(x==inputval){
                frame.innerHTML += botside.outerHTML;
                input.value = null;
                msgno += 1;
                frame.lastChild.id = msgno;
                frame.lastChild.childNodes[1].textContent = "Congrats you guessed the correct number!"
                }
            else{
                frame.innerHTML += botside.outerHTML;
                input.value = null;
                msgno += 1;
                frame.lastChild.id = msgno;
                frame.lastChild.childNodes[1].textContent = "Sorry but you guessed the wrong one :( The correct ans was: " + x
                }
            }

        else if(inputval.includes("joke") || inputval.includes("JOKE") || inputval.includes("Joke") || inputval.includes("Tell") || inputval.includes("tell")){
            const jokes = [
                "What rock group has four men that don't sing? Mount Rushmore.",
                "When I was a kid, my mother told me I could be anyone I wanted to be. Turns out, identity theft is a crime.",
                "What do sprinters eat before a race? Nothing, they fast!",
                "What concert costs just 45 cents? 50 Cent featuring Nickelback!",
                "What do you call a mac 'n' cheese that gets all up in your face? Too close for comfort food!",
                "Why couldn't the bicycle stand up by itself? It was two tired!",
                "Did you hear about the restaurant on the moon? Great food, no atmosphere!",
                "How many apples grow on a tree? All of them!",
                "Did you hear the rumor about butter? Well, I'm not going to spread it!",
                "I like telling Dad jokes. Sometimes he laughs!",
                "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!"
            ]
            let randomNumber = Math.floor(Math.random() * (jokes.length))
        frame.lastChild.childNodes[1].textContent = jokes[randomNumber]
        }

        else if(inputval.includes("hello") || inputval.includes("hey") || inputval.includes("hi") || inputval.includes("Hello") || inputval.includes("Hey") || inputval.includes("Hi")){
            frame.lastChild.childNodes[1].textContent = "Hey there, " + name
        }

        else if(inputval.includes("how") || inputval.includes("How") || inputval.includes("HOW")){
            frame.lastChild.childNodes[1].textContent = "I am doing fine, wby?"
        }

        else if(inputval.includes("quiz") || inputval.includes("QUIZ") || inputval.includes("Quiz") || inputval.includes("discount") || inputval.includes("Discount") || inputval.includes("DISCOUNT")){
        const ques=[
            "Which of these beaches is not in Goa? a) Anjuna b) Kovalam c) Calangute d) Baga. Please enter the correct ans (a/b/c/d)",
            "Where are the Jura Mountains located? a) Japan b) Switzerland c) Germany d) Russia. Please enter the correct ans (a/b/c/d)",
            "Which country is the biggest livestock-raiser in South America? a) Peru b) Argentina c) Chile d) Brazil"
        ]
        let randomNumber = Math.floor(Math.random() * (ques.length))
        var ans = prompt(ques[randomNumber])
        if(ans == 'b'){
            frame.lastChild.childNodes[1].textContent = "That was the correct ans! :) You've won a discount of 10%. Your coupon code is: QGT67XOP (this coupon is only valid till 20-11-2020)"
        }
        else{
            frame.lastChild.childNodes[1].textContent = "Sorry, but tha was the wrong ans :("
        }
        }

        else{
            frame.lastChild.childNodes[1].textContent = "Sorry, but I dont understand that"
        }
    }