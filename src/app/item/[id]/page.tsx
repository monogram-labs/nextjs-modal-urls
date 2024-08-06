import { mockItems } from "../../../data/item";
import ItemPageContent from "../../../components/ItemPageContent";

export default function ItemPage({params: {id}}: {params: {id: string}}) {
	
	const item = mockItems.find((item) => item.id === parseInt(id));

	return (
		<ItemPageContent item={item} />
	);
}
