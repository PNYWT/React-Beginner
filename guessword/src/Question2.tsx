import React, { useState } from "react";
import { GameManager } from "./Manager/GameManager";
import type { Attempt } from "./Manager/GameManager";

const game = new GameManager();
const Question2 = () => {
  const [guess, setGuess] = useState<string>("");
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const handleSubmit = () => {
    if (guess.length !== 4) {
      alert("กรุณากรอกตัวอักษร 4 หลัก");
      return;
    }

    const attempt = game.submitGuess(guess);
    setAttempts([...attempts, attempt]);

    if (attempt.guess === game.getAnswer()) {
      alert("คำตอบถูกต้อง");
      game.resetGame();
      setAttempts([]);
      setShowAnswer(false);
    }

    setGuess("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toUpperCase();
    value = value.replace(/[^A-Z]/g, "");
    value = value.slice(0, 4);
    setGuess(value);
  };

  const handleToggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="container">
      <div className="section-container">
        <h1>เกมทายตัวอักษร 4 หลัก</h1>
        <div className="flex gap-2 m-4">
          <input
            value={guess}
            onChange={handleInputChange}
            placeholder="กรุณากรอกตัวอักษร 4 หลัก"
            maxLength={4}
            className="uppercase border rounded px-2 py-1 text-black"
          />
          <button onClick={handleSubmit} className="text-white">
            ทาย
          </button>
          <button onClick={handleToggleAnswer} className="text-white">
            ลองดูเฉลย
          </button>
        </div>
        {showAnswer && (
          <p className="text-red-600">คำตอบคือ: {game.getAnswer()}</p>
        )}
        <table className="table-auto border-collapse border border-black w-full text-center">
          <thead>
            <tr>
              <th className="border border-black px-2 py-1">คำตอบ</th>
              <th className="border border-black px-2 py-1">สุ่ม</th>
              <th className="border border-black px-2 py-1">ถูก/ทั้งหมด</th>
              <th className="border border-black px-2 py-1">ถูกตำแหน่ง</th>
              <th className="border border-black px-2 py-1">ครั้งที่</th>
            </tr>
          </thead>
          <tbody>
            {attempts.map((a, i) => (
              <tr key={i}>
                <td className="border border-black px-2 py-1">{a.answer}</td>
                <td className="border border-black px-2 py-1">{a.guess}</td>
                <td className="border border-black px-2 py-1">
                  {a.correctChars}
                </td>
                <td className="border border-black px-2 py-1">
                  {a.correctPositions}
                </td>
                <td className="border border-black px-2 py-1">
                  {a.attemptNumber}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Question2;
