const letterPairs = (str: string): string[] => {
	const pairs: string[] = [];
	str
		.substring(1)
		.replace(/[^a-zA-Z1-9]/g, '')
		.split('')
		.reduce((result, letter) => {
			pairs.push(result + letter);
			return letter;
		}, str[0]);
	return pairs;
};

const intersection = (pairs1: string[], pairs2: string[]) => {
	const matchPairs: string[] = [];
	pairs1.reduce((pairsReference, pair) => {
		const index = pairsReference.indexOf(pair);
		index >= 0 && matchPairs.push(pairsReference.splice(index, 1).join(''));
		return pairsReference;
	}, pairs2);
	return matchPairs;
};

export const compareString = (str1: string, str2: string) => {
	const pairs1 = letterPairs(str1.toUpperCase());
	const pairs2 = letterPairs(str2.toUpperCase());
	const union = pairs1.length + pairs2.length;
	return (2 * intersection(pairs1, pairs2).length) / union;
};

export const stringsDifference = (strToCheck: string, reference: string) => {
	const matchStrs: { str: string; matches: boolean }[] = [];
	strToCheck
		.toUpperCase()
		.split('')
		.reduce((strsReference, str) => {
			const index = strsReference.indexOf(str);
			matchStrs.push({
				str: index >= 0 ? strsReference.splice(index, 1).join('') : str,
				matches: index >= 0,
			});
			return strsReference;
		}, reference.toUpperCase().split(''));
	return matchStrs;
};

export const hightScoreWord = (str: string, reference: string) =>
	str
		.toUpperCase()
		.split(' ')
		.reduce(
			(highScore, word) => {
				const score = compareString(word, reference);
				return score >= highScore.score ? { word, score } : highScore;
			},
			{ word: '', score: 0 },
		);
