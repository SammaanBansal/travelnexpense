export interface User {
	userId: string,
	email: string,
	name?: string,
	approver?: string,
	subordinates?: string[]
}