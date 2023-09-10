document.addEventListener('DOMContentLoaded', function() {
    // Get current date and time
    const timeNow = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = daysOfWeek[timeNow.getUTCDay()];
    const currentUTCTime = timeNow.getTime();

    // Update elements with data-testid attributes
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent= `Current Day: ${currentDayOfWeek}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${currentUTCTime} milliseconds`;
});
