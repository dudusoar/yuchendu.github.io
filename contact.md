---
layout: default
title: 联系方式
permalink: /contact/
custom_css: |
  /* 联系页面样式 */
  .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
  }

  .contact-card {
      background: rgba(26, 29, 41, 0.4);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(79, 209, 199, 0.2);
      border-radius: 15px;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
  }

  .contact-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(79, 209, 199, 0.1), transparent);
      transition: left 0.5s ease;
  }

  .contact-card:hover::before {
      left: 100%;
  }

  .contact-card:hover {
      transform: translateY(-5px);
      border-color: rgba(79, 209, 199, 0.5);
      box-shadow: 0 10px 30px rgba(79, 209, 199, 0.2);
  }

  .contact-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: #4fd1c7;
      text-shadow: 0 0 20px rgba(79, 209, 199, 0.5);
  }

  .contact-title {
      font-size: 1.2rem;
      color: #e2e8f0;
      margin-bottom: 0.5rem;
  }

  .contact-info {
      color: #a0aec0;
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
  }

  .contact-link {
      color: #4fd1c7;
      text-decoration: none;
      padding: 0.5rem 1.5rem;
      border: 1px solid rgba(79, 209, 199, 0.3);
      border-radius: 25px;
      transition: all 0.3s ease;
      display: inline-block;
  }

  .contact-link:hover {
      background: rgba(79, 209, 199, 0.1);
      transform: translateY(-2px);
  }

  .contact-form {
      max-width: 600px;
      margin: 0 auto;
      background: rgba(26, 29, 41, 0.4);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(79, 209, 199, 0.2);
      border-radius: 15px;
      padding: 2rem;
  }

  .form-group {
      margin-bottom: 1.5rem;
  }

  .form-label {
      display: block;
      color: #e2e8f0;
      margin-bottom: 0.5rem;
      font-weight: 500;
  }

  .form-input,
  .form-textarea {
      width: 100%;
      padding: 0.75rem;
      background: rgba(45, 55, 72, 0.6);
      border: 1px solid rgba(79, 209, 199, 0.3);
      border-radius: 8px;
      color: #e2e8f0;
      font-size: 0.9rem;
      transition: all 0.3s ease;
  }

  .form-input:focus,
  .form-textarea:focus {
      outline: none;
      border-color: #4fd1c7;
      box-shadow: 0 0 10px rgba(79, 209, 199, 0.3);
  }

  .form-textarea {
      resize: vertical;
      min-height: 120px;
  }

  .form-button {
      background: linear-gradient(45deg, #4fd1c7, #2d3748);
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 25px;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
  }

  .form-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(79, 209, 199, 0.4);
  }

  .social-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 2rem;
  }

  .social-link {
      color: #4fd1c7;
      font-size: 2rem;
      transition: all 0.3s ease;
      padding: 0.5rem;
      border-radius: 50%;
      border: 1px solid rgba(79, 209, 199, 0.3);
  }

  .social-link:hover {
      background: rgba(79, 209, 199, 0.1);
      transform: translateY(-3px) scale(1.1);
  }

  @media (max-width: 768px) {
      .contact-grid {
          grid-template-columns: 1fr;
      }
      
      .contact-form {
          padding: 1.5rem;
      }
  }
---

<!-- 页面标题 -->
<div class="page-header">
    <h1 class="page-title">联系方式</h1>
    <p class="page-subtitle">与我取得联系，一起交流技术</p>
</div>

<!-- 联系方式卡片 -->
<div class="contact-grid">
    <div class="contact-card">
        <div class="contact-icon">📧</div>
        <h3 class="contact-title">邮箱</h3>
        <p class="contact-info">工作联系或技术交流</p>
        <a href="mailto:{{ site.social.email | default: 'your.email@example.com' }}" class="contact-link">发送邮件</a>
    </div>

    <div class="contact-card">
        <div class="contact-icon">💬</div>
        <h3 class="contact-title">微信</h3>
        <p class="contact-info">日常交流和技术讨论</p>
        <a href="#" class="contact-link">添加微信</a>
    </div>

    <div class="contact-card">
        <div class="contact-icon">🐙</div>
        <h3 class="contact-title">GitHub</h3>
        <p class="contact-info">开源项目和代码分享</p>
        <a href="{{ site.social.github | default: 'https://github.com/yourusername' }}" target="_blank" class="contact-link">查看项目</a>
    </div>

    <div class="contact-card">
        <div class="contact-icon">💼</div>
        <h3 class="contact-title">LinkedIn</h3>
        <p class="contact-info">职业联系和合作机会</p>
        <a href="{{ site.social.linkedin | default: 'https://linkedin.com/in/yourprofile' }}" target="_blank" class="contact-link">专业档案</a>
    </div>
</div>

<!-- 联系表单 -->
<div class="contact-form">
    <h2 style="text-align: center; color: #4fd1c7; margin-bottom: 2rem;">发送消息</h2>
    <form>
        <div class="form-group">
            <label for="name" class="form-label">姓名</label>
            <input type="text" id="name" name="name" class="form-input" required>
        </div>
        
        <div class="form-group">
            <label for="email" class="form-label">邮箱</label>
            <input type="email" id="email" name="email" class="form-input" required>
        </div>
        
        <div class="form-group">
            <label for="subject" class="form-label">主题</label>
            <input type="text" id="subject" name="subject" class="form-input" required>
        </div>
        
        <div class="form-group">
            <label for="message" class="form-label">消息内容</label>
            <textarea id="message" name="message" class="form-textarea" required></textarea>
        </div>
        
        <button type="submit" class="form-button">发送消息</button>
    </form>
</div>

<!-- 社交媒体链接 -->
<div class="social-links">
    <a href="{{ site.social.github | default: '#' }}" class="social-link" title="GitHub">
        🐙
    </a>
    <a href="{{ site.social.linkedin | default: '#' }}" class="social-link" title="LinkedIn">
        💼
    </a>
    <a href="{{ site.social.twitter | default: '#' }}" class="social-link" title="Twitter">
        🐦
    </a>
    <a href="mailto:{{ site.social.email | default: 'your.email@example.com' }}" class="social-link" title="Email">
        📧
    </a>
</div>

<script>
// 表单提交处理
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 这里可以添加实际的表单提交逻辑
    alert('感谢您的消息！我会尽快回复您。');
    
    // 重置表单
    this.reset();
});
</script> 