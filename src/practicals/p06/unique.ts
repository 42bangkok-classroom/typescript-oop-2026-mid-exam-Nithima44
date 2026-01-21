
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

export function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  const combined = [...arr1, ...arr2]; 
  const numberCount: { [key: number]: number } = {}; 
 
  combined.forEach(num => {
      numberCount[num] = (numberCount[num] || 0) + 1;
  });

  const uniqueNumbers = combined.filter(num => numberCount[num] === 1);

  return uniqueNumbers; 
}

const result = getUniqueNumbers(arr1, arr2);
console.log(result); 
