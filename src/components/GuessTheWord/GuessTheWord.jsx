import React , {useState , useEffect } from 'react'
import { GuessWordData } from '../../utils/GuessWord.js'
import './GuessTheWord.css'

const GuessTheWord = () => {

  // * ######### Start State
  const [LitterData, setLitterData] = useState({ tryN: 1 ,litterN: 1 , value: null })
  const [wordLength, setwordLength] = useState(0)
  // * ######### End State

  // * ######### Start Logic

    // *Start Collect Data about correct Word
    const correctWord = [...GuessWordData[0].theCorrectWord_1.name]
    useEffect(() => {
      setwordLength(correctWord.length);
    }, [correctWord , LitterData ]);
    
    // *End Collect Data about correct Word
  // *Start Handel Input field
  const HandelChange = (e , I , P) => {
    const targetElement = e.target
    const value = e.target.value.toLowerCase()
    setLitterData({ tryN : (P + 1) , litterN : (I + 1) , value : value })
    
    // * $$$$$$$$ Start Comparing $$$$$$$$
    if (value) {
      if (correctWord[I] === value) {
        e.target.classList.add('CorrectPosition');
        e.target.classList.remove('NotCorrectPosition');
      } else if (correctWord.includes(value)) {
        e.target.classList.add('NotCorrectPosition');
        e.target.classList.remove('CorrectPosition');
      } else {
        e.target.classList.add('WrongWord');
        e.target.classList.remove('CorrectPosition', 'NotCorrectPosition');
      }
      // * Focus On The Next Try
      const newTryNValue = LitterData.tryN + 1 ;
      if(correctWord.length == I + 1 ) {
        setLitterData((prv) => ({
            ...prv,
            tryN : newTryNValue
        }))
          const tryname = document.querySelector(`[try-name = 'try-${ P + 2 + I }']`)
          console.log(P + 2 + I )
          tryname.focus()
      }

  } else {
    // * Remove from state when input is cleared
    e.target.classList.remove('CorrectPosition', 'NotCorrectPosition', 'WrongWord');
  }
        // * $$$$$$$$ End Comparing $$$$$$$$
}
// *end Handel Input field
// * Start Dynamic Transition
const handleArrowKey = (e, I, P) => {
  if (e.key === 'ArrowRight') {
    // Focus on the next input field
    const nextInput = document.getElementById(I + 2); // Focus next input
    if (nextInput) {
      nextInput.focus();
    }
  } else if (e.key === 'ArrowLeft') {
    // Focus on the previous input field
    const prevInput = document.getElementById(I); // Focus previous input
    if (prevInput) {
      prevInput.focus();
    }
  }
};

if(LitterData.value && LitterData.litterN < wordLength ) {
  document.getElementById(LitterData.litterN + 1).focus()
}
// * End Dynamic Transition
  // * ######### End Logic
  return (
    <div  className=' w-[100%]'>
      <div className=' px-5 '>
        <p className={`text-green-500 font-bold w-[80%] mx-auto my-7 text-center`}>{GuessWordData[wordLength].theCorrectWord_1.hint}</p>
        {/* Start Tries */}
        {[...Array(4)].map((_,P) => (
          <div key={P} id={P + 1} name={`litter-${P + 1}`} className= {` w-[100%] flex justify-evenly items-center my-10`} >

            <p className='font-bold text-[20px] text-blue '>{'Try' + (P + 1 ) + '  :' }</p>

            <div className=''>
              {[...Array(wordLength)].map((_,I) => (
                <input  onKeyDown={(e) => handleArrowKey(e, I, P)} 
                        disabled={(P + 1) !== LitterData.tryN} 
                        onChange={(e) => {HandelChange(e ,I , P)}} 
                        key={I} id={I + 1} 
                        try-name={`try-${P + 1 + I }`} 
                        type="text" 
                        className= {` focus:outline-none m-1 w-[40px] h-[50px] border-b-[3px] text-zinc font-bold text-[35px] text-center border-sky-500`}  />
              ))}
            </div>

          </div>
        ))}
        {/* Start Tries */}
      </div>
    </div>
  )
}

export default GuessTheWord