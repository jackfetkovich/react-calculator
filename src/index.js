import { react, useState } from 'react';
import ReactDOM from 'react-dom';
import style from '../src/Style.scss';

function Calculator() {
	const [expression, setExpression] = useState('');

	return (
		<div className="calculator" >
			<Screen expression={expression}></Screen>
			<div className='buttonRow'>
				<CalcButton
					value={1}
					setExpression={setExpression}
					expression={expression}
				/>
				<CalcButton
					value={2}
					setExpression={setExpression}
					expression={expression}
				/>
				<CalcButton
					value={3}
					setExpression={setExpression}
					expression={expression}
				/>
				<CalcButton
					value={'+'}
					setExpression={setExpression}
					expression={expression}
				/>
			</div>
			<div className='buttonRow'>
				<CalcButton
					value={4}
					setExpression={setExpression}
					expression={expression}
				/>
				<CalcButton
					value={5}
					setExpression={setExpression}
					expression={expression}
				/>
				<CalcButton
					value={6}
					setExpression={setExpression}
					expression={expression}
				/>
				<CalcButton
					value={'-'}
					setExpression={setExpression}
					expression={expression}
				/>
			</div>
			<div className='buttonRow'>
				<CalcButton
					value={7}
					setExpression={setExpression}
					expression={expression}
				/>
				<CalcButton
					value={8}
					setExpression={setExpression}
					expression={expression}
				/>
				<CalcButton
					value={9}
					setExpression={setExpression}
					expression={expression}
				/>
				<CalcButton
					value={'*'}
					setExpression={setExpression}
					expression={expression}
				/>
			</div>
			<div className='buttonRow'>
				<CalcButton
					value={'.'}
					setExpression={setExpression}
					expression={expression}
				/>
				<CalcButton
					value={0}
					setExpression={setExpression}
					expression={expression}
				/>
				<button
					className="calcButton"
					onClick={() => setExpression(eval(expression))}
				>
					=
				</button>
				<CalcButton
					value={'/'}
					setExpression={setExpression}
					expression={expression}
				/>
			</div>
			<div>
				<button className="calcButton" onClick={() => setExpression('')}>
					Clear
				</button>
			</div>
		</div>
	);
}

function CalcButton({ value, setExpression, expression }) {
	const addValueToExpression = () => {
		console.log(typeof expression);
		setExpression(expression + value);
	};


	return (
		<button
			className="calcButton"
			onClick={() => {
				addValueToExpression();
			}}
		>
			{value}
		</button>
	);
}

function Screen({ expression }) {
	return (
		<div className="screen">
			<p>{expression}</p>
		</div>
	);
}

function App() {
	return (
		<div className="container">
			<Calculator />
		</div>
	);
}

ReactDOM.render(<App style={style} />, document.getElementById('root'));
