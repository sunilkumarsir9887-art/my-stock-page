export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

// Record any Facebook Pixel event
export const fbqEvent = (event, params = {}, isCustom = false) => {
  if (typeof window.fbq === "function") {
    if (isCustom) {
      window.fbq("trackCustom", event, params); // for custom events
    } else {
      window.fbq("track", event, params); // for standard events
    }
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
    num_items: order.items.length, // ✅ added
    content_type: "product",
  });
};

// Example custom event: Telegram join
export const trackTelegramJoin = () => {
  fbqEvent("TelegramJoin", { method: "cta_button" }, true);
};
