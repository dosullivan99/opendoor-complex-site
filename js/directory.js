document.addEventListener('DOMContentLoaded', () => {
    const directoryEl = document.getElementById('directory');
    const filterButtons = document.querySelectorAll('.directory-filters button');
    let allBusinesses = [];
  
    fetch('data/directory.json')
      .then((res) => res.json())
      .then((data) => {
        allBusinesses = data;
        renderBusinesses(data);
      });
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
  
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        const filtered = filter === 'all' ? allBusinesses : allBusinesses.filter(b => b.type === filter);
        renderBusinesses(filtered);
      });
    });
  
    function renderBusinesses(businesses) {
      directoryEl.innerHTML = '';
  
      businesses.forEach(biz => {
        const div = document.createElement('div');
        div.className = 'directory-card';
  
        div.innerHTML = `
          <h3>${biz.name}</h3>
          <p>${biz.description}</p>
          <a href="${biz.website}" target="_blank">Visit Website</a>
        `;
  
        directoryEl.appendChild(div);
      });
    }
  });
  