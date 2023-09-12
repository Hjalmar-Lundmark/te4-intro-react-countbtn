import { useState } from "react"
import './CountButton.css'

function CountButton(props) {
    let {start} = props;
    const [count, setCount] = useState(parseInt(start) || 0)
    return (
    <button className="countButton" onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    )

}

export default CountButton