document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar');
  const eventTypeSelect = document.getElementById('eventType');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek'
    },
    buttonText: {
      today: 'Today',
      month: 'Month',
      week: 'Week',
      list: 'List'
    },
    height: 'auto',
    contentHeight: 'auto',
    aspectRatio: 2,
    events: [
      {
        title: 'Yoga Workshop',
        start: '2024-03-15T10:00:00',
        end: '2024-03-15T12:00:00',
        className: 'workshop',
        backgroundColor: '#0a84ff',
        borderColor: '#0a84ff'
      },
      {
        title: 'Community Meeting',
        start: '2024-03-20T18:00:00',
        end: '2024-03-20T20:00:00',
        className: 'community',
        backgroundColor: '#34c759',
        borderColor: '#34c759'
      },
      {
        title: 'Live Music Performance',
        start: '2024-03-25T19:00:00',
        end: '2024-03-25T22:00:00',
        className: 'performance',
        backgroundColor: '#ff9500',
        borderColor: '#ff9500'
      }
    ],
    eventDidMount: function(info) {
      // Add custom styling to events
      info.el.style.borderRadius = '16px';
      info.el.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.06)';
      info.el.style.transition = 'all 0.3s ease';
    },
    eventMouseEnter: function(info) {
      info.el.style.transform = 'translateY(-1px)';
      info.el.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
    },
    eventMouseLeave: function(info) {
      info.el.style.transform = 'translateY(0)';
      info.el.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.06)';
    }
  });

  calendar.render();

  // Filter events based on type
  eventTypeSelect.addEventListener('change', function() {
    const selectedType = this.value;
    const events = calendar.getEvents();
    
    events.forEach(event => {
      if (selectedType === 'all' || event.className === selectedType) {
        event.setProp('display', 'auto');
      } else {
        event.setProp('display', 'none');
      }
    });
  });
}); 