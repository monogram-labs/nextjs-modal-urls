'use client'

import Image from 'next/image'
import Link from 'next/link'
import { type MouseEvent } from 'react'


type Props = {
	item: any
	withSoftNavigation?: boolean
	priority?: boolean
}

export default function ItemCard({ item }: Readonly<Props>) {
	const itemHref = `/item/${item.id}`

	const handleOpenDetails = (e: MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()

		window.history.pushState({ item }, '', itemHref)
	}

	

	return (
		<div className="flex items-end">
			<div key={item.id}>
          <Image src={item.imageUrl} alt={item.title} width={150} height={150} />
          
					<h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>${item.price.toFixed(2)}</p>
          
					<Link href={itemHref} onClick={handleOpenDetails}>
            Open Details
          </Link>
        </div>
		</div>
	)
}
