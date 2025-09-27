# GitHub Pages 部署指南

## 快速部署步骤

### 1. 创建GitHub仓库
1. 登录GitHub，点击"New repository"
2. 仓库名称：`dementia-risk-prediction`
3. 设置为Public（必须）
4. 点击"Create repository"

### 2. 上传项目文件
方法一：使用Git命令行
```bash
# 初始化本地仓库
git init
git add .
git commit -m "Initial commit"

# 添加远程仓库
git remote add origin https://github.com/你的用户名/dementia-risk-prediction.git
git branch -M main
git push -u origin main
```

方法二：直接上传文件
1. 点击"uploading an existing file"
2. 拖拽所有HTML文件到页面
3. 提交更改

### 3. 启用GitHub Pages
1. 进入仓库的"Settings"
2. 滚动到"Pages"部分
3. Source选择"Deploy from a branch"
4. Branch选择"main"
5. 点击"Save"

### 4. 获取访问链接
几分钟后，你的项目将在以下地址可访问：
`https://你的用户名.github.io/dementia-risk-prediction`

## 其他免费部署选项

### Vercel（推荐，速度更快）
1. 访问 vercel.com
2. 使用GitHub账号登录
3. 点击"New Project"
4. 选择你的GitHub仓库
5. 点击"Deploy"
6. 几分钟后获得类似 `https://project-name.vercel.app` 的域名

### Netlify
1. 访问 netlify.com
2. 拖拽整个项目文件夹到部署区域
3. 自动获得域名
