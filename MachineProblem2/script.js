
document.addEventListener('DOMContentLoaded', function() {

    const sentenceInput = document.getElementById('sentenceInput');
    const searchWord = document.getElementById('searchWord');
    const searchBtn = document.getElementById('searchBtn');
    const outputText = document.getElementById('outputText');
    
   
    function checkWordInSentence(sentence, word) {
  
        if (!sentence.trim() || !word.trim()) {
            return { result: "Please fill in both fields.", isFound: false };
        }
        
        const isFound = sentence.includes(word);
        
        return {
            result: isFound ? "Found" : "Not Found",
            isFound: isFound
        };
    }
    
    function updateOutput() {
        const sentence = sentenceInput.value;
        const word = searchWord.value;
        
        const { result, isFound } = checkWordInSentence(sentence, word);
        
        outputText.textContent = result;
        outputText.className = isFound ? 'found' : 'not-found';
        
      
        const outputBox = document.querySelector('.output-box');
        outputBox.style.borderLeftColor = isFound ? '#2e7d32' : '#c62828';
    }
    

    searchBtn.addEventListener('click', updateOutput);

    sentenceInput.addEventListener('input', updateOutput);
    searchWord.addEventListener('input', updateOutput);
    
  
    updateOutput();
  
    console.log("SearchWord application initialized.");
    console.log("Example: Searching 'easy' in 'JavaScript is easy'");
    console.log("Result:", checkWordInSentence("JavaScript is easy", "easy"));
    console.log("Example: Searching 'Java' in 'Web Programming'");
    console.log("Result:", checkWordInSentence("Web Programming", "Java"));
});
