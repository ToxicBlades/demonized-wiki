import { Loader2 } from "lucide-react";

export default function LoadingComponent() {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8">
			<div className="relative">
				<div className="absolute inset-0 animate-spin rounded-full border-primary border-b-2" />
				<div className="absolute inset-2 animate-[spin_3s_linear_infinite] animate-spin rounded-full border-secondary border-b-2" />
				<div className="absolute inset-4 animate-[spin_5s_linear_infinite] animate-spin rounded-full border-accent border-b-2" />
				<div className="flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-lg">
					<Loader2 className="h-8 w-8 animate-spin text-primary" />
				</div>
			</div>
			<div className="text-center">
				<p className="font-semibold text-lg text-primary">Loading</p>
				<p className="text-muted-foreground text-sm">
					Please wait while we prepare your content
				</p>
			</div>
		</div>
	);
}
