"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
	ArrowUp,
	BarChart3,
	ChevronDown,
	Crown,
	Palette,
	Shield,
	Sparkles,
	Swords,
	Target,
	UserPlus,
	Zap,
} from "lucide-react";
import { useState } from "react";
import AppearanceTab from "./(components)/appearance-tab";
import PromoteTab from "./(components)/promote-tab";
import StatTab from "./(components)/stat-tab";
import UpgradeTab from "./(components)/upgrade-tab";

// Placeholder components for other tabs
const AwakeningTab = () => <div className="p-4">Awakening Tab Content</div>;
const MysticalPowerTab = () => (
	<div className="p-4">Mystical Power Tab Content</div>
);
const PassiveTab = () => <div className="p-4">Passive Tab Content</div>;
const AttributeTab = () => <div className="p-4">Attribute Tab Content</div>;
const HelperTab = () => <div className="p-4">Helper Tab Content</div>;
const MercenaryTab = () => <div className="p-4">Mercenary Tab Content</div>;

export default function CharacterTab() {
	const [activeTab, setActiveTab] = useState("stat");

	// Define tabs with their icons and labels for reuse
	const tabs = [
		{ id: "stat", icon: BarChart3, label: "Stat" },
		{ id: "upgrade", icon: ArrowUp, label: "Upgrade" },
		{ id: "promote", icon: Crown, label: "Promote" },
		{ id: "appearance", icon: Palette, label: "Appearance" },
		{ id: "awakening", icon: Sparkles, label: "Awakening" },
		{ id: "mystical-power", icon: Zap, label: "Mystical Power" },
		{ id: "passive", icon: Shield, label: "Passive" },
		{ id: "attribute", icon: Target, label: "Attribute" },
		{ id: "helper", icon: UserPlus, label: "Helper" },
		{ id: "mercenary", icon: Swords, label: "Mercenary" },
	];

	// Find the active tab object
	const activeTabObj = tabs.find((tab) => tab.id === activeTab) || tabs[0];

	return (
		<div className="container mx-auto px-2 py-4 sm:px-4">
			<Card className="w-full">
				<CardHeader className="p-4">
					<div className="flex items-center justify-between">
						<div>
							<CardTitle className="font-bold text-xl sm:text-2xl">
								Character
							</CardTitle>
							<CardDescription className="mt-1 text-sm">
								Manage your character's abilities, appearance and companions
							</CardDescription>
						</div>
					</div>
				</CardHeader>
				<CardContent className="p-3 sm:p-6">
					{/* Mobile Dropdown Navigation */}
					<div className="mb-4 block md:hidden">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="outline" className="w-full justify-between">
									<div className="flex items-center gap-2">
										<activeTabObj.icon className="h-4 w-4" />
										<span>{activeTabObj.label}</span>
									</div>
									<ChevronDown className="h-4 w-4 opacity-50" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-[calc(100vw-2rem)] max-w-[350px]">
								{tabs.map((tab) => (
									<DropdownMenuItem
										key={tab.id}
										className={cn(
											"flex cursor-pointer items-center gap-2 py-2",
											activeTab === tab.id && "bg-accent",
										)}
										onClick={() => setActiveTab(tab.id)}
									>
										<tab.icon className="h-4 w-4" />
										<span>{tab.label}</span>
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					</div>

					{/* Tablet/Desktop Tab Navigation */}
					<div className="hidden md:block">
						<Tabs
							value={activeTab}
							onValueChange={setActiveTab}
							className="w-full"
						>
							<TabsList className="grid h-auto grid-cols-5 gap-1 lg:grid-cols-10">
								{tabs.map((tab) => (
									<TabsTrigger
										key={tab.id}
										value={tab.id}
										className="flex h-auto cursor-pointer flex-col items-center justify-center px-1 py-2 text-center"
									>
										<tab.icon className="mb-1 h-4 w-4" />
										<span className="font-medium text-xs">
											{tab.id === "mystical-power" ? "Mystical" : tab.label}
										</span>
									</TabsTrigger>
								))}
							</TabsList>
						</Tabs>
					</div>

					{/* Tab Content */}
					<div className="mt-4">
						{activeTab === "stat" && <StatTab />}
						{activeTab === "upgrade" && <UpgradeTab />}
						{activeTab === "promote" && <PromoteTab />}
						{activeTab === "appearance" && <AppearanceTab />}
						{activeTab === "awakening" && <AwakeningTab />}
						{activeTab === "mystical-power" && <MysticalPowerTab />}
						{activeTab === "passive" && <PassiveTab />}
						{activeTab === "attribute" && <AttributeTab />}
						{activeTab === "helper" && <HelperTab />}
						{activeTab === "mercenary" && <MercenaryTab />}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
