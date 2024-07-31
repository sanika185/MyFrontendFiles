function calculateBill() {
      const totalBillInput = document.getElementById('totalBill');
      const personInput = document.getElementById('person');
      const totalBill = parseFloat(document.getElementById('totalBill').value);
      const person = parseInt(document.getElementById('person').value);
  
      if (isNaN(totalBill) || isNaN(person) || totalBill <= 0 || person <= 0) {
          document.getElementById('result').innerText = "Please enter valid inputs.";
          return;
      }
  
      let taxRate = 0.08;
      let tipRate;
  
      let taxBill = totalBill + (totalBill * taxRate);
  
      if (taxBill < 50) {
          tipRate = 0.15;
      } else if (taxBill <= 100) {
          tipRate = 0.20;
      } else {
          tipRate = 0.25;
      }
  
      const tipAmount = taxBill * tipRate;
      const finalBill = taxBill + tipAmount;
  
      const amountPerPerson = finalBill / person;
  
      document.getElementById('result').innerText = `Each person should pay: $${amountPerPerson.toFixed(2)}`;
      totalBillInput.value = '';
      personInput.value = '';
  }
  