import React from "react";
import { Particles } from "react-particles";

export const ParticleSystem = () => {
	return (
		<div className="particles">
			<Particles
				options={{
					fpsLimit: 60,
					interactivity: {
						detectsOn: "canvas",
						events: {
							resize: true,
						},
					},
					particles: {
						color: {
							value: "#00000",
						},
						number: {
							density: {
								enable: true,
								area: 1080,
							},
							limit: 0,
							value: 400,
						},
						opacity: {
							animation: {
								enable: true,
								minimumValue: 0.05,
								speed: 1,
								sync: false,
							},
							random: {
								enable: true,
								minimumValue: 0.05,
							},
							value: 1,
						},
						shape: {
							type: "circle",
						},
						size: {
							random: {
								enable: true,
								minimumValue: 0.5,
							},
							value: 1,
						},
					},
				}}
			/>
		</div>
	);
};
