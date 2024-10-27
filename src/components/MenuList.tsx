import type { itemsType } from "../App";

import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
	const elements: itemsType[] = foodItems;

	return (
		<>
			{
				/* render a MenuItem component for each element of the foodItems array */
				elements.map((items) => (
					<MenuItem {...items} key={items.id} />
				))
			}
		</>
	);
}

export default MenuList;
