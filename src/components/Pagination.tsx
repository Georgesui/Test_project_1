import React, {FC, useMemo} from 'react';
import {paginationData} from '../pages/services/user'

const Pagination:FC<paginationData> = ({setPage, currentPage, page,endPage,  siblingCount = 1 }) => {

	const ourPage = (page:number) => {
		const checkedPage = page;
		setPage(checkedPage)
	} 

	const range = (start:number, end:number) => {
		let length = end - start + 1;
		return Array.from({ length }, (_, idx) => idx + start);
	 };

	 const DOTS ='...';

	const paginationButtons:any = useMemo(()=>{

		const onPage = page;
		const leftSiblingIndex = Math.max(onPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(
			onPage + siblingCount,
		  10
		);

		const shouldShowLeftDots = leftSiblingIndex > 2;
   	const shouldShowRightDots = rightSiblingIndex < 10 - 2;

   	 const firstPageIndex = 1;
   	 const lastPageIndex = 10;

		 if (!shouldShowLeftDots && shouldShowRightDots) {
			let leftItemCount = 3 + 2 * siblingCount;
			let leftRange = range(1, leftItemCount);
	
			return [...leftRange, DOTS, lastPageIndex];
		 }

		 if (shouldShowLeftDots && !shouldShowRightDots) {
      
			let rightItemCount = 3 + 2 * siblingCount;
			let rightRange = range(
			  10 - rightItemCount + 1,
			  10
			);
			return [firstPageIndex, DOTS, ...rightRange];
		 }

		 if (shouldShowLeftDots && shouldShowRightDots) {
			let middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
		 }
	}, [setPage, currentPage, page, endPage,  siblingCount  ])

  return (
	<ul className='listContainer'>
			{paginationButtons.map((el,index)=>
			<li key={index} className='paginationButton'>
			<button onClick={()=>ourPage(el)} className='paginationEvenButton'>{el}</button>
			</li>)}
		</ul>
  )
}

export default Pagination