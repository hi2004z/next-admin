/my-ecommerce-site
  /app
    /components           # Các component tái sử dụng
      /common
        - Navbar.tsx
        - Footer.tsx
      /product
        - ProductCard.tsx
        - ProductList.tsx
      /cart
        - CartItem.tsx
        - CartSummary.tsx
    /layout.tsx            # Layout chung cho ứng dụng
    /page.tsx              # Trang chủ (Home page)
    /about.tsx             # Trang giới thiệu
    /contact.tsx           # Trang liên hệ
    /shop/page.tsx         # Trang cửa hàng
    /product/[id]/page.tsx # Trang chi tiết sản phẩm
    /cart/page.tsx         # Trang giỏ hàng
    /checkout/page.tsx     # Trang thanh toán
    /order/[id]/page.tsx   # Trang đơn hàng
  /public
    /assets
      /images
        - logo.png
        - product1.jpg
        - product2.jpg
    /css
      - styles.css
    /fonts
      - custom-font.woff2
  /styles
    - globals.css
    - tailwind.config.js
    - postcss.config.js
  package.json
  next.config.js
  tsconfig.json
  README.md
