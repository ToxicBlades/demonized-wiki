import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	pageExtensions: ["md", "mdx", "ts", "tsx"],
	experimental: {
		mdxRs: true,
	},
	output: "standalone",
};

export default withNextIntl(createMDX()(nextConfig));
