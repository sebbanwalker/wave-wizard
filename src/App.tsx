import { AppRoutes } from "@sebban/router";
import { AudioContextProvider } from "@sebban/audio";

function App() {
	return (
		<AudioContextProvider>
			<AppRoutes />
		</AudioContextProvider>
	);
}

export default App;
