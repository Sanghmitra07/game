let [computer_score, user_score, winning_streak] = [0, 0, 0];
let result_ref = document.getElementById("result");

let choices_object = {
    'rock': {
        'rock': 'draw',
        'scissor': 'win',
        'paper': 'lose'
    },
    'scissor': {
        'rock': 'lose',
        'scissor': 'draw',
        'paper': 'win'
    },
    'paper': {
        'rock': 'win',
        'scissor': 'lose',
        'paper': 'draw'
    }
};

function checker(input) {
    var choices = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random() * 3);
    let computer_choice = choices[num];

    document.getElementById("comp_choice").innerHTML =
        `Computer chose <span>${computer_choice.toUpperCase()}</span>`;
    document.getElementById("user_choice").innerHTML =
        `You chose <span>${input.toUpperCase()}</span>`;
        
    switch (choices_object[input][computer_choice]) {
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "YOU WIN";
            user_score++;
            winning_streak++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "YOU LOSE";
            computer_score++;
            winning_streak = 0; // Reset streak on loss
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "DRAW";
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
    document.getElementById("streak_count").innerHTML = winning_streak;
}

function resetScores() {
    computer_score = 0;
    user_score = 0;
    winning_streak = 0;
    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
    document.getElementById("streak_count").innerHTML = winning_streak;
    result_ref.innerHTML = "";
    document.getElementById("user_choice").innerHTML = "";
    document.getElementById("comp_choice").innerHTML = "";
}