interface Stream {
  current();
  next();
  previous();
  peek(to: number);
  source?(source: any);
  position: number;
  eos: boolean;
}

export default Stream;