import { AppRoutes } from "@sebban/router";
import { AudioContextProvider } from "@sebban/audio";

function App() {
	console.log("App rendered");
	return (
		<AudioContextProvider>
			<AppRoutes />
		</AudioContextProvider>
	);
}

export default App;
