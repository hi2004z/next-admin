<!-- -- 1. settings: Bảng này lưu trữ các cài đặt hệ thống, cấu hình toàn cục của website (như thời gian, múi giờ, ngôn ngữ mặc định).
-- 2. banners: Lưu trữ thông tin về các banner quảng cáo trên website.
-- 3. slides: Lưu trữ thông tin về các slide hình ảnh trong các khu vực quảng cáo.
-- 4. pages: Lưu trữ thông tin về các trang tĩnh trên website (giới thiệu, chính sách, v.v.).
-- 5. admin_activity_logs: Ghi lại các hoạt động của quản trị viên trên hệ thống (cập nhật, xóa, thêm mới).
-- 6. notification: Lưu trữ thông tin về thông báo gửi cho người dùng (quảng cáo, cập nhật).
-- 7. users: Lưu trữ thông tin người dùng đăng ký tài khoản trên website (tên, email, mật khẩu).
-- 8. user_addresses: Lưu trữ các địa chỉ giao hàng của người dùng.
-- 9. user_social_account: Lưu trữ thông tin tài khoản mạng xã hội của người dùng (Google, Facebook).
-- 10. user_activity_logs: Ghi lại các hành vi của người dùng trên website (xem sản phẩm, thêm vào giỏ hàng).
-- 11. loyalty_points: Quản lý điểm thưởng tích lũy của người dùng trong chương trình khách hàng thân thiết.
-- 12. contacts: Lưu trữ thông tin liên hệ của khách hàng (email, số điện thoại).
-- 13. subscribers: Lưu trữ thông tin về những người đăng ký nhận bản tin hoặc thông báo từ website.
-- 14. feedback: Lưu trữ phản hồi của khách hàng về sản phẩm hoặc dịch vụ.
-- 15. shipping_method: Lưu trữ các phương thức vận chuyển (giao hàng tiết kiệm, giao nhanh, v.v.).
-- 16. shipping_addresses: Lưu trữ các địa chỉ giao hàng của người dùng.
-- 17. delivery_methods: Lưu trữ các phương thức giao hàng (giao qua dịch vụ bên ngoài, giao nội bộ).
-- 18. categories: Lưu trữ các danh mục sản phẩm chính (ví dụ: điện thoại, máy tính).
-- 19. sub_categories: Lưu trữ các danh mục phụ (ví dụ: điện thoại thông minh, điện thoại cũ).
-- 20. brands: Lưu trữ các thương hiệu sản phẩm.
-- 21. products: Lưu trữ thông tin các sản phẩm (tên, mô tả, giá, v.v.).
-- 22. product_attributes: Lưu trữ các thuộc tính của sản phẩm (màu sắc, kích thước, v.v.).
-- 23. product_attribute_values: Lưu trữ các giá trị cụ thể của thuộc tính (đỏ, xanh, M, L).
-- 24. product_variant: Lưu trữ các biến thể của sản phẩm (ví dụ: điện thoại iPhone 12, iPhone 12 Pro).
-- 25. product_images: Lưu trữ hình ảnh của sản phẩm.
-- 26. product_seo: Quản lý SEO của sản phẩm (tiêu đề SEO, mô tả SEO, từ khóa SEO).
-- 27. product_tags: Lưu trữ các thẻ gắn với sản phẩm (ví dụ: "hàng mới", "giảm giá").
-- 28. product_histories: Lưu trữ lịch sử thay đổi sản phẩm (thay đổi giá, tồn kho, mô tả).
-- 29. product_performance: Lưu trữ thông tin về hiệu suất sản phẩm (lượt xem, lượt mua, đánh giá).
-- 30. product_bundles: Lưu trữ thông tin các gói sản phẩm (mua 1 tặng 1, combo sản phẩm).
-- 31. coupons: Lưu trữ thông tin mã giảm giá, khuyến mãi.
-- 32. sales_data: Lưu trữ dữ liệu về doanh thu, sản phẩm bán chạy, v.v.
-- 33. reviews: Lưu trữ đánh giá của khách hàng về sản phẩm.
-- 34. reviews_images: Lưu trữ hình ảnh kèm theo đánh giá của khách hàng.
-- 35. carts: Lưu trữ thông tin về giỏ hàng của người dùng.
-- 36. abandoned_carts: Lưu trữ thông tin về giỏ hàng bị bỏ quên (khách hàng không thanh toán).
-- 37. orders: Lưu trữ thông tin đơn hàng của người dùng (ngày đặt, trạng thái, tổng tiền).
-- 38. order_items: Lưu trữ chi tiết sản phẩm trong đơn hàng (sản phẩm, số lượng, giá).
-- 39. order_status_history: Lưu trữ lịch sử trạng thái của đơn hàng (đang xử lý, đã giao, hủy).
-- 40. order_coupons_usage: Lưu trữ thông tin việc sử dụng mã giảm giá trong đơn hàng.
-- 41. return_orders: Lưu trữ các đơn hàng bị trả lại.
-- 42. payment_method: Lưu trữ các phương thức thanh toán (Visa, MasterCard, PayPal).
-- 43. transactions: Lưu trữ thông tin giao dịch thanh toán (số tiền, trạng thái giao dịch).
-- 44. blogs: Lưu trữ thông tin về các bài viết blog trên website.

