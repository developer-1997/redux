
import { useDispatch , useSelector } from "react-redux"
import { decrement, increment } from "./store/counter/reducer"

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.count)
    return (
        <div>
            Counter - {count}

            <button onClick={ () => dispatch(increment())}>
                INCREMENT
            </button>

            <button onClick={ () => dispatch(decrement())}>
                DECREMENT
            </button>
        </div>
    )
}


export default Counter;