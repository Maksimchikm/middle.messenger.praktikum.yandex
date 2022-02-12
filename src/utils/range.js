function range(start, end, step) {
	const rangeList = [];

	if (start < 0 && !end && !step) step = -1;

	if (step === undefined) step = 1;

	if (!end) {
		end = start;
		start = 0;
	}

	while (Math.abs(start) < Math.abs(end)) {
		if (step === 0) {
			rangeList.length = end - 1;
			rangeList.fill(start, 0, end);
			break;
		}
		rangeList.push(start);
		start = start + step;
	}

	return rangeList;
}