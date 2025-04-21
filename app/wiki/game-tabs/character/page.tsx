"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	ArrowUp,
	BarChart3,
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
import AttributeTab from "./(components)/attribute-tab";
import AwakeningTab from "./(components)/awakening-tab";
import HelperTab from "./(components)/helper-tab";
import MercenaryTab from "./(components)/mercenary-tab";
import MysticalPowerTab from "./(components)/mystical-power-tab";
import PassiveTab from "./(components)/passive-tab";
import PromoteTab from "./(components)/promote-tab";
import StatTab from "./(components)/stat-tab";
import UpgradeTab from "./(components)/upgrade-tab";

export default function CharacterTab() {
	const [activeTab, setActiveTab] = useState("stat");

	return (
		<div className="container mx-auto p-4">
			<Card>
				<CardHeader>
					<CardTitle className="font-bold text-2xl">Character</CardTitle>
					<CardDescription className="">
						Manage your character's abilities, appearance and companions
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Tabs
						value={activeTab}
						onValueChange={setActiveTab}
						className="w-full"
					>
						<div className="overflow-x-auto pb-2">
							<TabsList className=" flex h-auto min-w-max flex-nowrap p-1">
								<TabsTrigger value="stat" className="flex items-center gap-1">
									<BarChart3 className="h-4 w-4" />
									<span>Stat</span>
								</TabsTrigger>
								<TabsTrigger
									value="upgrade"
									className="flex items-center gap-1"
								>
									<ArrowUp className="h-4 w-4" />
									<span>Upgrade</span>
								</TabsTrigger>
								<TabsTrigger
									value="promote"
									className="flex items-center gap-1"
								>
									<Crown className="h-4 w-4" />
									<span>Promote</span>
								</TabsTrigger>
								<TabsTrigger
									value="appearance"
									className="flex items-center gap-1"
								>
									<Palette className="h-4 w-4" />
									<span>Appearance</span>
								</TabsTrigger>
								<TabsTrigger
									value="awakening"
									className="flex items-center gap-1"
								>
									<Sparkles className="h-4 w-4" />
									<span>Awakening</span>
								</TabsTrigger>
								<TabsTrigger
									value="mystical-power"
									className="flex items-center gap-1"
								>
									<Zap className="h-4 w-4" />
									<span>Mystical Power</span>
								</TabsTrigger>
								<TabsTrigger
									value="passive"
									className="flex items-center gap-1"
								>
									<Shield className="h-4 w-4" />
									<span>Passive</span>
								</TabsTrigger>
								<TabsTrigger
									value="attribute"
									className="flex items-center gap-1"
								>
									<Target className="h-4 w-4" />
									<span>Attribute</span>
								</TabsTrigger>
								<TabsTrigger value="helper" className="flex items-center gap-1">
									<UserPlus className="h-4 w-4" />
									<span>Helper</span>
								</TabsTrigger>
								<TabsTrigger
									value="mercenary"
									className="flex items-center gap-1"
								>
									<Swords className="h-4 w-4" />
									<span>Mercenary</span>
								</TabsTrigger>
							</TabsList>
						</div>

						<TabsContent value="stat">
							<StatTab />
						</TabsContent>
						<TabsContent value="upgrade">
							<UpgradeTab />
						</TabsContent>
						<TabsContent value="promote">
							<PromoteTab />
						</TabsContent>
						<TabsContent value="appearance">
							<AppearanceTab />
						</TabsContent>
						<TabsContent value="awakening">
							<AwakeningTab />
						</TabsContent>
						<TabsContent value="mystical-power">
							<MysticalPowerTab />
						</TabsContent>
						<TabsContent value="passive">
							<PassiveTab />
						</TabsContent>
						<TabsContent value="attribute">
							<AttributeTab />
						</TabsContent>
						<TabsContent value="helper">
							<HelperTab />
						</TabsContent>
						<TabsContent value="mercenary">
							<MercenaryTab />
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</div>
	);
}
