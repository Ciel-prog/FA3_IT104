
document.addEventListener('DOMContentLoaded', function() {

    const sentenceInput = document.getElementById('sentenceInput');
    const wordToReplace = document.getElementById('wordToReplace');
    const replacementWord = document.getElementById('replacementWord');
    const replaceBtn = document.getElementById('replaceBtn');
    const outputText = document.getElementById('outputText');
    

    function replaceFirstOccurrence(sentence, oldWord, newWord) {

        if (!sentence.trim() || !oldWord.trim() || !newWord.trim()) {
            return "Please fill in all fields.";
        }

        return sentence.replace(oldWord, newWord);
    }
    
    function updateOutput() {
        const sentence = sentenceInput.value;
        const oldWord = wordToReplace.value;
        const newWord = replacementWord.value;
        
        const result = replaceFirstOccurrence(sentence, oldWord, newWord);
        outputText.textContent = result;
    }
    

    replaceBtn.addEventListener('click', updateOutput);
    

    sentenceInput.addEventListener('input', updateOutput);
    wordToReplace.addEventListener('input', updateOutput);
    replacementWord.addEventListener('input', updateOutput);
    

    updateOutput();
    
    console.log("ReplaceWord application initialized.");
    console.log("Example: Replacing 'PHP' with 'JavaScript' in 'I love PHP'");
    console.log("Result:", replaceFirstOccurrence("I love PHP", "PHP", "JavaScript"));
});
