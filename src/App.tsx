
import { useState, useEffect, useRef } from "react";

function App() {
  const [so, setSo] = useState(0);
  const oSo = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    console.log("Số hiện tại:", so);
  }, [so]);

  return (
      <div>
        <h1>Đếm số</h1>

        <h2 ref={oSo}>{so}</h2>

        <button onClick={() => setSo(so + 1)}>Tăng</button>
        <button onClick={() => setSo(so - 1)}>Giảm</button>
        <button onClick={() => setSo(0)}>Đặt lại</button>
      </div>
  );
}

export default App;
