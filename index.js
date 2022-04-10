function superbowlWin(record) {
    function isWinningYear(year) {
        return year.result === "W";
    }

    const winningYear = record.find(isWinningYear);

    if (winningYear) {
        return winningYear.year;
    }
}