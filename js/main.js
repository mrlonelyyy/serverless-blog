fetch('https://your-vercel-api-url.vercel.app/api/get-posts')
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById('blog-list');
    posts.forEach(post => {
      const link = document.createElement('a');
      link.href = `blog.html?slug=${post.slug}`;
      link.innerHTML = `<h2>${post.title}</h2><small>${post.date}</small>`;
      container.appendChild(link);
    });
  });
