/*const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [70, 68, 72] },
  { name: "Charlie", scores: [100, 100, 100] }
];

Output:
[
  { name: "Alice", average: 89, grade: "B" },
  { name: "Bob", average: 70, grade: "C" },
  { name: "Charlie", average: 100, grade: "A" }
]*/
/*complexity=O(m*n)*/
function generateReport(students) { 
    /*map iterates over students arrays so O(n) */
    return students.map(student => {/*reduce iterates over the score array so O(m) */
        const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
        let grade;
        if (average >= 90) {
            grade = 'A';
        } else if (average >= 80) {
            grade = 'B';
        } else if (average >= 70) {
            grade = 'C';
        } else if (average >= 60) {
            grade = 'D';
        } else {
            grade = 'F'; 
        }
        return { name: student.name, average: Math.round(average), grade: grade };
    });
}
const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
  ];
  
console.log(generateReports(students));