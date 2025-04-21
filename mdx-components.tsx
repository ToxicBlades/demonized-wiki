import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
	h1: (props: HeadingProps) => (
		<h1
			className="mb-0 scroll-m-20 pt-12 font-extrabold text-4xl tracking-tight lg:text-5xl"
			{...props}
		/>
	),
	h2: (props: HeadingProps) => (
		<h2
			className="mt-8 mb-3 scroll-m-20 border-b pb-2 font-semibold text-3xl tracking-tight"
			{...props}
		/>
	),
	h3: (props: HeadingProps) => (
		<h3
			className="mt-8 mb-3 scroll-m-20 font-semibold text-2xl tracking-tight"
			{...props}
		/>
	),
	h4: (props: HeadingProps) => (
		<h4
			className="scroll-m-20 font-semibold text-xl tracking-tight"
			{...props}
		/>
	),
	p: (props: ParagraphProps) => (
		<p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />
	),
	ol: (props: ListProps) => (
		<ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />
	),
	ul: (props: ListProps) => (
		<ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
	),
	li: (props: ListItemProps) => <li className="leading-7" {...props} />,
	em: (props: ComponentPropsWithoutRef<"em">) => (
		<em className="italic" {...props} />
	),
	strong: (props: ComponentPropsWithoutRef<"strong">) => (
		<strong className="font-semibold" {...props} />
	),
	a: ({ href, children, ...props }: AnchorProps) => {
		const className = "font-medium text-primary underline underline-offset-4";

		if (href?.startsWith("/")) {
			return (
				<Link href={href} className={className} {...props}>
					{children}
				</Link>
			);
		}

		if (href?.startsWith("#")) {
			return (
				<a href={href} className={className} {...props}>
					{children}
				</a>
			);
		}

		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={className}
				{...props}
			>
				{children}
			</a>
		);
	},
	code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
		const codeHTML = children as string;
		return (
			<code
				className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm"
				dangerouslySetInnerHTML={{ __html: codeHTML }}
				{...props}
			/>
		);
	},
	blockquote: (props: BlockquoteProps) => (
		<blockquote
			className="mt-6 border-primary border-l-2 pl-6 italic"
			{...props}
		/>
	),
};

declare global {
	type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
	return components;
}
