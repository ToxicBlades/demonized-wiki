"use client";

import { TypographyH1, TypographyMuted } from "@/components/Typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RotateCw } from "lucide-react";
import { useMessages } from "next-intl";
import { useEffect, useState } from "react";

const rows = 6;
const cols = 5;
const totalSquares = rows * cols;

export default function TileGridPage() {
	const t = useMessages().MineGrid;
	const [squares, setSquares] = useState<boolean[]>(
		Array(totalSquares).fill(false),
	);
	const [liveScore, setLiveScore] = useState<number>(0);
	const [cumulativeLiveScore, setCumulativeLiveScore] = useState<number>(0);
	const [remainingCount, setRemainingCount] = useState<number>(0);
	const [breakdownMap, setBreakdownMap] = useState<Record<number, number>>({});
	const [bestIndex, setBestIndex] = useState<number | null>(null);
	const [topScores, setTopScores] = useState<number[]>([]);

	// Calculates the "impact" score of a tile at `index`
	function calculateImpact(index: number, sqs: boolean[]): number {
		if (sqs[index]) return 0;
		const row = Math.floor(index / cols);
		const col = index % cols;
		let count = 0;
		for (let c = 0; c < cols; c++) {
			if (!sqs[row * cols + c]) count++;
		}
		for (let r = 0; r < rows; r++) {
			if (!sqs[r * cols + col]) count++;
		}
		return count - 1;
	}

	// Runs through all tiles to compute liveScore, bestIndex, breakdown, etc.
	function calculateMetrics(sqs: boolean[]) {
		let bestScore = 0;
		let bestIdx: number | null = null;
		let totalImpact = 0;
		let scoreCount = 0;
		const scoreMap: Record<number, number> = {};

		sqs.forEach((isRed, idx) => {
			const score = calculateImpact(idx, sqs);
			if (!isRed) {
				totalImpact += score;
				scoreCount++;
				scoreMap[score] = (scoreMap[score] || 0) + 1;
				if (score > bestScore) {
					bestScore = score;
					bestIdx = idx;
				}
			}
		});

		return { totalImpact, scoreCount, scoreMap, bestIdx };
	}

	// Whenever the board changes, recalc all stats
	useEffect(() => {
		const { totalImpact, scoreCount, scoreMap, bestIdx } =
			calculateMetrics(squares);
		setLiveScore(totalImpact);
		setRemainingCount(scoreCount);
		setBreakdownMap(scoreMap);
		setBestIndex(bestIdx);
		setCumulativeLiveScore((prev) => prev + totalImpact);
	}, [squares]);

	// Clicking a tile either "paints" it red, or if already red, explodes its row+column
	const handleClick = (idx: number) => {
		setSquares((prev) => {
			const newSqs = [...prev];
			if (!newSqs[idx]) {
				newSqs[idx] = true;
			} else {
				const row = Math.floor(idx / cols);
				const col = idx % cols;
				for (let c = 0; c < cols; c++) newSqs[row * cols + c] = true;
				for (let r = 0; r < rows; r++) newSqs[r * cols + col] = true;
			}
			return newSqs;
		});
	};

	// Reset button: snapshot current cumulative into topScores, then clear board
	const resetGrid = () => {
		setTopScores((prev) => {
			const updated = [...prev, cumulativeLiveScore]
				.sort((a, b) => b - a)
				.slice(0, 3);
			return updated;
		});
		setSquares(Array(totalSquares).fill(false));
		setCumulativeLiveScore(0);
	};

	const medals = ["🥇", "🥈", "🥉"];

	return (
		<div className="flex min-h-screen flex-col items-center bg-background p-2">
			<div className="w-full max-w-4xl">
				<div className="mb-4 text-center">
					<TypographyH1>{t.title}</TypographyH1>
					<TypographyMuted>{t.created_by}</TypographyMuted>
				</div>

				<p className="mb-4 text-center">{t.instructions}</p>

				<p className="mb-6 text-center text-muted-foreground">
					{t.description}
				</p>

				<div className="flex w-full flex-col items-start justify-center gap-6 md:flex-row">
					<div className="mb-4 flex w-full justify-center md:hidden">
						<Button onClick={resetGrid} className="gap-2">
							<RotateCw className="h-4 w-4" />
							{t.reset_button}
						</Button>
					</div>

					<div className="mx-auto grid w-full max-w-md grid-cols-5 gap-1 rounded-lg bg-muted p-4 shadow-md">
						{squares.map((isRed, idx) => (
							<div
								key={idx}
								className={`relative flex aspect-square w-full cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ${isRed ? "border-destructive/50 bg-destructive" : "border-border bg-muted-foreground/10 hover:bg-muted-foreground/20"}
                  ${bestIndex === idx ? "z-2 ring-2 ring-yellow-400" : ""}
                `}
								onClick={() => handleClick(idx)}
							>
								{!isRed && (
									<span className="absolute right-1.5 bottom-1 font-medium text-xs">
										{calculateImpact(idx, squares)}
									</span>
								)}
							</div>
						))}
					</div>

					<Card className="w-full md:w-64">
						<CardContent className="space-y-4 p-4">
							<div>
								<Badge
									variant="outline"
									className="mb-1 w-full justify-start bg-yellow-500/10 text-yellow-500"
								>
									{t.live_score}
								</Badge>
								<p className="font-bold text-xl">{liveScore}</p>
							</div>

							<div>
								<Badge
									variant="outline"
									className="mb-1 w-full justify-start bg-green-500/10 text-green-500"
								>
									{t.max_score}
								</Badge>
								<p className="font-semibold text-lg">{cumulativeLiveScore}</p>
							</div>

							<div>
								<Badge
									variant="outline"
									className="mb-1 w-full justify-start bg-primary/10 text-primary"
								>
									{t.remaining_tiles}
								</Badge>
								<p>{remainingCount}</p>
							</div>

							<Separator />

							<div>
								<h3 className="mb-2 font-medium">{t.tiles_by_impact}</h3>
								<div className="space-y-1 text-sm">
									{Object.entries(breakdownMap)
										.sort((a, b) => Number(b[0]) - Number(a[0]))
										.map(([score, count]) => (
											<div key={score} className="flex justify-between">
												<span>
													{t.score_label} {score}:
												</span>
												<span>{count}</span>
											</div>
										))}
								</div>
							</div>

							<Separator />

							<div>
								<h3 className="mb-2 font-medium">{t.high_scores}</h3>
								{topScores.length > 0 ? (
									<div className="space-y-1">
										{topScores.map((score, i) => (
											<div key={i} className="flex items-center gap-2">
												<span>{medals[i]}</span>
												<span>
													{t.score_number} {i + 1}:
												</span>
												<span className="font-medium">{score}</span>
											</div>
										))}
									</div>
								) : (
									<p className="text-muted-foreground text-sm">{t.no_scores}</p>
								)}
							</div>
						</CardContent>
					</Card>
				</div>

				<div className="mt-6 hidden justify-center md:flex">
					<Button onClick={resetGrid} className="cursor-pointer gap-2">
						<RotateCw className="h-4 w-4" />
						{t.reset_button}
					</Button>
				</div>
			</div>
		</div>
	);
}
