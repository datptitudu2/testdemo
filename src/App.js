import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="https://ript.vn/wp-content/uploads/2023/08/RIPT-Logo-2-removebg-preview.png" alt="Logo RIPT" />
        </div>
        <nav>
          <ul>
            <li><a href="#">TRANG CHỦ</a></li>
            <li><a href="#">THỰC ĐƠN</a></li>
            <li><a href="#">LIÊN HỆ</a></li>
          </ul>
        </nav>
        <div className="search-login">
          <input type="text" placeholder="Tìm kiếm" />
          <button><i className='bx bx-search-alt-2'></i></button>
          <a href="#">Đăng nhập</a>
          <a href="#"><i className='bx bxs-cart'></i></a>
        </div>
      </header>

      {/* Banner */}
      <section className="banner">
        {/* Background image is set in CSS */}
      </section>

      {/* Main Content */}
      <main>
        <div className="menu-categories">
          <button className="active">Mới nhất</button>
          <button>Gần đây</button>
          <button>Đã lưu</button>
        </div>

        <div className="menu-grid">
          <div className="menu-item">
            <img src="https://cdn.tcdulichtphcm.vn/upload/1-2024/images/2024-03-15/1710445730-z1.jpg" alt="Bánh mì" />
            <h3>Bánh mì</h3>
            <p>10.000 VND - 25.000 VND</p>
            <div className="item-details">
              <span>🧑‍🤝‍🧑 26</span>
              <span>💬 113</span>
              <button>Lưu</button>
            </div>
          </div>
          <div className="menu-item">
            <img src="https://thophat.com/wp-content/uploads/2022/03/BB-Chay-400g-1.jpg" alt="Bánh bao" />
            <h3>Bánh bao</h3>
            <p>5.000 VND - 25.000 VND</p>
            <div className="item-details">
              <span>🧑‍🤝‍🧑 26</span>
              <span>💬 113</span>
              <button>Lưu</button>
            </div>
          </div>
          <div className="menu-item">
            <img src="https://i.ytimg.com/vi/gZt9CsZCpDM/maxresdefault.jpg" alt="Xôi" />
            <h3>Xôi</h3>
            <p>10.000 VND - 25.000 VND</p>
            <div className="item-details">
              <span>🧑‍🤝‍🧑 26</span>
              <span>💬 113</span>
              <button>Lưu</button>
            </div>
          </div>
          <div className="menu-item">
            <img src="https://cdn.tgdd.vn/Files/2021/07/19/1369164/cach-nau-pho-theo-phong-cach-toc-hanh-khong-can-ham-xuong-202208312044335902.jpg" alt="Phở" />
            <h3>Phở</h3>
            <p>25.000 VND - 50.000 VND</p>
            <div className="item-details">
              <span>🧑‍🤝‍🧑 26</span>
              <span>💬 113</span>
              <button>Lưu</button>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
          <div className="footer-sections">
            {/* Giới thiệu */}
            <div className="footer-about">
              <h3>Giới thiệu</h3>
              <p>Căng tin phục vụ các bữa ăn tươi ngon, đảm bảo vệ sinh cho nhân viên, sinh viên của Viện. Chúng tôi luôn nỗ lực mang đến dịch vụ tốt nhất với menu đa dạng.</p>
            </div>

            <div className="footer-contact">
              <h3>Liên hệ</h3>
              <p>Địa chỉ: Số 122 Đường Hoàng Quốc Việt, Quận Cầu Giấy, Thành Phố Hà Nội</p>
              <p>Email: <a href="mailto:iuptitclub@gmail.com">iuptitclub@gmail.com</a></p>
              <p>Điện thoại: 0000000000</p>
            </div>

            <div className="footer-social">
              <h3>Kết nối với chúng tôi</h3>
              <a href="#" className="social-link"><i className='bx bxl-facebook-circle'></i></a>
              <a href="#" className="social-link"><i className='bx bxl-instagram'></i></a>
              <a href="#" className="social-link"><i className='bx bxl-youtube'></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; Viện Khoa Học Kĩ Thuật Bưu Điện</p>
        </div>
      </footer>
    </>
  );
}

export default App;
