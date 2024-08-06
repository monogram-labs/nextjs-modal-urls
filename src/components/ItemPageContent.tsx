import Image from 'next/image'

import { Suspense } from 'react'

type Props = {
	item: any,
	isClientSide?: boolean
}
export default function ItemPageContent({
	item,
	isClientSide,
}: Readonly<Props>) {
	return (
		<div className="container justify-between p-4 sm:px-6 lg:px-10 xl:px-20">
			

			<div className="relative flex w-full gap-10 py-5 max-lg:flex-col">

				<Image src={item.imageUrl} alt={item.title} className="feed-item-image" width={150} height={150} />

				<div className="mx-auto flex h-fit w-full flex-col lg:gap-10 xl:sticky xl:top-28">
					<div className="flex flex-col gap-5">
						<h1 className="text-2xl font-bold">{item.title}</h1>
						<p className="text-lg">{item.description}</p>
					</div>
				</div>

				{/* {!isClientSide ? (
					<Suspense fallback={"Loading..."}>
						<AsyncSideBar
							type="offer"
							id={item.id as string}
						/>
					</Suspense>
				) : (
					<SideBar type="offer" id={item.id as string} shouldFetchClientSide />
				)} */}
			</div>
		</div>
	)
}
