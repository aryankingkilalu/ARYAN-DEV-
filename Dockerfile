FROM node:20-bullseye-slim

RUN apt-get update && apt-get install -y \
    ffmpeg \
    webp \
    libwebp-dev \
    python3 \
    make \
    g++ \
    git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json .npmrc ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 8000

CMD ["node", "index.js"]
