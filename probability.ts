/**
 * calculates the probability of a number appearing based on existing values.
 * @param toObserve the value to check for
 * @param on the array of values
 */
export function probabilityByCount<T>(toObserve: T, on: Array<T>): number{
    return on.filter((v)=>v===toObserve).length / on.length;
}

/**
 * calculates the probability of each individual value in the array against the same array.
 * @param on the array to iterate over
 */
export function probabilityOfAll<T>(on: Array<T>){
    return on.flatMap((v)=> [{ name: `${v}`, probability: probabilityByCount(v, on)}])
}