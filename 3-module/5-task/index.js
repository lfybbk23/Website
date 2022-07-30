function getMinMax(str) {

    let arr = str.split(' ');
    let min = 0;
    let max = 0;
  
    for (item of arr) {
        if (item < min) {
          min = +item;
        }
      
        if (item > max) {
          max = +item;
        }
    }
    return { min, max };
}
