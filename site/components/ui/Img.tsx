import NextImage, { type ImageProps } from "next/image";
import BLUR from "@/content/blur.json";

const PREVIEWS = BLUR as Record<string, string>;

/**
 * next/image with an instant blurred preview: every site image has a tiny (~100 byte) preview
 * in content/blur.json (built by scripts/make-blur.mjs), shown until the real image arrives,
 * so no picture ever appears as an empty box.
 */
export default function Img(props: ImageProps) {
  const blur = typeof props.src === "string" ? PREVIEWS[props.src] : undefined;
  return <NextImage {...(blur && !props.placeholder ? { placeholder: "blur" as const, blurDataURL: blur } : {})} {...props} />;
}
