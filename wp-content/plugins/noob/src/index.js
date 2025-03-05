import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import metadata from './block.json';

registerBlockType( metadata.name, {

    edit: () => {
        const blockProps = useBlockProps();

        return (
            <div { ...blockProps }>
                <InnerBlocks />
            </div>
        );
    },

    save: () => {
        const blockProps = useBlockProps.save();

        return (
            <div { ...blockProps }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );