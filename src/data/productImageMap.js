// ANUSTHAN Product Image Mapping Layer
// Maps each of the 23 locked products to its finished studio photograph inside images/product/
// Preserves src/data/products.js 100% UNTOUCHED and LOCKED.

export const productImageMap = {
  "superior-miniket-old-01": "images/product/superior_miniket(old).jpeg",
  "special-banskati-old-01": "images/product/special_banskati.jpg",
  "husking-miniket-01": "images/product/Husking_miniket.jpeg",
  "special-miniket-01": "images/product/Special_miniket.jpeg",
  "1010-rice-01": "images/product/1010_rice.jpeg",
  "special-4094-01": "images/product/Special_4094.jpeg",
  "ratna-rice-01": "images/product/RATNA.jpeg",
  "sm-minikit-01": "images/product/SM_miniket.jpeg",
  "ratna-premium-01": "images/product/Ratna_premium.jpeg",
  "special-jeerakati-01": "images/product/Special_jeerakati.jpeg",
  "swarna-01": "images/product/swarna.jpeg",
  "special-miniket-new-01": "images/product/special_miniket_new_01.jpeg",
  "special-miniket-new-02": "images/product/special_miniket_varient.jpeg",
  "classic-long-grain-01": "images/product/clasic_long_grain.jpeg",
  "swarna-02": "images/product/swarna_rice.jpeg",
  "classic-long-grain-02": "images/product/clasic_long_grain_varient.jpeg",
  "classic-long-grain-03": "images/product/clasic_long_grain_varient_pink.jpeg",
  "superior-miniket-01": "images/product/superior_miniket.jpeg",
  "superior-miniket-old-02": "images/product/superior_miniket_varient (2).jpeg",
  "general-miniket-01": "images/product/general-miniket.jpeg",
  "1010-rice-02": "images/product/1010_varient.jpeg",
  "special-miniket-rice-01": "images/product/special_miniket_varient09.jpeg",
  "economy-miniket-01": "images/product/Economy_miniket.jpeg"
};

export const getProductImage = (product) => {
  if (!product) return '';
  return productImageMap[product.id] || product.image;
};

export default productImageMap;
