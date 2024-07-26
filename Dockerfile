# Temel image olarak Node.js LTS Alpine kullan
FROM node:lts-alpine

# Çalışma ortamını belirt
ENV NODE_ENV=development

# Çalışma dizinini ayarla
WORKDIR /usr/src/app

# package.json ve diğer bağımlılık dosyalarını kopyala
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# Bağımlılıkları yükle (development bağımlılıkları ile birlikte)
RUN npm install --legacy-peer-deps --silent

# Uygulama kodunu kopyala
COPY . .

# Uygulamanın dinlediği portu belirt
EXPOSE 5173

# Dizin izinlerini güncelle
RUN chown -R node /usr/src/app

# node kullanıcısına geç
USER node

# Vite'i npx ile çalıştır
CMD ["npx", "vite", "dev"]
