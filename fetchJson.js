export const fetchJson = async () => {
  const req = await fetch('./times.json');
  const res = await req.json();
  const { times } = res;
  return times;
};
