---
layout: default
title: 关于我
permalink: /about/
custom_css: |
  /* 关于页面样式 */
  .hero-section {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 3rem;
      margin-bottom: 4rem;
      align-items: center;
  }

  .avatar-container {
      text-align: center;
  }

  .avatar {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: linear-gradient(135deg, #4fd1c7, #2d3748);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
      margin: 0 auto 1rem;
      border: 3px solid rgba(79, 209, 199, 0.3);
      box-shadow: 0 0 30px rgba(79, 209, 199, 0.3);
      position: relative;
      overflow: hidden;
  }

  .avatar::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent, rgba(79, 209, 199, 0.1), transparent);
      animation: rotate 4s linear infinite;
  }

  .hero-content h1 {
      font-size: 3rem;
      color: #4fd1c7;
      text-shadow: 0 0 20px rgba(79, 209, 199, 0.5);
      margin-bottom: 1rem;
  }

  .hero-content .subtitle {
      font-size: 1.3rem;
      color: #a0aec0;
      margin-bottom: 2rem;
  }

  .hero-content .description {
      font-size: 1.1rem;
      color: #cbd5e0;
      line-height: 1.8;
  }

  .content-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
  }

  .card-header {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
  }

  .card-icon {
      font-size: 2rem;
      margin-right: 1rem;
      color: #4fd1c7;
  }

  .card-title {
      font-size: 1.4rem;
      color: #e2e8f0;
  }

  .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
  }

  .skill-tag {
      background: rgba(45, 55, 72, 0.6);
      color: #cbd5e0;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      text-align: center;
      border: 1px solid rgba(79, 209, 199, 0.3);
      transition: all 0.3s ease;
  }

  .skill-tag:hover {
      background: rgba(79, 209, 199, 0.2);
      color: #4fd1c7;
      transform: translateY(-2px);
  }

  .timeline {
      position: relative;
      padding-left: 2rem;
  }

  .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(to bottom, #4fd1c7, transparent);
  }

  .timeline-item {
      position: relative;
      margin-bottom: 2rem;
      padding-left: 1.5rem;
  }

  .timeline-item::before {
      content: '';
      position: absolute;
      left: -1.5rem;
      top: 0.5rem;
      width: 10px;
      height: 10px;
      background: #4fd1c7;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(79, 209, 199, 0.5);
  }

  .timeline-date {
      color: #4fd1c7;
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
  }

  .timeline-title {
      color: #e2e8f0;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
  }

  .timeline-description {
      color: #a0aec0;
      font-size: 0.9rem;
  }

  .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1.5rem;
      margin-top: 1rem;
  }

  .stat-item {
      text-align: center;
      padding: 1rem;
      background: rgba(45, 55, 72, 0.3);
      border-radius: 10px;
      border: 1px solid rgba(79, 209, 199, 0.2);
  }

  .stat-number {
      font-size: 2rem;
      font-weight: bold;
      color: #4fd1c7;
      text-shadow: 0 0 10px rgba(79, 209, 199, 0.3);
  }

  .stat-label {
      color: #a0aec0;
      font-size: 0.9rem;
      margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
      .hero-section {
          grid-template-columns: 1fr;
          text-align: center;
      }
      
      .content-grid {
          grid-template-columns: 1fr;
      }
      
      .hero-content h1 {
          font-size: 2rem;
      }
  }
---

<!-- 页面标题 -->
<div class="page-header">
    <h1 class="page-title">关于我</h1>
    <p class="page-subtitle">热爱技术，追求卓越</p>
</div>

<!-- 个人介绍 -->
<section class="hero-section">
    <div class="avatar-container">
        <div class="avatar">👨‍💻</div>
        <h3 style="color: #4fd1c7;">{{ site.author.name | default: "你的名字" }}</h3>
        <p style="color: #a0aec0;">{{ site.author.title | default: "全栈开发者" }}</p>
    </div>
    <div class="hero-content">
        <h1>关于我</h1>
        <p class="subtitle">热爱技术，追求卓越</p>
        <p class="description">
            我是一名充满热情的全栈开发者，专注于构建高质量的Web应用程序。
            拥有多年的开发经验，熟悉现代化的技术栈，喜欢探索新技术并将其应用到实际项目中。
            我相信代码不仅仅是实现功能的工具，更是表达创意和解决问题的艺术。
        </p>
    </div>
</section>

<!-- 内容卡片 -->
<div class="content-grid">
    <!-- 技能专长 -->
    <div class="content-card">
        <div class="card-header">
            <div class="card-icon">🛠️</div>
            <h3 class="card-title">技能专长</h3>
        </div>
        <div class="skills-grid">
            <div class="skill-tag">JavaScript</div>
            <div class="skill-tag">TypeScript</div>
            <div class="skill-tag">React</div>
            <div class="skill-tag">Vue.js</div>
            <div class="skill-tag">Node.js</div>
            <div class="skill-tag">Python</div>
            <div class="skill-tag">MongoDB</div>
            <div class="skill-tag">PostgreSQL</div>
            <div class="skill-tag">Docker</div>
            <div class="skill-tag">AWS</div>
            <div class="skill-tag">Git</div>
            <div class="skill-tag">Linux</div>
        </div>
    </div>

    <!-- 项目统计 -->
    <div class="content-card">
        <div class="card-header">
            <div class="card-icon">📊</div>
            <h3 class="card-title">项目统计</h3>
        </div>
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-number">50+</div>
                <div class="stat-label">完成项目</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">3</div>
                <div class="stat-label">工作年限</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">15+</div>
                <div class="stat-label">技术栈</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">100K+</div>
                <div class="stat-label">代码行数</div>
            </div>
        </div>
    </div>

    <!-- 工作经历 -->
    <div class="content-card">
        <div class="card-header">
            <div class="card-icon">💼</div>
            <h3 class="card-title">工作经历</h3>
        </div>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-date">2022 - 至今</div>
                <div class="timeline-title">高级前端开发工程师</div>
                <div class="timeline-description">
                    负责公司核心产品的前端开发，主导技术选型和架构设计，
                    带领团队完成多个重要项目。
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">2021 - 2022</div>
                <div class="timeline-title">全栈开发工程师</div>
                <div class="timeline-description">
                    参与多个Web应用的开发，从前端到后端，从设计到部署，
                    积累了丰富的全栈开发经验。
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">2020 - 2021</div>
                <div class="timeline-title">前端开发工程师</div>
                <div class="timeline-description">
                    专注于前端技术的学习和实践，熟练掌握现代前端框架，
                    参与了多个企业级项目的开发。
                </div>
            </div>
        </div>
    </div>

    <!-- 教育背景 -->
    <div class="content-card">
        <div class="card-header">
            <div class="card-icon">🎓</div>
            <h3 class="card-title">教育背景</h3>
        </div>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-date">2016 - 2020</div>
                <div class="timeline-title">计算机科学与技术 - 本科</div>
                <div class="timeline-description">
                    某某大学计算机科学与技术专业，主修软件工程、数据结构、
                    算法设计等课程，GPA 3.8/4.0。
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">2020 - 2022</div>
                <div class="timeline-title">软件工程 - 硕士</div>
                <div class="timeline-description">
                    深入研究Web技术和软件架构，完成多个实际项目，
                    培养了系统性的工程思维。
                </div>
            </div>
        </div>
    </div>
</div> 