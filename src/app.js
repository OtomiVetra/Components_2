import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const isLastIndex = activeIndex === steps.length - 1;
	const isFirstIndex = activeIndex === 0;

	const handleStepUp = () => {
		setActiveIndex((prevState) => prevState + 1);
	};
	const handleStepDown = () => {
		setActiveIndex((prevState) => prevState - 1);
	};
	const handleStepReset = () => {
		setActiveIndex(0);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>{steps[activeIndex]['content']}</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, index) => (
							<li
								key={step.id}
								className={
									styles['steps-item'] +
									' ' +
									(index < activeIndex && styles['done']) +
									' ' +
									(index === activeIndex && styles['active'])
								}
							>
								<button
									onClick={() => setActiveIndex(index)}
									className={styles['steps-item-button']}
								>
									{index + 1}
								</button>
								{step.title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							disabled={isFirstIndex}
							onClick={handleStepDown}
							className={styles.button}
						>
							Назад
						</button>
						<button
							onClick={isLastIndex ? handleStepReset : handleStepUp}
							className={styles.button}
						>
							{isLastIndex ? 'Начать заного' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
