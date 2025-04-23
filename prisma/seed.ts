import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const fractions = [
    // APTO
    { location: "01", fraction: 0.00549, type: "APTO" },
    { location: "02", fraction: 0.00547, type: "APTO" },
    { location: "03", fraction: 0.00297, type: "APTO" },
    { location: "04", fraction: 0.00297, type: "APTO" },
    { location: "05", fraction: 0.00297, type: "APTO" },
    { location: "06", fraction: 0.003, type: "APTO" },
    { location: "07", fraction: 0.00151, type: "APTO" },
    { location: "08", fraction: 0.00149, type: "APTO" },
    { location: "09", fraction: 0.00149, type: "APTO" },
    { location: "10", fraction: 0.00149, type: "APTO" },
    { location: "11", fraction: 0.00149, type: "APTO" },
    { location: "12", fraction: 0.00233, type: "APTO" },
    { location: "13", fraction: 0.00547, type: "APTO" },
    { location: "14", fraction: 0.00398, type: "APTO" },
    { location: "15", fraction: 0.00151, type: "APTO" },
    { location: "16", fraction: 0.00149, type: "APTO" },
    { location: "17", fraction: 0.00149, type: "APTO" },
    { location: "18", fraction: 0.00149, type: "APTO" },
    { location: "19", fraction: 0.00149, type: "APTO" },
    { location: "20", fraction: 0.00197, type: "APTO" },

    // LOJA
    { location: "01", fraction: 0.00432, type: "LOJA" },
    { location: "02", fraction: 0.00251, type: "LOJA" },
    { location: "03", fraction: 0.00177, type: "LOJA" },
    { location: "04", fraction: 0.00146, type: "LOJA" },
    { location: "05", fraction: 0.00129, type: "LOJA" },
    { location: "06", fraction: 0.00127, type: "LOJA" },
    { location: "07", fraction: 0.00127, type: "LOJA" },
    { location: "08", fraction: 0.00127, type: "LOJA" },
    { location: "09", fraction: 0.00425, type: "LOJA" },
    { location: "10", fraction: 0.00425, type: "LOJA" },
    { location: "11", fraction: 0.00173, type: "LOJA" },
    { location: "12", fraction: 0.00173, type: "LOJA" },
    { location: "13", fraction: 0.00351, type: "LOJA" },
    { location: "14", fraction: 0.00339, type: "LOJA" },
    { location: "15", fraction: 0.00131, type: "LOJA" },
    { location: "16", fraction: 0.0023, type: "LOJA" },
    { location: "17", fraction: 0.0018, type: "LOJA" },
    { location: "18", fraction: 0.00215, type: "LOJA" },
    { location: "19", fraction: 0.00107, type: "LOJA" },
    { location: "20", fraction: 0.00128, type: "LOJA" },
    { location: "21", fraction: 0.00099, type: "LOJA" },
    { location: "22", fraction: 0.00204, type: "LOJA" },
  ];

  await prisma.fraction.createMany({
    data: fractions,
    skipDuplicates: true,
  });

  console.log("✅ Seed inserida com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
