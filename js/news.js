document.addEventListener('DOMContentLoaded', () => {
    const newsList = document.getElementById('news-list');
  
    fetch('data/news.json')
      .then((res) => res.json())
      .then((posts) => {
        posts.forEach(post => {
          const div = document.createElement('div');
          div.className = 'news-card';
          div.innerHTML = `
            <img src="${post.image}" alt="${post.title}" />
            <div class="news-content">
              <h3>${post.title}</h3>
              <small>${new Date(post.date).toLocaleDateString()}</small>
              <p>${post.summary}</p>
            </div>
          `;
          newsList.appendChild(div);
        });
      });
  });
  