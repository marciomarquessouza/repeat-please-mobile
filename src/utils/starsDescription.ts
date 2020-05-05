export const starsDescription = (stars: number): string => {
	switch (stars) {
		case 0 || 1:
			return 'Bad';
		case 2:
			return 'Good';
		case 3:
			return 'excelent';
		default:
			return 'none';
	}
};
