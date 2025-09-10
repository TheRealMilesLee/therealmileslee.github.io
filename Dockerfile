# -------- Stage 1: Build --------
FROM node:trixie AS builder

WORKDIR /usr/src/app

# 先拷贝依赖文件并安装
COPY package*.json ./
RUN npm install

# 再拷贝项目源代码
COPY . .

# Next.js 会自动编译 TypeScript
RUN npm run build

# -------- Stage 2: Runtime --------
FROM node:trixie AS runner

WORKDIR /usr/src/app
ENV NODE_ENV=production

# 只安装生产依赖
COPY package*.json ./
RUN npm install --omit=dev

# 拷贝整个项目目录，防止遗漏
COPY --from=builder /usr/src/app /usr/src/app
EXPOSE 3000

CMD ["npm", "run", "dev"]
