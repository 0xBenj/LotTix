FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build  # assumes "build": "tsc" is defined

CMD ["node", "dist/index.js"]