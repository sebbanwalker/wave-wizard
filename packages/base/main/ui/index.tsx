import { forwardRef, useImperativeHandle, useRef } from "react";
import { Lesson } from "@sebban/lessons";
import "./style.scss";

export interface MainContentHandle {
	handleNavigate: (lessonId: string) => void;
}

export const MainContent = forwardRef<MainContentHandle>((_, ref) => {
	const contentRef = useRef<HTMLDivElement>(null);

	const easeInOutQuad = (t: number) =>
		t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

	const smoothScrollTo = (
		container: HTMLElement,
		targetY: number,
		duration: number
	) => {
		const startingY = container.scrollTop;
		const diff = targetY - startingY;
		let start: number | null = null;

		const step = (timestamp: number) => {
			if (start === null) start = timestamp;
			const time = timestamp - start;
			let percent = time / duration;
			percent = easeInOutQuad(percent);
			if (time >= duration) percent = 1;
			container.scrollTop = startingY + diff * percent;
			if (time < duration) {
				window.requestAnimationFrame(step);
			}
		};

		window.requestAnimationFrame(step);
	};
	useImperativeHandle(ref, () => ({
		handleNavigate: (lessonId: string) => {
			const targetElement = document.getElementById(lessonId);
			if (contentRef.current && targetElement) {
				const topPos =
					targetElement.getBoundingClientRect().top +
					contentRef.current.scrollTop -
					contentRef.current.getBoundingClientRect().top;
				smoothScrollTo(contentRef.current, topPos, 200);
			}
		},
	}));

	return (
		<section className="main-content" ref={contentRef}>
			<div id="lesson-1" className="lesson">
				<Lesson index={0} />
			</div>
			<div id="lesson-2" className="lesson">
				<Lesson index={1} />
			</div>
			<div id="lesson-3" className="lesson">
				<Lesson index={1} />
			</div>
		</section>
	);
});
