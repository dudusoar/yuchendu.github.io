---
layout: default
title: 技术博客
permalink: /blog/
custom_css: |
  /* 博客页面样式 */
  .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
  }

  .blog-card {
      background: rgba(26, 29, 41, 0.4);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(79, 209, 199, 0.2);
      border-radius: 15px;
      padding: 2rem;
      transition: all 0.3s ease;
      cursor: pointer;
      position: relative;
      overflow: hidden;
  }

  .blog-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(79, 209, 199, 0.1), transparent);
      transition: left 0.5s ease;
  }

  .blog-card:hover::before {
      left: 100%;
  }

  .blog-card:hover {
      transform: translateY(-5px);
      border-color: rgba(79, 209, 199, 0.5);
      box-shadow: 0 10px 30px rgba(79, 209, 199, 0.2);
  }

  .blog-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      color: #a0aec0;
  }

  .blog-date {
      background: rgba(79, 209, 199, 0.2);
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.8rem;
  }

  .blog-category {
      color: #4fd1c7;
      font-weight: 500;
  }

  .blog-title {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: #e2e8f0;
  }

  .blog-excerpt {
      color: #cbd5e0;
      margin-bottom: 1.5rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
  }

  .read-more {
      color: #4fd1c7;
      text-decoration: none;
      font-weight: 500;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
  }

  .read-more:hover {
      transform: translateX(5px);
  }

  @media (max-width: 768px) {
      .blog-grid {
          grid-template-columns: 1fr;
      }
  }
---

<!-- 页面标题 -->
<div class="page-header">
    <h1 class="page-title">技术博客</h1>
    <p class="page-subtitle">分享编程心得，记录技术成长</p>
</div>

<!-- 博客文章列表 -->
<div class="blog-grid">
    {% for post in site.posts %}
    <article class="blog-card" onclick="window.location.href='{{ post.url | relative_url }}'">
        <div class="blog-meta">
            <span class="blog-category">{{ post.categories | first | default: "技术分享" }}</span>
            <span class="blog-date">{{ post.date | date: "%Y-%m-%d" }}</span>
        </div>
        <h2 class="blog-title">{{ post.title }}</h2>
        <p class="blog-excerpt">
            {{ post.excerpt | strip_html | truncatewords: 30 }}
        </p>
        <a href="{{ post.url | relative_url }}" class="read-more">阅读全文 →</a>
    </article>
    {% endfor %}
    
    {% if site.posts.size == 0 %}
    <div class="content-card">
        <h3>暂无文章</h3>
        <p>博客文章正在准备中，敬请期待！</p>
    </div>
    {% endif %}
</div> 