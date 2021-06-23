import { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';

// types
import { Item } from '../../types/Item';

interface ItemsListItemProps extends Item {
  index: number;
}
/* eslint-disable react/jsx-props-no-spreading */
const ItemsListItem = ({ id, index, value }: ItemsListItemProps) => (
  <Draggable draggableId={id} index={index}>
    {(draggableProvided) => (
      <div
        className="p-2 hover:bg-gray-50 cursor-pointer text-center shadow-sm"
        ref={draggableProvided.innerRef}
        {...draggableProvided.draggableProps}
        {...draggableProvided.dragHandleProps}
      >
        {value}
      </div>
    )}
  </Draggable>
);

export default memo(ItemsListItem);
