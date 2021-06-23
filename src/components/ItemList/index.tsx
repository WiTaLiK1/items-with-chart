import { memo, useCallback } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

// types
import { Item } from '../../types/Item';
// components
import ItemsListItem from './ItemsListItem';

interface ItemListProps {
  items?: Array<Item>;
  changeOrder: (startIndex: number, endIndex: number) => void;
}

const ItemsList = ({ items, changeOrder }: ItemListProps) => {
  const handleDragEnd = useCallback(
    (result: DropResult) => {
      // dropped outside the list
      if (!result.destination) {
        return;
      }

      changeOrder(result.source.index, result.destination.index);
    },
    [changeOrder]
  );

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="py-6">
            {items?.map(({ value, id }, index) => (
              <ItemsListItem key={id} value={value} id={id} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

ItemsList.defaultProps = {
  items: [],
};

export default memo(ItemsList);
