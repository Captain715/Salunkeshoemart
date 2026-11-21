# Salunke Shoe Mart

Multi-page ecommerce storefront on GitHub Pages with a separate Supabase project in Mumbai region.

Pages: home, shop, product detail, cart/checkout, customer account, order history, owner dashboard, about and contact.

Owner access is not granted by customer signup. After the shop owner's account is created, an administrator must add their auth UUID to private.store_admins using the Supabase SQL editor. Never put a service-role or secret key in browser code.

Products are not fabricated; add the real catalogue and photographs through the owner dashboard. UPI orders remain pending until the shop verifies payment. The site never asks for a UPI PIN or OTP.
