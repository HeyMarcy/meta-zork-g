import React, { useEffect } from 'react';
import InventoryItem from '../definitions/InventoryItem';
import Doodad from '../definitions/Doodad';
import Modal from './Modal';
import { useState } from 'react';
import Button from './Button';
import Select from './Select';
import HList from './HList';
import VList from './VList';
import uniqueSlugs from '../lib/uniqueSlugs';
import sortUsedInventory from '../lib/sortUsedInventory';
import CheckBox from './Checkbox';

type Props = {
    slugToUse?: string;
    doodads: Doodad[];
    inventory: InventoryItem[];
    onSelectItem: (otherSlug: string) => void,
    onClose: () => void,
};

const UseItemModal: React.FunctionComponent<Props> = (props) => {
    const { onSelectItem, inventory, doodads, slugToUse, onClose } = props;
    const [showUsedItems, setShowUsedItems] = useState(false);
    const [otherSlug, setOtherSlug] = useState('');
    useEffect(
        () => { setOtherSlug('') },
        [slugToUse],
    );

    const onSubmit = (e: React.MouseEvent) => {
        e.preventDefault();

        if (otherSlug === '') {
            return;
        }

        onSelectItem(otherSlug);
    };

    const fixedInventory = uniqueSlugs(inventory);
    const sortedInventory = fixedInventory.sort(sortUsedInventory);
    const mostRecentInventory = sortedInventory.reverse();
    const inventorySource = showUsedItems ? mostRecentInventory : mostRecentInventory.filter(item => item.neverUsed);

    const options = [
        { value: '', label: '-select an item-' },
        ...doodads.map(doodad => ({ value: doodad.slug, label: `${doodad.lookMessage} (${doodad.slug})` })),
        ...inventorySource.map(item => ({ value: item.slug, label: `${item.inventoryMessage} (${item.slug})` })),
    ];

    return (
        <Modal title="Use Item" isOpen={slugToUse != null} onClose={onClose}>
            <VList>
                <label htmlFor="item-to-use">
                    <div>Select an item to use {slugToUse} on.</div>
                    <Select id="item-to-use" onSelectChange={setOtherSlug} value={otherSlug} options={options} />
                </label>
                <CheckBox id="show-used-items" label="Show used items" selected={showUsedItems} onToggle={setShowUsedItems} />
                <HList>
                    <Button type="button" theme="link" onClick={onClose}>Cancel</Button>
                    <Button onClick={onSubmit}>Use it</Button>
                </HList>
            </VList>
        </Modal>
    );
};

export default UseItemModal;
