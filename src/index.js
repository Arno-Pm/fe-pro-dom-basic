export const paintCards = () => {
    const odd = document.querySelectorAll('li:nth-child(odd)');// тут еще можно .item вместо li , работает и так и так
  for (let element of odd) {
    element.style.backgroundColor = 'red';
  };
};


export const findElement = () => {
    let elemli = document.querySelector('li');
    while (elemli) {
        if (elemli.matches('.likedItem')) {
            elemli.style.backgroundColor = 'blue';
            break
        } else {
            elemli = elemli.nextElementSibling;
        }
    }
}
