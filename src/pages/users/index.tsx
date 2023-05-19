import React, {useEffect, useState } from 'react';
import {userData,} from '../services/user';
import { useRouter } from 'next/router';
import Pagination from '../../components/Pagination'
import { GetServerSidePropsContext } from 'next';
import UserForm from '../../components/UserForm';
import UserItem from '../../components/UserItem'

const totalPages = 10;

 const UsersPage = ({allUsers}:userData) => {
	const router = useRouter();
	const users = allUsers.users;
	const total = allUsers.total;
	const skip = allUsers.skip;

	const [currentPage, setCurrenPage] = useState(1);
	const [page, setPage] = useState(skip/totalPages);
	const [endPage, setEndPage] = useState(Math.ceil(total/totalPages))

	useEffect(()=> {
		router.push(`/users?page=${page}`)
	},[page])

  return (<>
	<h1>Users</h1>
		<UserForm />
		<UserItem users={users}/>
	  <Pagination 
	  setPage={setPage}
	  currentPage={currentPage}
	  page={page}
	  endPage={endPage}
	  siblingCount={1}
	  />
	 </>
  )
}

export default UsersPage;

export const getServerSideProps = async (context:GetServerSidePropsContext) => {
	try{
		const {query} = context;
		const pageNumber = parseInt(query.page as string, 10);
		const response = await fetch(`${process.env.USER_URL}=${totalPages}&skip=${(pageNumber-1)*totalPages}`);
		const allUsers = await response.json();
		return {
			props: {
				allUsers
			}
		}
	}
	catch (err) {
		throw new Error('Fetching Erro')
	}

}
