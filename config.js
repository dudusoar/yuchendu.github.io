// 个人信息配置文件
const CONFIG = {
    // 基本信息
    name: "你的名字",
    title: "全栈开发者",
    subtitle: "技术爱好者 | 终身学习者",
    description: "欢迎来到我的数字世界",
    
    // 联系方式
    contact: {
        email: "your.email@example.com",
        phone: "+86 138-0000-0000",
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourprofile",
        twitter: "https://twitter.com/yourusername",
        wechat: "your_wechat_id"
    },
    
    // 背景图片
    background: {
        // 可以是本地图片路径或网络图片URL
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        // 或者使用本地图片：
        // image: "assets/images/background.jpg",
        
        // 遮罩层透明度 (0-1)
        overlayOpacity: 0.8
    },
    
    // 主题色彩
    theme: {
        primaryColor: "#4fd1c7",      // 主色调
        backgroundColor: "#0a0e1a",   // 背景色
        cardBackground: "rgba(26, 29, 41, 0.4)", // 卡片背景
        textColor: "#e2e8f0"          // 文字颜色
    },
    
    // 技能标签
    skills: [
        "JavaScript", "TypeScript", "React", "Vue.js", 
        "Node.js", "Python", "MongoDB", "PostgreSQL", 
        "Docker", "AWS", "Git", "Linux"
    ],
    
    // 兴趣爱好
    hobbies: [
        "摄影", "阅读", "旅行", "音乐", "运动", "游戏"
    ],
    
    // 项目统计
    stats: {
        projects: "50+",
        experience: "3",
        technologies: "15+",
        codeLines: "100K+"
    }
};

// 导出配置（用于其他页面引用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} 