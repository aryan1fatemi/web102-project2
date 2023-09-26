import { useState, useEffect } from 'react';

const Card = (props) => {
  let dictionary = {
    "Named Girl With Balloon before it was partially shredded at a 2018 auction Love Is in the Bin is an artwork that sold for $25.4 million in 2021 by what one-named artist": 'Banksy',
    "Belgian painter Rene Magritte's 1964 work (The Son of Man) depicts a man wearing a suit and bowler hat, and whose face is concealed by what object?": 'An apple',
    "Which character from Hamlet is depicted drowning in an 1852 work by John Everett Millais?": 'Ophelia',
    "Picasso and Braque were exponents of which art movement of the early 20th century? This art movement is characterized by emphasis on abstract structure.": 'Cubism',
    "The name of which art movement is often considered to originate from British art critic Lawrence Alloway\'s 1958 essay “The Arts and the Mass Media?”": 'Pop Art',
    "What Belgian Surrealist artist was known for featuring bowler hats in many of his pieces?": 'Rene\' Magritte',
    "The name for which European art movement, which was chosen by randomly selecting a word from the dictionary, comes from a French word for a hobby horse?": 'Dadaism',
    "What vegetable is referenced in the title of an 1885 oil painting by Vincent van Gogh?": 'Potato',
    "A woman stands behind a well-stocked bar at Paris's Folies-Bergère nightclub in an 1882 painting by what French Impressionist?": 'Edouard Manet',
  };
  let randomIndex = Math.floor(Math.random() * Object.keys(dictionary).length);
  let randomQ = Object.keys(dictionary)[randomIndex];
  let ans = dictionary[randomQ];

  const [begun, begin] = useState(false);
  const [qDisplayed, changeQ] = useState(randomQ);
  const [ansDisplayed, changeAns] = useState(ans);

  useEffect(() => {
    let newAns = dictionary[qDisplayed];
    changeAns(newAns);
  }, [qDisplayed]);

  const [display, changeDisplay] = useState(qDisplayed);

  const beginGame = () => {
    if (begun === false) {
      return (
        <div className='card'>
          <button
            className='begin-btn'
            onClick={() => begin(true)}>
            Begin
          </button>
        </div>
      );
    } else {
      return (
        <div className='game'>
          <div
            className='card'
            onClick={() =>
              changeDisplay(
                display === qDisplayed ? ansDisplayed : qDisplayed
              )
            }>
            <p className='word'>{display}</p>
          </div>
          <button
            className='next-btn'
            onClick={() => {
              let newIndex = Math.floor(
                Math.random() * Object.keys(dictionary).length
              );
              let newQ = Object.keys(dictionary)[newIndex];
              let newAns = dictionary[newQ];
              changeQ(newQ);
              changeAns(newAns);
              changeDisplay(newQ);
            }}>
            Next
          </button>
        </div>
      );
    }
  };

  return beginGame();
};

export default Card;