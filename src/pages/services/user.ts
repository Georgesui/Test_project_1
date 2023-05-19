export interface User {
	id: number,
	firstName: string, 
	lastName: string,
	image: string
}

export interface UserProps {
	users: User[];
	total: number;
	skip: number;
	limit: number;
}

export type UserDetailsForOneItem = {
	users: User[];
}

export type userData = {
	allUsers: UserProps;
}

export type paginationData= {
	setPage: (page:number)=> void;
	currentPage: number;
	page: number;
	endPage: number;
	siblingCount: number;
}

export type paginationProperty = {
	firstPageIndex: number;
	DOTS: string;
	middleRange: number;
	lastPageIndex: number;
	leftRange: [];
	rightRange: [];
}

export type paginationButtons = { 
	paginationButtons: paginationProperty
}

export async function getAllUsers(): Promise<User[]> {
	const response = await fetch(`${process.env.USER_URL}`);
	const data = await response.json();
	return data.users;
}

export async function getOneUser(id:number):Promise<User> {
	const response = await fetch(`${process.env.USER_ON_PAGE}/${id}`);
	return response.json();
}