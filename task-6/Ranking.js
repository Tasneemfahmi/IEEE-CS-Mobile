function nbaCup(resultSheet, toFind) {
    const games = resultSheet.split(",");
    let wins = 0, draws = 0, losses = 0, scored = 0, conceded = 0, points = 0;
    for (const game of games) {

        const teamScores = game.trim().split(/\s+/);
        const team1 = teamScores.slice(0, -2).join(' ');
        const team2 = teamScores.slice(-2).join(' ');


        if (team1 === toFind || team2 === toFind) {
            const score1 = parseInt(teamScores[teamScores.length - 2]);
            const score2 = parseInt(teamScores[teamScores.length - 1]);

            if (team1 === toFind) {
                scored += score1;
                conceded += score2;
            } else {
                scored += score2;
                conceded += score1;
            }

            if (score1 > score2) {
                wins++;
                points += 3;
            } else if (score1 === score2) {
                draws++;
                points += 1;
            } else {
                losses++;
            }
        }
    }
    return `${toFind}:W=${wins};D=${draws};L=${losses};Scored=${scored};Conceded=${conceded};Points=${points}`;
}