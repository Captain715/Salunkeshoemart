# Salunke Shoe Mart

Multi-page footwear storefront for Salunke Shoe Mart, Chakan, Maharashtra, India.

## Pages and features

- Home page, category collection and product search/filter/sort
- Product detail pages with size and colour selection
- Shopping bag with quantity controls
- Customer registration, sign-in and order history
- Saved wishlist for signed-in customers
- Server-validated checkout with stock locking, current database prices, coupon validation and configurable shipping fee
- UPI payment intent link (once the shop's official UPI ID is configured); payment stays pending until the shop verifies receipt
- Cash on delivery selection, subject to the shop's confirmation
- Owner dashboard: create/edit/hide/publish/delete products, upload footwear photos, manage stock, coupons, payment settings, order status and courier tracking
- Stock is restored automatically when an order is cancelled
- Supabase Row Level Security policies protect customer orders, wishlist and owner operations

## Infrastructure

- Frontend: GitHub Pages (static HTML/CSS/JavaScript)
- Backend: separate Supabase project in Mumbai region
- Product image bucket: `product-images` (public read, owner-only upload/update/delete)
- Browser client uses only the Supabase publishable key. Never put a service-role or secret key in frontend files.

## Owner setup

1. The shop owner (with a parent/guardian supervising account setup if needed) creates their own account at `account.html` using the shop's email and a password they keep private.
2. A project administrator adds that account's Auth user UUID to `private.store_admins` in the Supabase SQL editor. The database trigger then marks the profile as an owner.
3. Sign in and open `owner.html`. Add real catalogue items and photographs, then configure the official UPI ID and shipping fee.
4. Never share passwords, UPI PINs or OTPs in chat or in the repository.

Customer signup cannot grant owner access. Do not expose service-role credentials. UPI payments are not auto-verified by the website.

## Launch checklist

- Enable GitHub Pages for the repository from Settings → Pages (main branch, root folder) if it is not already enabled.
- Create the owner's account and grant its Auth UUID in the database.
- Add real product information, sizes, stock and photos.
- Confirm official UPI ID, delivery fees, COD policy and Maharashtra shipping coverage with the shop owner.
- Test customer signup, checkout, coupon, payment verification, cancellation/restocking and tracking before taking live orders.

Contact: 8308506755 · www.sudheersalunke@gmail.com
