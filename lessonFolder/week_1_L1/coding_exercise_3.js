let score1a, score2a, score3a, score1b, score2b, score3b;
score1a = Number(prompt("Enter first score of Team A: "));
score2a = Number(prompt("Enter second score of Team A: "));
score3a = Number(prompt("Enter third score of Team A: "));

score1b = Number(prompt("Enter first score of Team B: "));
score2b = Number(prompt("Enter second score of Team B: "));
score3b = Number(prompt("Enter third score of Team B: "));

total_score_a = score1a + score2a + score3a;
total_score_b = score1b + score2b + score3b;

if (total_score_a > total_score_b) {
    console.log("Team A win the trophy");
} else if (total_score_b > total_score_a) {
    console.log("Team B win the trophy0");
} else {
    console.log("Both win the trophy");
}
