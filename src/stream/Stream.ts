interface Stream {
  current();
  next();
  previous();
  peek(to: number);
  source?(source: any);
  position: number;
  ended: boolean;
}

export default Stream;