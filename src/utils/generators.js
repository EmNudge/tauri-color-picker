function* infIter(iterable) {
  while (true) yield* iterable;
}