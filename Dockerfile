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

# 拷贝构建产物和必要文件
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/next.config.ts ./next.config.ts

# 如果有 Tailwind / PostCSS 配置文件，最好也一起带上
COPY --from=builder /usr/src/app/tailwind.config.js ./tailwind.config.js
COPY --from=builder /usr/src/app/postcss.config.mjs ./postcss.config.mjs
EXPOSE 3000

CMD ["npx", "serve"]
