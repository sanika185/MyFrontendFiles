document.getElementById('vacationForm').addEventListener('submit', function (event) {
      event.preventDefault();
      const preference = document.getElementById('preference').value;
      const resultDiv = document.getElementById('result');

      let destinations = [];

      if (preference === 'beach') {
            destinations = [
                  { name: 'Maldives', img: './images/maldives.jpg' },
                  { name: 'Bahamas', img: './images/bahamas.jpg' },
                  { name: 'Hawaii', img: './images/hawaii.jpg' }
            ];
      } else if (preference === 'mountain') {
            destinations = [
                  { name: 'Switzerland', img: './images/switzerland.jpg' },
                  { name: 'Colorado', img: './images/colorado.jpg' },
                  { name: 'Nepal', img: './images/nepal.jpg' }
            ];
      } else if (preference === 'historical') {
            destinations = [
                  { name: 'Rome', img: './images/rome.jpg' },
                  { name: 'Athens', img: './images/athens.jpg' },
                  { name: 'Cairo', img: './images/cairo.jpg' }
            ];
      } else {
            destinations = [
                  { name: 'Paris', img: './images/paris.jpg' }
            ];
      }

      resultDiv.innerHTML = destinations.map(dest => `
          <div class="destination">
              <img src="${dest.img}" alt="${dest.name}">
              <h3>${dest.name}</h3>
          </div>
      `).join('');
});
