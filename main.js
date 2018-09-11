const spanish = {
    merry: "alegre",
    christmas: "navid",
    and: "y",
    happy: "contento",
    new: "nuevo",
    year: "año"
}

const french = {
    merry: "joyeux",
    christmas: "noël",
    and: "et",
    happy: "content",
    new: "nouveau",
    year: "an"
}

const german = {
    merry: "fröhlich",
    christmas: "weihnachten",
    and: "und",
    happy: "glücklich",
    new: "neu",
    year: "jahr"
}

const zulu = {
    merry: "ujabule",
    christmas: "i-christmas",
    and: "futhi",
    happy: "ujabule",
    new: "okusha",
    year: "ngonyaka"
}

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
  };

  // Spanish Translator Function

const spanishTranslate = () => {
    const inputValue = document.getElementById('inputBox').value;
    const inputWords = inputValue.split(" ");
    const spanishTranslatedString = spanishStringBuilder (inputWords);
    var msg = new SpeechSynthesisUtterance(spanishTranslatedString);
                    window.speechSynthesis.speak(msg);
    printToDom(spanishTranslatedString, 'returnText')
}

const spanishStringBuilder = (inputWords) => {
    let newString = '';
    for(let i = 0; i< inputWords.length; i++) {
        let spanishWord = spanish[inputWords[i]];
        newString += `${spanishWord}`
    };
    return newString;
}

const spanishButton = document.getElementById('spanish');
    spanishButton.addEventListener("click", spanishTranslate);

    // French Translator Function

    const frenchTranslate = () => {
        const inputValue = document.getElementById('inputBox').value;
        const inputWords = inputValue.split(" ");
        const frenchTranslatedString = frenchStringBuilder (inputWords);
        var msg = new SpeechSynthesisUtterance(frenchTranslatedString);
                    window.speechSynthesis.speak(msg);
        printToDom(frenchTranslatedString, 'returnText')
    }
    
    const frenchStringBuilder = (inputWords) => {
        let newString = '';
        for(let i = 0; i< inputWords.length; i++) {
            let frenchWord = french[inputWords[i]];
            newString += `${frenchWord}`
        };
        return newString;
    }
    
    const frenchButton = document.getElementById('french');
        frenchButton.addEventListener("click", frenchTranslate);

        // German Translator Function

        const germanTranslate = () => {
            const inputValue = document.getElementById('inputBox').value;
            const inputWords = inputValue.split(" ");
            const germanTranslatedString = germanStringBuilder (inputWords);
            var msg = new SpeechSynthesisUtterance(germanTranslatedString);
                    window.speechSynthesis.speak(msg);
            printToDom(germanTranslatedString, 'returnText')
        }
        
        const germanStringBuilder = (inputWords) => {
            let newString = '';
            for(let i = 0; i< inputWords.length; i++) {
                let germanWord = german[inputWords[i]];
                newString += `${germanWord}`
            };
            return newString;
        }
        
        const germanButton = document.getElementById('german');
            germanButton.addEventListener("click", germanTranslate);

            // Zulu Translator Function

            const zuluTranslate = () => {
                const inputValue = document.getElementById('inputBox').value;
                const inputWords = inputValue.split(" ");
                const zuluTranslatedString = zuluStringBuilder (inputWords);
                var msg = new SpeechSynthesisUtterance(zuluTranslatedString);
                    window.speechSynthesis.speak(msg);
                printToDom(zuluTranslatedString, 'returnText')
            }
            
            const zuluStringBuilder = (inputWords) => {
                let newString = '';
                for(let i = 0; i< inputWords.length; i++) {
                    let zuluWord = zulu[inputWords[i]];
                    newString += `${zuluWord}`
                };
                return newString;
            }
            
            const zuluButton = document.getElementById('zulu');
                zuluButton.addEventListener("click", zuluTranslate);


                // Text To Speech Function //

                