document.addEventListener('DOMContentLoaded', async () => {
    const timelineData = new TimelineData();
    const timeline = new Timeline(document.querySelector('.timeline'));
    
    // Load and render initial data
    const events = await timelineData.loadEvents();
    timeline.render(events);

    // Set up event listeners
    document.getElementById('zoomIn').addEventListener('click', () => {
        timeline.setZoom(timeline.scale * 1.2);
    });

    document.getElementById('zoomOut').addEventListener('click', () => {
        timeline.setZoom(timeline.scale * 0.8);
    });

    document.getElementById('filterTags').addEventListener('change', (e) => {
        const filteredEvents = timelineData.filterEventsByTag(e.target.value);
        timeline.render(filteredEvents);
    });

    // Modal close button
    document.querySelector('.modal .close').addEventListener('click', () => {
        document.getElementById('eventModal').style.display = 'none';
    });
});