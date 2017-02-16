interface Stream {
  current();
  next();
  previous();
  peek(to: number);
  reset(source: any);
  position: number;
  ended: boolean;
}

export default Stream;