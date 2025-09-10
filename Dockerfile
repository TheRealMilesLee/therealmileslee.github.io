FROM node:trixie

# 在容器里建立工作目录
WORKDIR /usr/src/app

# 先拷贝 package.json 和 package-lock.json,用于安装依赖
COPY package*.json ./

RUN npm install --production

# 再拷贝项目源代码
COPY . .

# 容器启动命令
CMD ["npm", "start"]

# 项目监听的端口
EXPOSE 3000
