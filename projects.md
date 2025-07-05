---
layout: default
title: 项目作品
permalink: /projects/
custom_css: |
  /* 项目页面样式 */
  .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
  }

  .project-card {
      background: rgba(26, 29, 41, 0.4);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(79, 209, 199, 0.2);
      border-radius: 15px;
      overflow: hidden;
      transition: all 0.3s ease;
      cursor: pointer;
      position: relative;
  }

  .project-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(79, 209, 199, 0.1), transparent);
      transition: left 0.5s ease;
      z-index: 1;
  }

  .project-card:hover::before {
      left: 100%;
  }

  .project-card:hover {
      transform: translateY(-10px);
      border-color: rgba(79, 209, 199, 0.5);
      box-shadow: 0 15px 40px rgba(79, 209, 199, 0.2);
  }

  .project-image {
      width: 100%;
      height: 200px;
      background: linear-gradient(135deg, #2d3748, #4a5568);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      color: #4fd1c7;
      position: relative;
      overflow: hidden;
  }

  .project-image::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, transparent 30%, rgba(79, 209, 199, 0.1) 50%, transparent 70%);
      animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
  }

  .project-content {
      padding: 2rem;
      position: relative;
      z-index: 2;
  }

  .project-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
  }

  .project-title {
      font-size: 1.4rem;
      color: #e2e8f0;
      margin-bottom: 0.5rem;
  }

  .project-status {
      background: rgba(79, 209, 199, 0.2);
      color: #4fd1c7;
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
  }

  .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
  }

  .tech-tag {
      background: rgba(45, 55, 72, 0.6);
      color: #cbd5e0;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.8rem;
      border: 1px solid rgba(79, 209, 199, 0.3);
  }

  .project-description {
      color: #a0aec0;
      margin-bottom: 1.5rem;
      line-height: 1.5;
  }

  .project-links {
      display: flex;
      gap: 1rem;
  }

  .project-link {
      color: #4fd1c7;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border: 1px solid rgba(79, 209, 199, 0.3);
      border-radius: 8px;
      transition: all 0.3s ease;
      font-size: 0.9rem;
  }

  .project-link:hover {
      background: rgba(79, 209, 199, 0.1);
      transform: translateY(-2px);
  }

  .featured-project {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      min-height: 300px;
  }

  .featured-project .project-image {
      height: 100%;
  }

  .featured-project .project-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
  }

  @media (max-width: 768px) {
      .projects-grid {
          grid-template-columns: 1fr;
      }
      
      .featured-project {
          grid-template-columns: 1fr;
      }
  }
---

<!-- 页面标题 -->
<div class="page-header">
    <h1 class="page-title">项目作品</h1>
    <p class="page-subtitle">展示我的技术项目和创意作品</p>
</div>

