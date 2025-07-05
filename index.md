---
layout: default
title: 首页
custom_css: |
  /* 首页特定样式 */
  .intro-card {
      position: absolute;
      top: 2rem;
      left: 2rem;
      background: rgba(26, 29, 41, 0.3);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(79, 209, 199, 0.3);
      border-radius: 15px;
      padding: 1.5rem;
      max-width: 300px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  .intro-card h1 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: #4fd1c7;
      text-shadow: 0 0 10px rgba(79, 209, 199, 0.3);
  }

  .intro-card p {
      font-size: 0.9rem;
      line-height: 1.4;
      color: #cbd5e0;
  }

  .nav-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      max-width: 800px;
      width: 100%;
  }

  .nav-card {
      background: rgba(26, 29, 41, 0.4);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(79, 209, 199, 0.2);
      border-radius: 20px;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s ease;
      cursor: pointer;
      position: relative;
      overflow: hidden;
  }

  .nav-card:hover {
      transform: translateY(-10px);
      border-color: rgba(79, 209, 199, 0.5);
      box-shadow: 0 15px 40px rgba(79, 209, 199, 0.2);
  }

  .nav-card-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: #4fd1c7;
      text-shadow: 0 0 20px rgba(79, 209, 199, 0.5);
  }

  .nav-card h2 {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
      color: #e2e8f0;
  }

  .nav-card p {
      color: #a0aec0;
      font-size: 0.9rem;
      line-height: 1.4;
  }

  .particles {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
  }

  .particle {
      position: absolute;
      width: 2px;
      height: 2px;
      background: rgba(79, 209, 199, 0.6);
      border-radius: 50%;
      animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 1; }
      50% { transform: translateY(-20px) rotate(180deg); opacity: 0.5; }
  }

  /* 主容器样式 */
  .home-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      position: relative;
  }

  @media (max-width: 768px) {
      .intro-card {
          position: static;
          margin-bottom: 2rem;
          max-width: 100%;
      }
      
      .nav-cards {
          grid-template-columns: 1fr;
      }
      
      .home-container {
          padding: 1rem;
      }
  }

custom_js: |
  // 创建粒子效果
  function createParticles() {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;
      
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.top = Math.random() * 100 + '%';
          particle.style.animationDelay = Math.random() * 6 + 's';
          particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
          particlesContainer.appendChild(particle);
      }
  }
  
  // 页面加载完成后创建粒子
  window.addEventListener('load', createParticles);
  
  // 个人信息已通过Jekyll模板直接渲染，无需JavaScript更新
  console.log('个人信息已加载：{{ site.author.name }}');
---

<!-- 粒子效果 -->
<div class="particles" id="particles"></div>

<div class="home-container">
    <!-- 个人简介卡片 -->
    <div class="intro-card">
        <h1 id="userName">{{ site.author.name | default: "你的名字" }}</h1>
        <p><span id="userTitle">{{ site.author.title | default: "全栈开发者" }}</span> | <span id="userSubtitle">{{ site.author.subtitle | default: "技术爱好者 | 终身学习者" }}</span></p>
        <p style="margin-top: 0.5rem; font-size: 0.8rem; color: #9ca3af;" id="userDescription">
            {{ site.description | default: "欢迎来到我的数字世界" }}
        </p>
    </div>
    
    <!-- 导航卡片组 -->
    <div class="nav-cards">
        <div class="nav-card" onclick="window.location.href='{{ '/blog/' | relative_url }}'">
            <div class="nav-card-icon">📝</div>
            <h2>技术博客</h2>
            <p>分享编程心得、技术探索和思考感悟</p>
        </div>
        
        <div class="nav-card" onclick="window.location.href='{{ '/projects/' | relative_url }}'">
            <div class="nav-card-icon">🚀</div>
            <h2>项目作品</h2>
            <p>展示我的开发项目和创意作品</p>
        </div>
        
        <div class="nav-card" onclick="window.location.href='{{ '/about/' | relative_url }}'">
            <div class="nav-card-icon">👨‍💻</div>
            <h2>关于我</h2>
            <p>了解我的技能、经历和兴趣爱好</p>
        </div>
        
        <div class="nav-card" onclick="window.location.href='{{ '/contact/' | relative_url }}'">
            <div class="nav-card-icon">📧</div>
            <h2>联系方式</h2>
            <p>与我取得联系，一起交流技术</p>
        </div>
    </div>
</div> 