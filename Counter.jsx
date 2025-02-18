import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ เพิ่ม</button>
      <button onClick={() => setCount(count - 1)}>➖ ลด</button>
    </div>
  );
}

export default Counter;