import { useEffect, useState } from "react";
import { Trophy } from "lucide-react";

// 🎯 Get message based on percentage score
const getScoreMessage = (percentage) => {
  if (percentage === 0) return "Let’s get started!";
  if (percentage < 40) return "You’ve got room to grow!";
  if (percentage < 70) return "Keep up the good work!";
  if (percentage < 90) return "You're doing great!";
  return "Excellent consistency! 🏆";
};

// 🎯 Calculate average percentage score (out of 7)
const getAverageScorePercentage = (habitData) => {
  if (!habitData || habitData.length === 0) return 0;

  const validScores = habitData
    .map((entry) => Number(entry.score))
    .filter((score) => !isNaN(score));

  if (validScores.length === 0) return 0;

  const total = validScores.reduce((sum, score) => sum + score, 0);
  const avg = total / validScores.length;
  const percentage = (avg / 7) * 100;

  return Math.round(percentage);
};

const HabitScoreCard = ({ habitData = [] }) => {
  const [percentageScore, setPercentageScore] = useState(0);

  useEffect(() => {
    const avgPercent = getAverageScorePercentage(habitData);
    setPercentageScore(avgPercent);
  }, [habitData]);

  const message = getScoreMessage(percentageScore);
  const color =
    percentageScore >= 90 ? "text-yellow-400" :
    percentageScore >= 70 ? "text-yellow-500" :
    percentageScore >= 40 ? "text-yellow-600" : "text-yellow-700";

  return (
    <div className="flex flex-col items-center justify-center">
      <Trophy className="text-yellow-500 mb-2" size={32} />
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Habit Score</h2>
      <p className={`text-3xl font-bold ${color} mt-2`}>{percentageScore}%</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{message}</p>

      <progress
        className="progress progress-warning w-full mt-4"
        value={percentageScore}
        max="100"
      ></progress>
    </div>
  );
};

export default HabitScoreCard;
