async function getRandomAdvice() {
  try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      document.querySelector('.advice').textContent = data.slip.advice;
  } 
  catch (error) {
      document.querySelector('.advice').textContent = 'Failed to fetch advice. Please try again.';
  }
}