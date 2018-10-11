export interface Claim {
	userId: string,
	title: string,
	description: string,
	startDate: Date,
	endDate: Date,
	status: "PENDING" | "APPROVED" | "CLAIMED",
	category: "FOOD" | "TRAVEL" | "ACCOMODATION" | "OTHER",
	receiptImgUrls: string[]
}