interface Stream {
  current();
  next();
  previous();
  peek(to: number);
  position: number;
  ended: boolean;
}

export default Stream;