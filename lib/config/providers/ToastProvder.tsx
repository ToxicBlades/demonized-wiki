"use client";

import { Toaster } from "react-hot-toast";

export const ToastProvider = () => {
	return (
		<Toaster
			reverseOrder={false}
			toastOptions={{
				// Default options
				duration: 4000,
				style: {
					padding: "16px 20px",
					color: "#fff",
					background: "#333",
					fontSize: "16px",
					lineHeight: "1.5",
					maxWidth: "400px",
					wordBreak: "break-word",
				},
				success: {
					style: {
						background: "#22c55e", // green
					},
					iconTheme: {
						primary: "#fff",
						secondary: "#15803d",
					},
				},
				error: {
					style: {
						background: "#ef4444", // red
					},
					iconTheme: {
						primary: "#fff",
						secondary: "#991b1b",
					},
				},
				loading: {
					style: {
						background: "#3b82f6", // blue
					},
				},
			}}
		/>
	);
};
