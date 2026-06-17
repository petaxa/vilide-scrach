export const clampSlideIndex = (index: number, slideCount: number) => {
  const lastIndex = Math.max(0, slideCount - 1);
  return Math.min(Math.max(index, 0), lastIndex);
};

export const getSlidePath = (index: number) => (index === 0 ? "/" : `/${index + 1}`);
