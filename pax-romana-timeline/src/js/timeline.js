class Timeline {
    constructor(container) {
        this.container = container;
        this.scale = 1;
        this.events = [];
    }

    render(events) {
        this.events = events;
        this.container.innerHTML = '';
        
        events.forEach((event, index) => {
            const eventElement = this.createEventElement(event, index);
            const position = this.calculatePosition(index, events.length);
            eventElement.style.left = `${position}%`;
            eventElement.style.top = index % 2 === 0 ? '40%' : '60%';
            this.container.appendChild(eventElement);
        });
    }

    createEventElement(event, index) {
        const element = document.createElement('div');
        element.className = `timeline-event ${index % 2 === 0 ? 'above' : 'below'}`;
        element.innerHTML = `
            <div class="event-dot"></div>
            <div class="event-content">
                <div class="event-image">
                    <img src="${event.image}" alt="${event.title}">
                </div>
                <div class="event-text">
                    <h3>${event.year}</h3>
                    <h4>${event.title}</h4>
                </div>
            </div>
        `;
        element.addEventListener('click', () => this.showEventDetails(event));
        return element;
    }

    calculatePosition(index, total) {
        return (index / (total - 1)) * 100;
    }

    showEventDetails(event) {
        const modal = document.getElementById('eventModal');
        document.getElementById('modalTitle').textContent = `${event.year} - ${event.title}`;
        document.getElementById('modalDescription').textContent = event.description;
        document.getElementById('modalImage').src = event.image;
        document.getElementById('modalTags').innerHTML = event.tags
            .map(tag => `<span class="tag">${tag}</span>`)
            .join('');
        modal.style.display = 'block';
    }

    setZoom(scale) {
        this.scale = scale;
        this.container.style.transform = `scale(${scale})`;
    }
}