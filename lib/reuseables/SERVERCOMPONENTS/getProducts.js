
export const getShopItems = async () => {
  try {
    // const host = checkHost();
    // const protocol = checkProtocol();
    const response = await fetch(`http://localhost:3000/api/initialproducts`);
    if (!response.ok) throw new Error("Failed to fetch items");

    return await response.json();
  } catch (e) {
    throw new Error(e.message);
  }
};
