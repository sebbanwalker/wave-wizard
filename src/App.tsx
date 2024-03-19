import { AppRoutes } from "@sebban/router";
import { AudioContextProvider } from "@sebban/audio";
import { ParticleSystem } from "@sebban/particles";

function App() {
	return (
		<AudioContextProvider>
			<ParticleSystem />
			<AppRoutes />
		</AudioContextProvider>
	);
}

export default App;
