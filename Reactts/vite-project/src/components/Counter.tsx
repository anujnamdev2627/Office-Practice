import { useState } from "react"

export function Counter() {

    const [count, setCount] = useState<number>(0);
    return (
        <div>
            <p>Cups ORdered ; {count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}> Order Cups</button>
        </div>
    )
}