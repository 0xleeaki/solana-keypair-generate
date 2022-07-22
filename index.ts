import bs58 from "bs58";
import { writeFile } from "fs/promises";
import path from "path";

const main = async () => {
  const decodeData = bs58.decode("PRIVATE_KEY");
  const data = Array.from(Buffer.from(decodeData)).map((t) => t);

  const file = path.resolve(process.cwd(), `keypair.json`);
  await writeFile(file, JSON.stringify(data, null, 2));
};

main().catch((error) => {
  console.log("error", error);
});
