function superbowlWin(records) {
    const WinningRecord = records.find(record => record.result ==="W")
    return WinningRecord = WinningRecord.year ;  undefined;
}

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},

];

const winningYear = superbowlWin(superBowlRecords);
console.log(winningYear);