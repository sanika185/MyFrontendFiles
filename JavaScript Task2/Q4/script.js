
let applicationForm = document.getElementById('applicationForm');
applicationForm.addEventListener('submit', function (event) {
      event.preventDefault();


      let degree = document.getElementById('degree').value;
      let experience = parseInt(document.getElementById('experience').value, 10);


      let result = '';


      if (degree === 'phd' && experience >= 5) {
            result = 'Congratulations! You are a top candidate with a Ph.D. and sufficient experience.';
      } else if (degree === 'master' && experience >= 3) {
            result = 'Great! You have a Master\'s degree and the required experience.';
      } else if (degree === 'bachelor' && experience >= 2) {
            result = 'Good! You have a Bachelor\'s degree and meet the minimum experience requirement.';
      } else {
            result = 'Unfortunately, you do not meet the criteria for the position.';
      }

      document.getElementById('result').textContent = result;
});

