FROM node:22.2.0

WORKDIR /usr/src/app

# Copia arquivos essenciais primeiro (cache otimizado)
COPY package*.json ./
COPY prisma ./prisma

# Instala dependências (inclui prisma client, postinstall automático removido do package.json)
RUN npm install

# Copia o restante do projeto
COPY . .

# Gera o Prisma Client
RUN npx prisma generate

# Compila a aplicação
RUN npm run build

# Expõe a porta da API
EXPOSE 3001

# Define entrypoint para rodar migrações no runtime
COPY docker-entrypoint.sh /usr/src/app/docker-entrypoint.sh
RUN chmod +x /usr/src/app/docker-entrypoint.sh

ENTRYPOINT ["/usr/src/app/docker-entrypoint.sh"]
CMD ["node", "dist/server.js"]
