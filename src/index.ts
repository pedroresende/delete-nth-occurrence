const numberOfOccurrences = (arr: number[], number: number): number => {
  let count = 0
  for (let element of arr) {
    if (element === number) {
      count++
    }
  }
  
  return count
}

const deleteNthOccurrence = (arr: number[], number: number): number[] => {
  const repetition = []
  for (let element of arr) {
    if (numberOfOccurrences(repetition, element) < number) {
      repetition.push(element)
    }
  }

  return repetition
}

export default deleteNthOccurrence