/// -- xây tới đoạn này 6/1
-- 45. staff: Lưu trữ thông tin nhân viên quản lý cửa hàng hoặc website.
-- 46. staff_password_reset: Lưu trữ thông tin yêu cầu đặt lại mật khẩu của nhân viên.
-- 46. staff_activity_logs: Lưu trữ lịch sử hoạt động của nhân viên.
-- 47. seo_meta_tags: Lưu trữ thẻ meta SEO cho từng trang hoặc sản phẩm.
-- 48. url_rewrites: Lưu trữ thông tin về chuyển hướng URL (cũ sang mới).
-- 49. seo_sitemaps: Lưu trữ thông tin sitemap giúp các công cụ tìm kiếm dễ dàng lập chỉ mục website.
-- 50. seo_ranking: Lưu trữ thứ hạng SEO của các trang và sản phẩm.
-- 51. seo_errors: Lưu trữ các lỗi SEO cần khắc phục (lỗi 404, không index được trang).
-- 52. backlinks: Lưu trữ thông tin về các liên kết ngược trỏ tới website.
-- 53. social_shares: Lưu trữ thông tin về các lần chia sẻ sản phẩm lên mạng xã hội.
-- 54. discount: Lưu trữ thông tin về các chương trình giảm giá (theo % hoặc số tiền).
-- 55. analytic: Lưu trữ các dữ liệu phân tích về hành vi người dùng trên website.
-- 56. languages: Lưu trữ các ngôn ngữ hỗ trợ trên website.
-- 57. email_templates: Lưu trữ các mẫu email cho hệ thống gửi đi (xác nhận đơn hàng, khôi phục mật khẩu).
-- 58. search_logs: Lưu trữ các truy vấn tìm kiếm của người dùng trên website.
-- 59. warehouse: Lưu trữ thông tin về kho hàng (tên kho, địa chỉ).
-- 60. stock_movements: Lưu trữ các chuyển động của tồn kho (nhập kho, xuất kho). -->


