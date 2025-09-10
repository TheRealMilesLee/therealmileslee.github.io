# -------- Stage 1: Build --------
FROM node:trixie AS builder

WORKDIR /usr/src/app

# 拷贝依赖文件并安装
COPY package*.json ./
RUN npm install

# 拷贝源代码并执行构建
COPY . .
RUN npm run build

# -------- Stage 2: Runtime --------
FROM node:trixie AS runner

WORKDIR /usr/src/app
ENV NODE_ENV=production

# 只安装生产依赖（减少镜像体积）
COPY package*.json ./
RUN npm install --omit=dev

# 拷贝构建产物和必要文件
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/next.config.ts ./next.config.ts
COPY --from=builder /usr/src/app/package*.json ./

# 如果你用 Tailwind 或其他配置文件，也要一起拷贝
COPY --from=builder /usr/src/app/tailwind.config.js ./tailwind.config.js
COPY --from=builder /usr/src/app/postcss.config.mjs ./postcss.config.mjs
COPY --from=builder /usr/src/app/eslint.config.mjs ./eslint.config.mjs
COPY --from=builder /usr/src/app/tsconfig.json ./tsconfig.json
# 暴露端口
EXPOSE 3000

# 启动生产环境
CMD ["npm", "start"]
