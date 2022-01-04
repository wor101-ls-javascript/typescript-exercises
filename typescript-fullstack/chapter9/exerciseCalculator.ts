interface ExerResult {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number 
}

export function calculateExercises(daily_exercise_hours: number[], target: number): ExerResult {
  const periodLength = daily_exercise_hours.length;
  const trainingDays = daily_exercise_hours.filter(day => day > 0).length;
  const average = daily_exercise_hours.reduce((sum, num) => sum + num) / periodLength;
  const rating = Math.round(average);
  const success = average >= target;
  let ratingDescription = '';

  switch (true) {
    case (rating < target):
      ratingDescription = 'You suck at this';
      break;
    case (rating === target): 
      ratingDescription = 'not too bad but could be better';
      break;
    case (rating > target): 
      ratingDescription = 'Well done!';
      break;
    default:
      ratingDescription = 'ERROR';   
  }

  return {
    periodLength: periodLength,
    trainingDays: trainingDays,
    success: success,
    rating: rating,
    ratingDescription: ratingDescription,
    target: target,
    average: average, 
  }
}

//console.log(calculateExercises([1, 0, 2, 4.5, 3, 1, 0, 4], 2))