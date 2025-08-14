import React, { useState } from 'react';
import Modal from 'react-modal';
import { BaseModalContainer } from './styled.components';

const BaseModal = ({
    // t,
    isModal,
    // setIsModal,
    props
}) => {

    const [boxStyles, setBoxStyles] = useState({
        overlay: {
            zIndex: 103
        },
        content: {
            margin: 'auto',
            padding: '0',
            inset: '0',
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
            border: "1px solid #302C29",
            borderRadius: '0px',
            background: "#0a0a0a"
        }
    });

    return (
        <>
            <Modal
                isOpen={isModal}
                style={boxStyles}
                shouldCloseOnOverlayClick={true}
                ariaHideApp={false}>
                <BaseModalContainer>
                    {props.children}
                </BaseModalContainer>
            </Modal>
        </>
    );
};

export default BaseModal;
