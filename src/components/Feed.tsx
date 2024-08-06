// Feed.tsx

import { Item } from '../lib/types/item';
import DetailsModal from './DetailsModal';
import ItemCard from './ItemCard';

interface FeedProps {
  items: Item[];
}

const Feed: React.FC<FeedProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
       <ItemCard key={item.id} item={item} />
      ))}

			<DetailsModal />
    </div>
  );
};

export default Feed;
