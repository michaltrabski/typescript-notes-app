export const reandomEmail = () => {
  return `michaltrabskiphone+_${randBetween(0, 10000)}@gmail.com`;
};

export const randBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
