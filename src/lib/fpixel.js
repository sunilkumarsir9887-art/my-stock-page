export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "24896793486591265";

// Record any Facebook Pixel event
export const fbqEvent = (event, params = {}) => {
  if (typeof window.fbq === "function") {
    window.fbq("track", event, params);
  } else {
    console.warn("Facebook Pixel not initialized");
  }
};

// Pre-made helpers
export const trackAddToCart = (product) => {
  fbqEvent("AddToCart", {
    content_name: product.name,
    content_ids: [product.id],
    content_type: "product",
    value: product.price,
    currency: "USD",
  });
};

export const trackPurchase = (order) => {
  fbqEvent("Purchase", {
    value: order.total,
    currency: "USD",
    contents: order.items.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      item_price: item.price,
    })),
    content_type: "product",
  });
};
