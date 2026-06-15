const marksList = [40, 60, 80, 90, 30];

const passingMarks = marksList.filter(mark => mark > 50);
const averagePassing = passingMarks.reduce((sum, mark) => sum + mark, 0) / passingMarks.length;

console.log(averagePassing);
// Output: 76.66666666666667