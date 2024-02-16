

export const getRandomProducts = async () => {
  const res = await publicApi.get("/products/get-random/10");
  const { data } = res;

  return data;
};