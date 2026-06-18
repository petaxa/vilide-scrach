export const clampSlideIndex = (index: number, slideCount: number) => {
  const lastIndex = Math.max(0, slideCount - 1);
  return Math.min(Math.max(index, 0), lastIndex);
};

export const getSlidePath = (index: number) => (index === 0 ? "/" : `/${index + 1}`);

export const getSlideUrl = (index: number) => {
  const baseUrl = import.meta.env.BASE_URL;
  return index === 0 ? baseUrl : `${baseUrl}${index + 1}/`;
};
