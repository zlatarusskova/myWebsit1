function calculateChange() {
    const amountInput = document.getElementById('amount');
    const resultElement = document.getElementById('result');
  
    const amount = parseInt(amountInput.value);
  
    if (isNaN(amount) || amount <= 0) {
      resultElement.textContent = 'Введите корректную сумму';
      return;
    }
  
    const denominations = [500, 100, 10, 2];
    let remainingAmount = amount;
    let result = '';
  
    denominations.forEach(denomination => {
      const count = Math.floor(remainingAmount / denomination);
      if (count > 0) {
        result += `${count} купюр по ${denomination} рублей, `;
        remainingAmount %= denomination;
      }
    });
  
    result = result.slice(0, -2); 
  
    resultElement.textContent = `Размен: ${result}`;
  }