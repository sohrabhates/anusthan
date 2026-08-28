// ANUSTHAN Product Image Mapping Layer
// Maps each of the 9 unique folder products to its image inside images/anusthan_products/

export const productImageMap = {
  "1010-rice": "images/anusthan_products/1010_RIce.jpeg",
  "ratna-premium": "images/anusthan_products/Ratna_premium.jpeg",
  "ratna-rice": "images/anusthan_products/Ratna_rice.jpeg",
  "special-banskati-old": "images/anusthan_products/Special_Banskati(old).jpeg",
  "special-jeerakati": "images/anusthan_products/special_Jeerakati.jpeg",
  "special-miniket": "images/anusthan_products/Special_Miniket.jpeg",
  "superior-banskati-old": "images/anusthan_products/superior_banskati(old).jpeg",
  "superior-miniket": "images/anusthan_products/SUPERIOR_MINIKET.jpeg",
  "superior-miniket-old": "images/anusthan_products/Superior_miniket(old).jpeg"
};

export const getProductImage = (product) => {
  if (!product) return '';
  return productImageMap[product.id] || product.image;
};

export default productImageMap;
