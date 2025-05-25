#!/bin/sh

# Falha rápida se algo quebrar
set -e

# Valida se DATABASE_URL está presente
if [ -z "$DATABASE_URL" ]; then
  echo "❌ DATABASE_URL não definida. Abandonando execução."
  exit 1
fi

echo "✅ Rodando migrations..."
npx prisma migrate deploy

# echo "✅ Rodando seed..."
# npx prisma db seed

echo "🚀 Iniciando aplicação..."
exec "$@"
