'use client'
// import { useState } from "react"
// import { Button } from "./ui/button"
// import { MinusIcon, PlusIcon } from "lucide-react"
import Comments from "@/components/comments"

export default function Counter() {
    // const [count, setCount] = useState(0);
    // const increment = () => setCount(count + 1)
    // const decrement = () => setCount(count - 1)

    return (
        <div className="mt-7">
            {/* <div className="flex items-center mt-4 gap-3">
                <Button size={"icon"} onClick={decrement}>
                    <MinusIcon />
                </Button>
                <p>Current Vote: {count}</p>
                <Button size={"icon"} onClick={increment}>
                    <PlusIcon />
                </Button>
            </div> */}
            <Comments/>
        </div>
    )
}