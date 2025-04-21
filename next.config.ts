import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	pageExtensions: ["md", "mdx", "ts", "tsx"],
	experimental: {
		mdxRs: true,
	},
	output: "standalone",
};

// Merge MDX config with Next.js config
export default createMDX()(nextConfig);
