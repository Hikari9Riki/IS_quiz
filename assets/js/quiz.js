function gradeQuiz() {
    let score = 0;
    let total = 0;
    
    // Select all question blocks in the MCQ section
    const questions = document.querySelectorAll('.mcq-section .question-block');

    questions.forEach((block) => {
        total++;
        const feedback = block.querySelector('.feedback');
        const correctAnswer = feedback.getAttribute('data-correct');
        const selected = block.querySelector('input[type="radio"]:checked');

        // Reset styles
        feedback.style.display = 'block';
        feedback.className = 'feedback'; 

        if (selected) {
            if (selected.value === correctAnswer) {
                score++;
                feedback.textContent = "Correct!";
                feedback.classList.add('correct');
            } else {
                feedback.textContent = "Incorrect. The correct answer was " + correctAnswer + ".";
                feedback.classList.add('incorrect');
            }
        } else {
            feedback.textContent = "Skipped. Correct answer: " + correctAnswer;
            feedback.classList.add('incorrect');
        }
    });

    const resultDiv = document.getElementById('score-display');
    resultDiv.innerHTML = `<h3>You scored ${score} out of ${total}</h3>`;
    window.scrollTo(0, document.body.scrollHeight);
}
