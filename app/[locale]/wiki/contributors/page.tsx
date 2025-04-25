import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

// Sample contributor data - replace with your actual data
const contributors = [
	{
		id: 1,
		nickname: "[S10] IUDEXG",
		contribution:
			"Provided not only a best algorithm but also a source code with visualisation for most efficient mining",
	},
	{
		id: 2,
		nickname: "[S10] Killerrr",
		contribution: "Provided maxed mystical power screenshots",
	},
	{
		id: 3,
		nickname: "[S81] gEiStToG",
		contribution: "Provided all maxed awakening screenshots",
	},
];

export default function ContributorsPage() {
	return (
		<div className="container mx-auto py-10">
			<div className="mb-10 space-y-2 text-center">
				<h1 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl">
					Our Contributors
				</h1>
				<p className="mx-auto max-w-[700px] text-muted-foreground">
					We'd like to thank all the amazing people who contributed to this
					project.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{contributors.map((contributor) => (
					<Card key={contributor.id} className="flex flex-col">
						<CardHeader>
							<CardTitle className="text-xl">{contributor.nickname}</CardTitle>
							<CardDescription>Contributor</CardDescription>
						</CardHeader>
						<CardContent className="flex-grow">
							<div className="relative">
								<p className="line-clamp-3 text-muted-foreground">
									{contributor.contribution}
								</p>
								{contributor.contribution.length > 120 && (
									<Dialog>
										<DialogTrigger asChild>
											<Button
												variant="link"
												className="mt-1 h-auto p-0 text-sm"
											>
												Read more
											</Button>
										</DialogTrigger>
										<DialogContent className="max-h-[80vh] overflow-auto sm:max-w-md">
											<DialogHeader>
												<DialogTitle>{contributor.nickname}</DialogTitle>
												<DialogDescription>Contribution</DialogDescription>
											</DialogHeader>
											<div className="space-y-2">
												<p className="text-muted-foreground">
													{contributor.contribution}
												</p>
											</div>
										</DialogContent>
									</Dialog>
								)}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
