
import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [so, setSo] = useState(0);
  const oSo = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    console.log("Số hiện tại:", so);
  }, [so]);
    const [hoTen, setHoTen] = useState("");
    const [email, setEmail] = useState("");
  return (
      <div className="container">
          <div className="dem-so">
              <h1>Đếm số</h1>

              <h2 ref={oSo}>{so}</h2>

              <button onClick={() => setSo(so + 1)}>Tăng</button>
              <button onClick={() => setSo(so - 1)}>Giảm</button>
              <button onClick={() => setSo(0)}>Đặt lại</button>
          </div>

          <div className="form">
              <h1>Form nhập liệu</h1>

              <label>Họ và tên</label>
              <input
                  type="text"
                  placeholder="Nhập họ tên"
                  value={hoTen}
                  onChange={(e) => setHoTen(e.target.value)}
              />

              <label>Email</label>
              <input
                  type="email"
                  placeholder="Nhập email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />

              <button onClick={() => alert("Họ tên: " + hoTen + "\nEmail: " + email)}>
                  Gửi
              </button>
          </div>
      </div>
  );
}

export default App;
