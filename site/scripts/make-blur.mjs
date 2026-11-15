// Builds content/blur.json: a tiny blurred preview (base64 WebP) for every site image,
// shown instantly while the real image loads. Run: node scripts/make-blur.mjs
import sharp from "sharp";
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = "public";
const SKIP = /logo-|favicon|texture-collage|\.svg$/;
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const files = [...walk(join(ROOT, "images")), ...walk(join(ROOT, "video"))].filter((f) => /\.(webp|jpe?g|png)$/i.test(f) && !SKIP.test(f));
const out = {};
for (const f of files.sort()) {
  const buf = await sharp(f).resize(10, 10, { fit: "inside" }).webp({ quality: 40 }).toBuffer();
  out["/" + relative(ROOT, f).split(sep).join("/")] = `data:image/webp;base64,${buf.toString("base64")}`;
}
writeFileSync("content/blur.json", JSON.stringify(out));
console.log(Object.keys(out).length, "previews,", Math.round(JSON.stringify(out).length / 1024), "KB");
