const isPrime = (n) =>
{
    // Corner case
    if (n <= 1)
        return false;
  
    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
  
    return true;
}
 const primeBetween = (a, b) => {
    let count = 0;
    for(let i = Math.min(a, b); i <= Math.max(a, b); i++){
       if(isPrime(i)){
          count++;
       };
    };
    return count;
 };
 console.log(primeBetween(0, 10007));