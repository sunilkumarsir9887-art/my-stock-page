export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

// ----------------------------
// Generic FB Pixel helper
// ----------------------------
export const fbqEvent = (event, params = {}, isCustom = false) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    if (isCustom) {
      window.fbq("trackCustom", event, params); // Custom events
    } else {
      window.fbq("track", event, params); // Standard events
    }
  } else {
    console.warn("Facebook Pixel not initialized");
  }
};

// ----------------------------
// FB Pixel Pre-made helpers
// ----------------------------

// 🛒 Add to Cart
export const trackAddToCart = (product) => {
  fbqEvent("AddToCart", {
    content_name: product.name,
    content_ids: [product.id],
    content_type: "product",
    value: product.price,
    currency: "USD",
  });
};

// 💳 Purchase
export const trackPurchase = (order) => {
  fbqEvent("Purchase", {
    value: order.total,
    currency: "USD",
    contents: order.items.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      item_price: item.price,
    })),
    num_items: order.items.length,
    content_type: "product",
  });
};

// ✅ Subscribe
export const trackSubscribe = () => {
  fbqEvent("Subscribe");
};

// 📢 Telegram Join (custom event)
export const trackTelegramJoin = () => {
  fbqEvent("TelegramJoin", { method: "cta_button" }, true);
};

// 📝 Lead
export const trackLead = () => {
  fbqEvent("Lead");
};
