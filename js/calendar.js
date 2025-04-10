document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');
    const categoryFilter = document.getElementById('categoryFilter');
  
    let calendar;
    let allEvents = [];
  
    fetch('data/events.json')
      .then((response) => response.json())
      .then((events) => {
        allEvents = events;
        initCalendar(allEvents);
  
        categoryFilter.addEventListener('change', () => {
          const selected = categoryFilter.value;
          const filtered = selected === 'all'
            ? allEvents
            : allEvents.filter(e => e.category === selected);
          calendar.removeAllEvents();
          calendar.addEventSource(filtered);
        });
      });
  
    function initCalendar(events) {
      calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,listWeek'
        },
        events: events,
        eventColor: '#003366',
        eventClick: function(info) {
          alert(`${info.event.title}\n${info.event.startStr}`);
        }
      });
  
      calendar.render();
    }
  });
  