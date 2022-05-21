export const paintCards = () => {
    const odd = document.querySelectorAll('li:nth-child(odd)');// тут еще можно .item вместо li , работает и так и так
  for (let element of odd) {
    element.style.backgroundColor = 'red';
  };
};


export const findElement = () => {
    const FirstStep = document.querySelectorAll('li');
    let NumberOneLi = document.querySelector('ul > li:first-child');
    for (let i = 0; i < FirstStep.length; i++) {
        let nextLI = NumberOneLi.nextElementSibling;
        if (nextLI.matches('.item.likedItem')) {
            nextLI.style.backgroundColor = 'blue';
          } else {
            NumberOneLi = nextLI;
          }
        }
      };
