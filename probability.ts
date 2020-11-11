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

/**
 * calculates the probability of all supplied observations
 * @param on the array of data
 * @param observations the values to observe
 */
export function probabilityOfInputs<T>(on: Array<T>, observations: Array<T>){
    return observations.flatMap((v)=> [{ name: `${v}`, probability: probabilityByCount(v, on)}])
}

/**
 * Calculates the probability that event A will occur given that event B has already occurred.
 * @param eventA 
 * @param eventB 
 */
export function conditionalDependantProbability<T>(eventA: Array<T>, eventB: Array<T>){
    return eventA.filter((v)=>eventB.includes(v)).length / eventB.length; // (x elements in A that is in B) / x elements in B
}
/**
 * Calculates the probability that event 0 will occur followed by N and so on
 * @param sampleSpace 
 * @param events 
 */
export function conditionalIndependentProbability<T>(sampleSpace: Array<T>, ...events: T[]){
    return events.map((event)=> probabilityByCount(event, sampleSpace)).reduce((prev, curr)=> prev * curr)
}