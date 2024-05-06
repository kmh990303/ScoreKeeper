import { useState } from "react";

export default function ScoreKeeper({ numPlayers = 3, target = 5}) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));

    const incrementScore = (i) => {
        setScores((prevScores) => {
            return prevScores.map((score, idx) => {
                if (i === idx) return score + 1;
                return score;
            })
        })
    }

    const reset = () => {
        setScores(new Array(numPlayers).fill(0));
    }
    
    return (
        <div>
            <h1>ScoreKeeper</h1>
            <ul>
                {scores.map((score , idx) => {
                    return (
                        <li key={idx}>
                            Player: {score}
                            <button onClick={() => incrementScore(idx)}>+1</button>
                            {score >= target && "Winner!"}
                        </li>
                    )
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
