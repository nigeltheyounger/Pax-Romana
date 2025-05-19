class TimelineData {
    constructor() {
        this.events = [];
    }

    async loadEvents() {
        try {
            const response = await fetch('../data/static_data.json');
            this.events = await response.json();
            return this.events;
        } catch (error) {
            console.error('Error loading timeline data:', error);
            return [];
        }
    }

    filterEventsByTag(tag) {
        if (tag === 'all') return this.events;
        return this.events.filter(event => event.tags.includes(tag));
    }

    sortEventsByYear() {
        return this.events.sort((a, b) => {
            const yearA = parseInt(a.year);
            const yearB = parseInt(b.year);
            return yearA - yearB;
        });
    }
}