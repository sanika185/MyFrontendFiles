function calculateFinalAmount() {

      const totalPurchase = parseFloat(document.getElementById('totalPurchase').value);
      const loyaltyCard = document.getElementById('loyaltyCard').value;

      let discountRate = 0;

      if (totalPurchase >= 50 && totalPurchase <= 100) {
            discountRate = 0.10;
      } else if (totalPurchase > 100) {
            if (loyaltyCard === 'golden') {
                  discountRate = 0.15;
            } else if (loyaltyCard === 'silver') {
                  discountRate = 0.12;
            } else {
                  discountRate = 0.05;
            }
      }

      const discountAmount = totalPurchase * discountRate;
      const finalAmount = totalPurchase - discountAmount;

      document.getElementById('result').textContent = `The final amount to pay is: $${finalAmount.toFixed(2)}`;
}
