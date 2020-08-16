/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Modal from './Modal';
import VList from './VList';
import Button from './Button';

type Props = {
    response: string | undefined,
    onClose: () => void,
};

const lineLengthStyle = css({
    width: '35em',
});

const ResponseModal: React.FunctionComponent<Props> = ({ response, onClose }) => {
    return (
        <Modal title="Response" isOpen={response != null} onClose={onClose}>
            <VList>
                <div css={lineLengthStyle}>{response}</div>
                <Button type="button" onClick={onClose}>Okay</Button>
            </VList>
        </Modal>
    )
};

export default ResponseModal;
