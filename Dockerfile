FROM node:22.2.0

WORKDIR /usr/src/app

# Copia os arquivos de configuração do npm
COPY package*.json ./

RUN npm install

# Copia a pasta prisma antes de rodar o generate
COPY prisma ./prisma

# Agora executa o Prisma Generate
RUN npx prisma generate

# Copia o restante dos arquivos do projeto
COPY . .

RUN npm run build

EXPOSE 3001

CMD ["node", "dist/server.js"]
