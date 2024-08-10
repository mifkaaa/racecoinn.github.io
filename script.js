document.getElementById('startButton').addEventListener('click', function() {
    const hamster = document.getElementById('hamster');
    const result = document.getElementById('result');
    const trackWidth = document.querySelector('.track').clientWidth;
    
    // Сброс позиции хомячка
    hamster.style.left = '0px';
    result.textContent = '';

    // Генерируем случайное время для гонки
    const raceDuration = Math.floor(Math.random() * 3000) + 2000; // от 2 до 5 секунд

    setTimeout(() => {
        hamster.style.left = (trackWidth - 50) + 'px'; // Конечная позиция
        result.textContent = 'Хомяк финишировал!';
    }, raceDuration);
});
