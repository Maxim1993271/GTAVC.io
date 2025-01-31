document.addEventListener("DOMContentLoaded", function() {
    // Отключение контекстного меню (правая кнопка мыши)
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Предотвращение копирования контента
    document.addEventListener('copy', function(e) {
        alert('Копирование контента запрещено!');
        e.preventDefault();
    });

    // Скрипт обновления часов
    function updateClock() {
        let now = new Date();
        let hours = now.getHours().toString().padStart(2, '0');
        let minutes = now.getMinutes().toString().padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}`;
    }

    setInterval(updateClock, 1000);
    updateClock();
});
