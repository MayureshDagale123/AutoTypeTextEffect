import { useEffect, useState } from "react";

const proffessions = ["Coder", "Developer", "Engineer", "YouTuber"];

function App(){

    const [wordIndex, setWordIndex] = useState(0);
    const [alphabet, setAlphabet] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            if(reverse && alphabet === 0){
                setWordIndex(wordIndex => wordIndex+1);
                setReverse(false);
            }
            
            if(wordIndex === proffessions.length){
                setWordIndex(0);
            }
            
            if(alphabet === proffessions[wordIndex].length){
                setReverse(true);
            }

            if(!reverse){
                setAlphabet(alphabet => alphabet+1);
            }
            else{
                setAlphabet(alphabet => alphabet-1);
            }
            
        }, 200 );

        console.log(alphabet, reverse, wordIndex);
        return()=>{
            clearInterval(intervalId);
        };
    }, [alphabet, reverse, wordIndex]);

    return(
    <>
        <h1>I am a <span>{proffessions[(wordIndex===proffessions.length)?0:wordIndex].slice(0, (alphabet===-1)?0:alphabet)}</span></h1>
    </>
    );
}

export default App;