// remaps a value from one range to another
// e.g. 15 on range [10, 20] would be 75 on range [50, 100] since it's half way on both ranges
export const remap = (val, range1, range2) => {
  const percentage = (val - range1[0]) / (range1[1] - range1[0]);
  return percentage * (range2[1] - range2[0]) + range2[0];
} 

// returns the value or the closest range end if value falls outside of range
export const clamp = (val, range) => Math.max(Math.min(val, range[1]), range[0]);

// gets the power of 10 to convert a decimal to an integer
const getIntPower = (num) => num >= 1 ? 0 : ~~-Math.log10(num) + 1;

// instead of rounding to whole numbers, it can round to decimals. 
// We can pretend we're shading [val/step] blocks of size [step]. The last block isn't fully shaded.
// we shade the entire block or erase it depending on how much is shaded.
// due to decimal imprecision, we need to convert to ints at the start
export const roundStep = (val, step) => {
  // turning nums to integers
  const tenPower = 10 ** getIntPower(Math.min(val, step), step);
  const intVal = tenPower * val; 
  const intStep = tenPower * step;

  // gets the remainder or 0, depending on how close it is to the step
  const remainder = intVal % intStep;
  const remainderPerc = remainder / intStep;
  const roundedRemainder = remainderPerc >= .5 ? intStep : 0;
  
  // remove the regular remainder and add our own one
  const intRes = roundedRemainder + (intVal - remainder);

  return intRes / tenPower;
}

// doesn't do deep equality, but it tests if 2 objects have equal primitive values
export const objEquals = (obj1, obj2) => {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;
  
  for (const prop in obj1) {
    if (obj1[prop] !== obj2[prop]) return false;
  }
  return true;
}