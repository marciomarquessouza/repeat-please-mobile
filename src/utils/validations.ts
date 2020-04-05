export const emailIsValid = (email: string) =>
	/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
