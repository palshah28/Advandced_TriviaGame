var counter = 15;
var id=0;
var questions=["What is the name of the brightest planet in solar system ?","What is the name of the red planet ?", "What is the biggest planet in solar system ?", "what is the name of planet closest to sun ?"];
var answersArray=[["Mercury","Pluto","Venus","Uranus"],["Earth","Pluto","Neptune","Mars"],["Earth","Saturn","Jupiter","Uranus"],["Mercury","Venus","Earth","Mars"]];
var correctAnswers=["Venus","Mars","Jupiter","Mercury"];
var answerCounters = 0;
var questionCounters = 2;
var qCount = 0;
var correctAnswerCount = 0;
var wrongAnswerCount = 0;

window.onload = function() 
        {
        
            
        };

        $("#startGame").on("click",gameInitialize);
        function gameInitialize() {
            wrongAnswerCount = 0;
            correctAnswerCount = 0;
           id= setInterval(printTime,1000);
           console.log(id);
           showQuestions(qCount);
        }

        function nextQuestion() {
            if(qCount<4){
                showQuestions(qCount);
            } 
            else {
                console.log("game over");
                $(".quiz").empty();
                $(".submitAnswer").html("<h1>Game Over!!! <p> Correct Answers : " + correctAnswerCount + "</p><p> Incorrect Answers : " + wrongAnswerCount + "</p> </h1>");
                
            }
        }
        function printTime() {
            $('.timer').html("Time Remaining: "+ counter--);
            if(counter < 0) {
                clearInterval(id);
                $(".submitAnswer").html("<h1>Time Over !!! </h1>");
                $("#next").attr('disabled', false);
                $("#submit").attr('disabled', true);
                wrongAnswerCount ++;
            }
           
        }

        function showQuestions(k) {
            $(".submitAnswer").empty();
            $(".buttons").empty();
            $(".buttons").append($("<button class='btn-lg btn-secondary' id='next'>Next</button>"));
            $(".buttons").append($("<button class='btn-lg btn-primary' id='submit'>Submit</button>"));
            $("#next").attr('disabled', true);
            var inputForm = $("#quizGame");
            // inputForm.append($("<ul>"));
         //  for(j=0;j<2;j++){
            $(".currentQuestion").html("<h3>"+questions[k]+"</h3>");
            inputForm.append($(".currentQuestion"));
            for(var i=0;i<4;i++){
        //    console.log(i);
           j=i+1;
            // inputForm.append($("<ll>"));    

            $(".listAnswers"+j).html($("<input type='radio' name='test' id='test' value="+answersArray[k][i]+">"));
            // console.log(i);
            $(".listAnswers"+j).append($("<b><label for="+answersArray[k][i]+">"+answersArray[k][i]+"</label></b>"));
            inputForm.html($(".listAnswers"+j)); 
          
            
             } 
          
            $("#submit").on("click",function(){
                console.log($("#test:checked").val());
                if($("#test:checked").val() == null) {
                    $(".submitAnswer").html("<h1>Please select an answer !!! </h1>");
                }
                else {
                    if($("#test:checked").val() == correctAnswers[qCount]) {
                        $(".submitAnswer").html("<h1>Correct answer!!! </h1>");
                        correctAnswerCount++;
                    }
                    else {
                        $(".submitAnswer").html("<h1>Wrong answer!!! </h1>");
                        wrongAnswerCount++;
                    }
                    clearInterval(id);
                    $("#next").attr('disabled', false);
                   $("#submit").attr('disabled', true);

                }
                
             });
             $("#next").on("click",function(){
                clearInterval(id);
                counter = 15;
                id= setInterval(printTime,1000); 
                qCount++;
                // console.log($("#test:checked").val());
                
                
                nextQuestion();
                
                
             });  
        }


        