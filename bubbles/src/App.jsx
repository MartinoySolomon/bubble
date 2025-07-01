import "./App.css";
import { textArray } from "./text.jsx";
import Bubble from "./bubble.jsx";

function App() {
	function renderTextBubbles() {
		return textArray.map((textItem) => {
			return <Bubble text={textItem.text} />;
		});
	}

	return (
		<>
			<div className="main-container">{renderTextBubbles()}</div>
		</>
	);
}

export default App;
