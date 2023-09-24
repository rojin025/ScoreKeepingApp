const p1Button = document.querySelector('#p1Button');
let p1Score = 0;
const p1ScoreDisplay = document.querySelector('.p1ScoreDisplay');

const p2Button = document.querySelector('#p2Button');
let p2Score = 0;
const p2ScoreDisplay = document.querySelector('.p2ScoreDisplay');

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#winningScoreSelect');


let winningScore = 3;
let isGameOver = false;

winningScoreSelect.addEventListener('change',function (){
    winningScore = parseInt(this.value);
    resetScore();
})

p1Button.addEventListener('click', () => {
    if(!isGameOver){        // to avoid has-background-danger to keep increasing score
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1ScoreDisplay.classList.add('has-background-primary'	);
            p2ScoreDisplay.classList.add('has-background-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1ScoreDisplay.textContent = p1Score;
    }
})

p2Button.addEventListener('click', () => {
    if (!isGameOver){
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2ScoreDisplay.classList.add('has-background-primary');
            p1ScoreDisplay.classList.add('has-background-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }

        p2ScoreDisplay.textContent = p2Score;
    }
})

resetButton.addEventListener('click' , resetScore); // Passing A reference

function resetScore() {     // executing function with "()"
    isGameOver = false;
    p1Score = 0;
    p1ScoreDisplay.textContent = 0;
    p1ScoreDisplay.classList.remove( 'has-background-danger','has-background-primary');
    p2Score = 0;
    p2ScoreDisplay.textContent = 0;
    p2ScoreDisplay.classList.remove( 'has-background-danger','has-background-primary');
    p1Button.disabled = false;
    p2Button.disabled = false;
}






