<!-- 项目展示 -->
<div class="projects-grid">
    <!-- 特色项目 -->
    <div class="project-card featured-project">
        <div class="project-image">
            🌟
        </div>
        <div class="project-content">
            <div class="project-header">
                <div>
                    <h3 class="project-title">全栈电商平台</h3>
                    <div class="project-tech">
                        <span class="tech-tag">React</span>
                        <span class="tech-tag">Node.js</span>
                        <span class="tech-tag">MongoDB</span>
                        <span class="tech-tag">Express</span>
                    </div>
                </div>
                <span class="project-status">已完成</span>
            </div>
            <p class="project-description">
                一个完整的电商平台，包含用户认证、商品管理、购物车、订单处理、支付集成等功能。
                采用现代化的技术栈，实现了响应式设计和良好的用户体验。
            </p>
            <div class="project-links">
                <a href="#" class="project-link">🔗 在线演示</a>
                <a href="#" class="project-link">📁 源代码</a>
            </div>
        </div>
    </div>

    <!-- 常规项目 -->
    <div class="project-card">
        <div class="project-image">
            📱
        </div>
        <div class="project-content">
            <div class="project-header">
                <div>
                    <h3 class="project-title">移动端任务管理APP</h3>
                </div>
                <span class="project-status">进行中</span>
            </div>
            <div class="project-tech">
                <span class="tech-tag">React Native</span>
                <span class="tech-tag">Firebase</span>
                <span class="tech-tag">Redux</span>
            </div>
            <p class="project-description">
                一个跨平台的任务管理应用，支持任务创建、分类、提醒、团队协作等功能。
                使用React Native开发，支持iOS和Android平台。
            </p>
            <div class="project-links">
                <a href="#" class="project-link">📁 源代码</a>
            </div>
        </div>
    </div>

    <div class="project-card">
        <div class="project-image">
            🤖
        </div>
        <div class="project-content">
            <div class="project-header">
                <div>
                    <h3 class="project-title">AI聊天机器人</h3>
                </div>
                <span class="project-status">已完成</span>
            </div>
            <div class="project-tech">
                <span class="tech-tag">Python</span>
                <span class="tech-tag">OpenAI API</span>
                <span class="tech-tag">Flask</span>
                <span class="tech-tag">WebSocket</span>
            </div>
            <p class="project-description">
                基于OpenAI API的智能聊天机器人，支持多轮对话、上下文理解、
                个性化回复等功能。集成了实时通信和语音识别。
            </p>
            <div class="project-links">
                <a href="#" class="project-link">🔗 在线演示</a>
                <a href="#" class="project-link">📁 源代码</a>
            </div>
        </div>
    </div>

    <div class="project-card">
        <div class="project-image">
            📊
        </div>
        <div class="project-content">
            <div class="project-header">
                <div>
                    <h3 class="project-title">数据可视化仪表板</h3>
                </div>
                <span class="project-status">已完成</span>
            </div>
            <div class="project-tech">
                <span class="tech-tag">Vue.js</span>
                <span class="tech-tag">D3.js</span>
                <span class="tech-tag">Python</span>
                <span class="tech-tag">PostgreSQL</span>
            </div>
            <p class="project-description">
                企业级数据可视化平台，支持多种图表类型、实时数据更新、
                自定义报表生成等功能。提供直观的数据分析和展示。
            </p>
            <div class="project-links">
                <a href="#" class="project-link">🔗 在线演示</a>
                <a href="#" class="project-link">📁 源代码</a>
            </div>
        </div>
    </div>

    <div class="project-card">
        <div class="project-image">
            🔧
        </div>
        <div class="project-content">
            <div class="project-header">
                <div>
                    <h3 class="project-title">开发工具集</h3>
                </div>
                <span class="project-status">持续更新</span>
            </div>
            <div class="project-tech">
                <span class="tech-tag">TypeScript</span>
                <span class="tech-tag">CLI</span>
                <span class="tech-tag">Webpack</span>
                <span class="tech-tag">ESLint</span>
            </div>
            <p class="project-description">
                个人开发工具集合，包含代码生成器、项目模板、构建工具、
                代码规范检查等实用工具，提升开发效率。
            </p>
            <div class="project-links">
                <a href="#" class="project-link">📁 源代码</a>
                <a href="#" class="project-link">📖 文档</a>
            </div>
        </div>
    </div>

    <div class="project-card">
        <div class="project-image">
            🎮
        </div>
        <div class="project-content">
            <div class="project-header">
                <div>
                    <h3 class="project-title">网页小游戏</h3>
                </div>
                <span class="project-status">已完成</span>
            </div>
            <div class="project-tech">
                <span class="tech-tag">JavaScript</span>
                <span class="tech-tag">Canvas</span>
                <span class="tech-tag">WebGL</span>
            </div>
            <p class="project-description">
                使用原生JavaScript和Canvas开发的休闲小游戏，
                包含物理引擎、动画效果和音效系统。
            </p>
            <div class="project-links">
                <a href="#" class="project-link">🎮 在线游戏</a>
                <a href="#" class="project-link">📁 源代码</a>
            </div>
        </div>
    </div>
</div> 