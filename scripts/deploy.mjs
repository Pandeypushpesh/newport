import { spawnSync } from "node:child_process";

const token = process.env.VERCEL_TOKEN;

if (!token) {
  console.error("VERCEL_TOKEN is missing. Add it to your environment or .env.local before deploying.");
  process.exit(1);
}

const command = process.platform === "win32" ? "npx.cmd" : "npx";

const result = spawnSync(command, ["vercel", "--prod", "--token", token], {
  stdio: "inherit",
  shell: false
});

process.exit(result.status ?? 1);

