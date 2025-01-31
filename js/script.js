// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.pricetime-filter');
    const dayFilters = document.querySelectorAll('.pricetime-day-filter');
    const pricetimeCards = document.querySelectorAll('.pricetime-card');

    // Функция для обновления отображения на основе выбранных фильтров
    function updateDisplay() {
        const selectedType = document.querySelector('.pricetime-filter.active').getAttribute('data-target');
        const selectedDay = document.querySelector('.pricetime-day-filter.active').getAttribute('data-type');

        // Скрываем все карточки и показываем только те, которые соответствуют выбранному типу и дню
        pricetimeCards.forEach(card => {
            if (card.getAttribute('data-type') === selectedType && card.getAttribute('data-day') === selectedDay) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Обработчики событий для фильтров по типу (дети/взрослые)
    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Убираем активный класс с всех фильтров
            filters.forEach(f => f.classList.remove('active'));

            // Добавляем активный класс на текущий фильтр
            this.classList.add('active');

            // Обновляем отображение
            updateDisplay();
        });
    });

    // Обработчики событий для фильтров по дням (будни/выходные)
    dayFilters.forEach(dayFilter => {
        dayFilter.addEventListener('click', function() {
            // Убираем активный класс с всех фильтров
            dayFilters.forEach(df => df.classList.remove('active'));

            // Добавляем активный класс на текущий фильтр
            this.classList.add('active');

            // Обновляем отображение
            updateDisplay();
        });
    });

    // Начальная инициализация отображения
    updateDisplay();
});