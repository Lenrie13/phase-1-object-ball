const gameObject = () => {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },

                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

// console.log(gameObject());


// PART TWO
// Number of points scored by a player
const numPointsScored = (playerName) => {
    const game = gameObject();

    if (game.home.players[playerName]) {
        return game.home.players[playerName].points;

    } else if (game.away.players[playerName]) {
        return game.away.players[playerName].points;

    } else {
        return "player not found!"
    }
};

console.log(numPointsScored("Mason Plumlee"));

// A player's shoe size
const shoeSize = (playerName) => {
    const game = gameObject();

    if (game.home.players[playerName]) {
        return game.home.players[playerName].shoe;

    } else if (game.away.players[playerName]) {
        return game.away.players[playerName].shoe;

    } else {
        return "player not found!"
    }
};
console.log(shoeSize("DeSagna Diop"));

// Team colors
const teamColors = (teamName) => {
    const game = gameObject();

    if (game.home.teamName === teamName) {
        return game.home.colors;

    } else if (game.away.teamName === teamName) {
        return game.away.colors;

    } else {
        return "team not found!"
    }
};
console.log(teamColors("Charlotte Hornets"));

// Team names
const teamNames = () => {
    const game = gameObject();

    return [game.home.teamName, game.away.teamName]
    }
console.log(teamNames());

// Returns jersey number for teams
const playerNumbers = (teamName) => {
    const game = gameObject();

if (game.home.teamName === teamName) {
    return Object.values(game.home.players).map(player => player.number);

} else if (game.away.teamName === teamName) {
    return Object.values(game.away.players).map(player => player.number);

} else {
    return [];
}
};
console.log(playerNumbers("Brooklyn Nets"))

// Player Stats- returns an object of the players stats
const playerStats = (playerName) => {
    const game = gameObject();

    if (game.home.players[playerName]) {
        return game.home.players[playerName];
    }
    
    else if (game.away.players[playerName]) {
        return game.away.players[playerName];
    }
    
    else {
        return "player not found!";
    }
};
console.log(playerStats("Jerry Tomkins"));

// Player with the biggest shoe size
const bigShoeRebounds = () => {
    const game = gameObject();
    let largestShoeSize = -Infinity;
    let playerWithLargestShoe = null;

    for (let player in game.home.players) {
        if (game.home.players[player].shoe > largestShoeSize) {
            largestShoeSize = game.home.players[player].shoe;
            playerWithLargestShoe = player;
        }
    }

    for (let player in game.away.players) {
        if (game.away.players[player].shoe > largestShoeSize) {
            largestShoeSize = game.away.players[player].shoe;
            playerWithLargestShoe = player;
        }
    }
    if (playerWithLargestShoe) {
        return game.home.players[playerWithLargestShoe].rebounds || game.away.players[playerWithLargestShoe].rebounds;
    } else {
        return "No player found";
    }
};
console.log(bigShoeRebounds()); 

// Player with the most points scored
const mostPointsScored = () => {
    const game = gameObject();
    let highestPoints = -Infinity;
    let playerWithMostPoints = null;

    for (let player in game.home.players) {
        if (game.home.players[player].points > highestPoints) {
            highestPoints = game.home.players[player].points;
            playerWithMostPoints = player;
        }
    }

    for (let player in game.away.players) {
        if (game.away.players[player].points > highestPoints) {
            highestPoints = game.away.players[player].points;
            playerWithMostPoints = player;
        }
    }

    return playerWithMostPoints;
};
console.log(mostPointsScored()); 

// Finding the winning team
const winningTeam = () => {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;

    for (let player in game.home.players) {
        homePoints += game.home.players[player].points;
    }

    for (let player in game.away.players) {
        awayPoints += game.away.players[player].points;
    }

    if (homePoints > awayPoints) {
        return game.home.teamName;
    } else if (awayPoints > homePoints) {
        return game.away.teamName;
    } else {
        return "It's a tie!";
    }
};
console.log(winningTeam()); 

// Player with the longest name
const playerWithLongestName = () => {
    const game = gameObject();
    let longestNameLength = -Infinity;
    let playerWithLongestName = null;

    for (let player in game.home.players) {
        if (player.length > longestNameLength) {
            longestNameLength = player.length;
            playerWithLongestName = player;
        }
    }

    for (let player in game.away.players) {
        if (player.length > longestNameLength) {
            longestNameLength = player.length;
            playerWithLongestName = player;
        }
    }

    return playerWithLongestName;
};
console.log(playerWithLongestName()); 

// To determine if player with the longest name steals a ton
const doesLongNameStealATon = () => {
    const game = gameObject();
    const longestNamePlayer = playerWithLongestName();
    let maxSteals = -Infinity;
    let playerWithMostSteals = null;

    for (let player in game.home.players) {
        if (game.home.players[player].steals > maxSteals) {
            maxSteals = game.home.players[player].steals;
            playerWithMostSteals = player;
        }
    }

    for (let player in game.away.players) {
        if (game.away.players[player].steals > maxSteals) {
            maxSteals = game.away.players[player].steals;
            playerWithMostSteals = player;
        }
    }

    return playerWithMostSteals === longestNamePlayer;
};
console.log(doesLongNameStealATon());

