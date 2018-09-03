export const compose = (...functionsToApply) => initialValue =>
  functionsToApply.reduceRight((value, functionToApply) => functionToApply(value), initialValue);
