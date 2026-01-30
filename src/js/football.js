    field.onclick = function(event) {

      // координати поля щодо вікна браузера
      let fieldCoords = this.getBoundingClientRect();

      // м’яч має абсолютне позиціювання (position:absolute), поле -- відносне (position:relative)
      // таким чином, координати м’яча розраховуються відносно внутрішнього, верхнього лівого кута поля.
      let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
      };

      // забороняємо перетинати верхню межу поля
      if (ballCoords.top < 0) ballCoords.top = 0;

      // забороняємо перетинати ліву межу поля
      if (ballCoords.left < 0) ballCoords.left = 0;


      // забороняємо перетинати праву межу поля
      if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
      }

      // забороняємо перетинати нижню межу поля
      if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
      }

      ball.style.left = ballCoords.left + 'px';
      ball.style.top = ballCoords.top + 'px';
    }