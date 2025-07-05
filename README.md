# 🚀 个人网站 - Jekyll版本

这是一个基于Jekyll的科幻风格个人网站，完美融合了Jekyll的强大功能和现代科幻设计风格。

## 🌟 主要特色

- ✨ **科幻视觉效果**：毛玻璃背景、粒子动画、科幻装饰
- 📝 **Jekyll博客系统**：支持Markdown写作，自动生成文章列表
- 🎨 **统一设计语言**：所有页面共享一致的视觉风格
- 📱 **响应式布局**：完美适配桌面和移动设备
- ⚡ **高性能优化**：公共样式分离，资源优化加载
- 🔧 **配置驱动**：通过配置文件轻松自定义

## 📁 项目结构

```
yuchendu.github.io/
├── _config.yml          # Jekyll配置文件
├── _layouts/            # 页面布局模板
│   └── default.html     # 默认布局（包含导航和公共元素）
├── _posts/              # 博客文章（Markdown格式）
│   └── 2024-10-24-welcome-to-jekyll.markdown
├── assets/              # 静态资源
│   ├── css/
│   │   └── main.css     # 公共样式文件
│   └── images/          # 图片资源
├── index.md             # 首页
├── blog.md              # 博客列表页
├── about.md             # 关于页面
├── projects.md          # 项目展示页
├── contact.md           # 联系页面
├── config.js            # JavaScript配置文件
├── Gemfile              # Ruby依赖管理
├── Gemfile.lock         # 依赖版本锁定
└── README.md            # 项目说明
```

## 🔧 快速开始

### 1. 本地开发

```bash
# 安装Jekyll依赖
bundle install

# 启动本地服务器
bundle exec jekyll serve

# 访问网站
# http://localhost:4000
```

### 2. 自定义配置

编辑 `_config.yml` 文件：

```yaml
title: 你的网站标题
email: your-email@example.com
description: 网站描述

# 个人信息
author:
  name: 你的名字
  title: 你的职位
  subtitle: 你的标签

# 社交媒体
social:
  github: yourusername
  twitter: yourusername
  linkedin: yourprofile
  email: your.email@example.com
```

编辑 `config.js` 文件：

```javascript
const CONFIG = {
    name: "你的名字",
    title: "你的职位",
    subtitle: "你的标签",
    
    // 背景图片
    background: {
        image: "你的背景图片URL",
        overlayOpacity: 0.8
    },
    
    // 联系方式、技能等
    // ...
};
```

### 3. 添加博客文章

在 `_posts/` 目录下创建新文件：

```markdown
---
layout: default
title: "文章标题"
date: 2024-01-01 12:00:00 +0800
categories: [技术, 前端]
---

这里是文章内容，支持Markdown语法...
```

### 4. 自定义页面

每个页面都使用Jekyll的Front Matter配置：

```markdown
---
layout: default
title: 页面标题
permalink: /custom-page/
custom_css: |
  /* 页面特定样式 */
custom_js: |
  // 页面特定脚本
---

页面内容...
```

## 🎨 设计特色

### 科幻视觉元素
- **背景效果**：渐变背景 + 自定义图片
- **毛玻璃效果**：`backdrop-filter: blur()`
- **粒子动画**：动态浮动粒子效果
- **科幻装饰**：旋转的圆环装饰
- **光效阴影**：主题色光晕效果

### 交互效果
- **悬停动画**：卡片提升和光效变化
- **流光效果**：跨越式光带动画
- **平滑过渡**：所有交互都有平滑过渡

### 响应式设计
- **移动优先**：适配各种屏幕尺寸
- **弹性布局**：Grid + Flexbox布局
- **可读性优化**：移动端字体和间距调整

## 📝 内容管理

### 博客系统
- 使用Jekyll的Posts功能
- 支持分类和标签
- 自动生成文章列表
- SEO优化支持

### 页面结构
- **首页**：个人介绍 + 导航卡片
- **博客**：文章列表 + 搜索功能
- **项目**：作品展示 + 技术栈标签
- **关于**：个人经历 + 技能展示
- **联系**：联系方式 + 表单功能

## 🚀 部署到GitHub Pages

1. **仓库设置**：确保仓库名为 `用户名.github.io`
2. **推送代码**：提交所有更改到main分支
3. **启用Pages**：在仓库设置中启用GitHub Pages
4. **访问网站**：`https://用户名.github.io`

GitHub Pages会自动构建Jekyll网站，无需手动编译。

## 🔄 从旧版本升级

如果你之前使用的是静态HTML版本：

1. **备份数据**：保存个人配置和内容
2. **使用新结构**：采用当前的Jekyll结构
3. **迁移内容**：将个人信息更新到配置文件
4. **测试功能**：本地测试所有页面功能

## 💡 技术栈

- **Jekyll**：静态站点生成器
- **Liquid**：模板语言
- **Markdown**：内容编写
- **CSS3**：现代样式特性
- **JavaScript**：交互和动画
- **GitHub Pages**：免费托管

## 🎯 优势对比

| 特性 | Jekyll版本 | 静态HTML版本 |
|------|------------|--------------|
| 博客管理 | ✅ 自动化 | ❌ 手动维护 |
| 内容编写 | ✅ Markdown | ❌ HTML |
| 模板复用 | ✅ Layouts | ❌ 代码重复 |
| SEO优化 | ✅ 自动生成 | ❌ 手动配置 |
| 维护成本 | ✅ 低 | ❌ 高 |

## 📞 支持

如有问题或建议，欢迎：
- 📧 发送邮件
- 🐙 提交Issue
- 💬 参与讨论

---

**享受你的新Jekyll个人网站！** 🎉 