'use client'

import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { createPortal } from 'react-dom'
import ItemPageContent from './ItemPageContent'


export const PRIMARY_TOP_NAV_ID = 'primary-top-nav'
export const CATEGORIES_TOP_NAV_ID = 'secondary-top-nav'
export const TOP_BANNER_ID = 'top-banner'


export default function DetailsModal() {
	const pathname = usePathname()
	const [activeItem, setActiveItem] = useState()

	// The element where the item details will be rendered (see layout.tsx)
	const itemPortal = useMemo(() => {
		if (typeof document === 'undefined') return

		return document.querySelector('#modal-portal')
	}, [])

	// // show/hide the main container when the item details are open/closed
	// useEffect(() => {
	// 	const mainContainer = document.querySelector('#main-container')

	// 	if (!activeItem) {
	// 		if (mainContainer) {
	// 			// Show the main container when the item details are closed
	// 			mainContainer.classList.remove('hidden')
	// 		}
	// 	} else if (mainContainer) {
	// 		// Scroll to see the top of the page when the item details are open
	// 		// if the categories nav is fixed at the top
	// 		const categoriesNavTop =
	// 			document.querySelector(`#${CATEGORIES_TOP_NAV_ID}`)?.getBoundingClientRect().top || 0

	// 		if (categoriesNavTop === 0) {
	// 			const primaryNavHeight =
	// 				document.querySelector(`#${PRIMARY_TOP_NAV_ID}`)?.getBoundingClientRect().height || 0
	// 			const topBannerHeight =
	// 				document.querySelector(`#${TOP_BANNER_ID}`)?.getBoundingClientRect().height || 0

	// 			window.scrollTo(0, primaryNavHeight + topBannerHeight + 1)
	// 		}

	// 		// Delay the hiding of the main container to avoid an bug
	// 		// in iOS Chrome where the page is not scrolled to the top
	// 		// setTimeout(() => {
	// 			// Hide the main container when the item details are open
	// 			mainContainer.classList.add('hidden')
	// 		// }, 250)
	// 	}
	// }, [activeItem])

	// (b) Opening the modal when clicking on the "Details" button 
	// in the item cards withSoftNavigation
	useEffect(() => {
		if (typeof window === 'undefined') return

		setActiveItem(window?.history?.state?.item)
	}, [pathname])

	// (c) Handle the state of the modal when the user navigates between pages using
	// the browser's back/forward buttons
	useEffect(() => {
		const handlePopState = (e: PopStateEvent) => setActiveItem(e.state?.item)

		// Listen for the browser's back/forward buttons to close the modal
		window.addEventListener('popstate', handlePopState)

		return () => {
			window.removeEventListener('popstate', handlePopState)
		}
	}, [])

	if (!activeItem || !itemPortal) {
		return null
	}

	// (a) Render the item details in a portal
	return createPortal(
		<div className="absolute top-0 left-0 right-0 bottom-0 bg-white bg-opacity-70 flex justify-center items-center z-20">
			<div className='w-[80%] h-auto max-w-[500px] max-h-[500px] border-none rounded-md bg-white p-10 relative flex justify-center items-center text-48 font-500 text-black'>
				<ItemPageContent item={activeItem} isClientSide />
			</div>
		</div>,
		itemPortal
	)
}