<!-- -- 1. settings: Các cài đặt toàn cục của hệ thống
CREATE TABLE settings (
    setting_id INT AUTO_INCREMENT PRIMARY KEY,
    setting_key VARCHAR(255) NOT NULL,
    setting_value TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 2. banners: Quảng cáo banner
CREATE TABLE banners (
    banner_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    link_url VARCHAR(255),
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 3. slides: Quản lý các slide hình ảnh
CREATE TABLE slides (
    slide_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    link_url VARCHAR(255),
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 4. pages: Quản lý các trang tĩnh của website
CREATE TABLE pages (
    page_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 5. admin_activity_logs: Ghi lại các hoạt động của quản trị viên
CREATE TABLE admin_activity_logs (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    admin_id INT NOT NULL,
    action VARCHAR(255) NOT NULL,
    details TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. notification: Thông báo gửi tới người dùng
CREATE TABLE notification (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status ENUM('unread', 'read') DEFAULT 'unread',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. users: Thông tin người dùng
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    status ENUM('active', 'inactive', 'banned') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 8. user_addresses: Địa chỉ giao hàng của người dùng
CREATE TABLE user_addresses (
    address_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    address_line1 VARCHAR(255),
    address_line2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    postal_code VARCHAR(20),
    country VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 9. user_social_account: Tài khoản mạng xã hội của người dùng
CREATE TABLE user_social_account (
    account_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    platform ENUM('facebook', 'google', 'twitter') NOT NULL,
    account_id_social VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 10. user_activity_logs: Ghi lại các hoạt động của người dùng
CREATE TABLE user_activity_logs (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    action VARCHAR(255) NOT NULL,
    details TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 11. loyalty_points: Điểm thưởng của người dùng
CREATE TABLE loyalty_points (
    points_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    points INT NOT NULL DEFAULT 0,
    transaction_type ENUM('earn', 'redeem') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 12. contacts: Thông tin liên hệ của khách hàng
CREATE TABLE contacts (
    contact_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 13. subscribers: Danh sách người đăng ký nhận thông tin
CREATE TABLE subscribers (
    subscriber_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 14. feedback: Phản hồi của khách hàng
CREATE TABLE feedback (
    feedback_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    feedback_text TEXT NOT NULL,
    rating INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 15. shipping_method: Phương thức vận chuyển
CREATE TABLE shipping_method (
    method_id INT AUTO_INCREMENT PRIMARY KEY,
    method_name VARCHAR(255) NOT NULL,
    method_description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 16. shipping_addresses: Địa chỉ giao hàng của người dùng
CREATE TABLE shipping_addresses (
    address_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    address_line1 VARCHAR(255),
    address_line2 VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    postal_code VARCHAR(20),
    country VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 17. delivery_methods: Phương thức giao hàng
CREATE TABLE delivery_methods (
    delivery_id INT AUTO_INCREMENT PRIMARY KEY,
    delivery_name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 18. categories: Các danh mục sản phẩm chính
CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    parent_id INT DEFAULT NULL, -- Nếu là danh mục con thì sẽ lưu ID của danh mục cha
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 19. sub_categories: Các danh mục phụ
CREATE TABLE sub_categories (
    sub_category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 20. brands: Thương hiệu sản phẩm
CREATE TABLE brands (
    brand_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 21. products: Sản phẩm
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    brand_id INT NOT NULL,
    category_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 22. product_attributes: Thuộc tính sản phẩm
CREATE TABLE product_attributes (
    attribute_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    attribute_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 23. product_attribute_values: Giá trị của thuộc tính sản phẩm
CREATE TABLE product_attribute_values (
    value_id INT AUTO_INCREMENT PRIMARY KEY,
    attribute_id INT NOT NULL,
    value VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 24. product_variant: Biến thể sản phẩm
CREATE TABLE product_variant (
    variant_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    variant_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 25. product_images: Hình ảnh sản phẩm
CREATE TABLE product_images (
    image_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 26. product_seo: SEO cho sản phẩm
CREATE TABLE product_seo (
    seo_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    meta_title VARCHAR(255),
    meta_description TEXT,
    meta_keywords VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 27. product_tags: Thẻ gắn sản phẩm
CREATE TABLE product_tags (
    tag_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    tag_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 28. product_histories: Lịch sử thay đổi của sản phẩm
CREATE TABLE product_histories (
    history_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    action VARCHAR(255) NOT NULL,
    details TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 29. product_performance: Hiệu suất sản phẩm
CREATE TABLE product_performance (
    performance_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    views INT DEFAULT 0,
    sales INT DEFAULT 0,
    rating DECIMAL(3, 2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 30. product_bundles: Gói sản phẩm
CREATE TABLE product_bundles (
    bundle_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    discount_percentage DECIMAL(5, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 31. coupons: Mã giảm giá
CREATE TABLE coupons (
    coupon_id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    discount_type ENUM('percentage', 'fixed') NOT NULL,
    discount_value DECIMAL(10, 2) NOT NULL,
    expiry_date TIMESTAMP NOT NULL,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 32. sales_data: Dữ liệu bán hàng
CREATE TABLE sales_data (
    sales_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    quantity_sold INT DEFAULT 0,
    revenue DECIMAL(10, 2) DEFAULT 0,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 33. reviews: Đánh giá sản phẩm
CREATE TABLE reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    user_id INT NOT NULL,
    rating INT NOT NULL,
    review_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 34. reviews_images: Hình ảnh đánh giá sản phẩm
CREATE TABLE reviews_images (
    review_image_id INT AUTO_INCREMENT PRIMARY KEY,
    review_id INT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 35. carts: Giỏ hàng người dùng
CREATE TABLE carts (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 36. abandoned_carts: Giỏ hàng bị bỏ quên
CREATE TABLE abandoned_carts (
    abandoned_cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    cart_id INT NOT NULL,
    abandoned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 37. orders: Đơn hàng
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    order_status ENUM('pending', 'completed', 'canceled') DEFAULT 'pending',
    total_amount DECIMAL(10, 2) NOT NULL,
    shipping_address TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 38. order_items: Các mục trong đơn hàng
CREATE TABLE order_items (
    order_item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 39. order_status_history: Lịch sử trạng thái đơn hàng
CREATE TABLE order_status_history (
    status_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    status ENUM('pending', 'completed', 'canceled') NOT NULL,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 40. order_coupons_usage: Sử dụng mã giảm giá trong đơn hàng
CREATE TABLE order_coupons_usage (
    usage_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    coupon_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 41. return_orders: Đơn hàng trả lại
CREATE TABLE return_orders (
    return_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    reason TEXT,
    return_status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 42. payment_method: Phương thức thanh toán
CREATE TABLE payment_method (
    method_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 43. transactions: Các giao dịch thanh toán
CREATE TABLE transactions (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    payment_method_id INT NOT NULL,
    transaction_status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    amount DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 44. blogs: Các bài viết blog
CREATE TABLE blogs (
    blog_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 45. staff: Thông tin nhân viên
CREATE TABLE staff (
    staff_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'manager', 'staff') DEFAULT 'staff',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 46. staff_password_reset: Khôi phục mật khẩu cho nhân viên
CREATE TABLE staff_password_reset (
    reset_id INT AUTO_INCREMENT PRIMARY KEY,
    staff_id INT NOT NULL,
    reset_token VARCHAR(255) NOT NULL,
    reset_token_expiry TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 47. seo_meta_tags: Thẻ meta SEO của website
CREATE TABLE seo_meta_tags (
    meta_tag_id INT AUTO_INCREMENT PRIMARY KEY,
    page_url VARCHAR(255) NOT NULL,
    meta_title VARCHAR(255),
    meta_description TEXT,
    meta_keywords VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 48. url_rewrites: Rewrite URL cho SEO
CREATE TABLE url_rewrites (
    rewrite_id INT AUTO_INCREMENT PRIMARY KEY,
    original_url VARCHAR(255) NOT NULL,
    new_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 49. seo_sitemaps: Sitemap SEO của website
CREATE TABLE seo_sitemaps (
    sitemap_id INT AUTO_INCREMENT PRIMARY KEY,
    page_url VARCHAR(255) NOT NULL,
    priority DECIMAL(3, 2) NOT NULL DEFAULT 0.5,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 50. seo_ranking: Xếp hạng SEO của các trang
CREATE TABLE seo_ranking (
    ranking_id INT AUTO_INCREMENT PRIMARY KEY,
    page_url VARCHAR(255) NOT NULL,
    position INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 51. seo_errors: Các lỗi SEO
CREATE TABLE seo_errors (
    error_id INT AUTO_INCREMENT PRIMARY KEY,
    page_url VARCHAR(255) NOT NULL,
    error_message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 52. backlinks: Các liên kết ngược (backlinks) cho SEO
CREATE TABLE backlinks (
    backlink_id INT AUTO_INCREMENT PRIMARY KEY,
    page_url VARCHAR(255) NOT NULL,
    referring_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 53. social_shares: Chia sẻ xã hội
CREATE TABLE social_shares (
    share_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    share_platform ENUM('facebook', 'twitter', 'instagram') NOT NULL,
    share_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 54. discount: Chính sách giảm giá
CREATE TABLE discount (
    discount_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    discount_percentage DECIMAL(5, 2) NOT NULL,
    discount_start TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    discount_end TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 55. analytic: Thống kê phân tích
CREATE TABLE analytic (
    analytic_id INT AUTO_INCREMENT PRIMARY KEY,
    analytic_type ENUM('page_views', 'product_views', 'sales') NOT NULL,
    value INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 56. languages: Ngôn ngữ hỗ trợ trên website
CREATE TABLE languages (
    language_id INT AUTO_INCREMENT PRIMARY KEY,
    language_code VARCHAR(10) NOT NULL,
    language_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 57. email_templates: Các mẫu email
CREATE TABLE email_templates (
    template_id INT AUTO_INCREMENT PRIMARY KEY,
    template_name VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    body TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 58. search_logs: Ghi lại các tìm kiếm của người dùng
CREATE TABLE search_logs (
    search_id INT AUTO_INCREMENT PRIMARY KEY,
    search_query VARCHAR(255) NOT NULL,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 59. warehouse: Kho hàng
CREATE TABLE warehouse (
    warehouse_id INT AUTO_INCREMENT PRIMARY KEY,
    warehouse_name VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 60. stock_movements: Sự thay đổi tồn kho
CREATE TABLE stock_movements (
    movement_id INT AUTO_INCREMENT PRIMARY KEY,
    warehouse_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    movement_type ENUM('in', 'out') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); -->
