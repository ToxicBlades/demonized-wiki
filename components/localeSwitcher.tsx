"use client";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { languages } from "@/lib/static/languages";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useState } from "react";

// Export the language type that can be used throughout the application

// Define the supported languages
const SUPPORTED_LANGUAGES: languages[] = ["en", "ru"];

// Define the language labels
const LANGUAGE_LABELS: Record<languages, string> = {
	en: "English",
	ru: "Russian",
};

export function LanguageSwitcher() {
	const locale = useLocale() as languages;
	const router = useRouter();
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	const handleLocaleChange = (newLocale: languages) => {
		// Navigate to the same path but with the new locale
		router.replace(pathname, { locale: newLocale });
		router.refresh();
		setOpen(false);
	};

	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="sm" className="flex items-center gap-2">
					<Globe className="h-4 w-4" />
					<span>{LANGUAGE_LABELS[locale] || locale}</span>
					<ChevronDown className="h-4 w-4 opacity-50" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{SUPPORTED_LANGUAGES.map((lang) => (
					<DropdownMenuItem
						key={lang}
						onClick={() => handleLocaleChange(lang)}
						className="flex items-center justify-between gap-2"
					>
						<span>{LANGUAGE_LABELS[lang] || lang}</span>
						{locale === lang && <Check className="h-4 w-4" />}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
