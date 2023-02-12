import { useDispatch, useSelector } from "react-redux";
import {
	increment,
	decrement,
	reset,
	double,
	incrementByAmount,
} from "./counterSlice";

const Counter = () => {
	const count = useSelector((state) => state.counterR.count);
	const dispatch = useDispatch();

	return (
		<section>
			<p>{count}</p>
			<div className="">
				<button onClick={() => dispatch(increment())}>+</button>
				<button onClick={() => dispatch(decrement())}>-</button>
				<button onClick={() => dispatch(reset())}>0</button>
				<button onClick={() => dispatch(double())}>X2</button>
				<input
					type="text"
					onChange={({ target }) => dispatch(incrementByAmount(target.value))}
				/>
			</div>
		</section>
	);
};

export default Counter;
