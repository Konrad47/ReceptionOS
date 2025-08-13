import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { BaseModalContainer, BaseModalHeader } from './styled.components';
import { ButtonDarkBorder, Subtitle } from '../../styled.components';

const BaseModal = ({
    // t,
    isModal,
    setIsModal,
    props
}) => {

    const closeModal = () => {
        setIsModal(false);
    };

    const [boxStyles, setBoxStyles] = useState({
        overlay: {
            zIndex: 103
        },
        content: {
            margin: 'auto',
            padding: '0',
            inset: '0',
            width: '80%',
            maxHeight: '80vh',
            maxWidth: '1000px',
            borderRadius: '8px',
            borderRadius: "24px",
            border: " 1px solid var(--Border, rgba(253, 240, 231, 0.2))",
            background: "rgba(5, 4, 3, 0.95)",
            boxShadow: "4px 4px 10px 0 rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(5px)"
        }
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 700px)');

        const updateBoxStyles = (e) => {
            if (e.matches) {
                setBoxStyles((prevStyles) => ({
                    ...prevStyles,
                    content: {
                        ...prevStyles.content,
                        width: '100%'
                    }
                }));
            } else {
                setBoxStyles((prevStyles) => ({
                    ...prevStyles,
                    content: {
                        ...prevStyles.content,
                        width: '80%'
                    }
                }));
            }
        };

        updateBoxStyles(mediaQuery);

        mediaQuery.addEventListener('change', updateBoxStyles);

        return () => {
            mediaQuery.removeEventListener('change', updateBoxStyles);
        };
    }, []);

    return (
        <>
            <Modal
                isOpen={isModal}
                style={boxStyles}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
                ariaHideApp={false}>
                <BaseModalContainer>
                    <BaseModalHeader>
                        <div className='title'>
                            <Subtitle>{props.subtitle}</Subtitle>
                            <h2>{props.title}</h2>
                        </div>
                        <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15 5L5 15L15 5Z" fill="#EB670F" />
                            <path d="M5 5L15 15L5 5Z" fill="#EB670F" />
                            <path d="M15 5L5 15M5 5L15 15" stroke="#EB670F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </BaseModalHeader>
                    <div>
                        {props.children}
                    </div>
                    <ButtonDarkBorder>{props.buttonText}</ButtonDarkBorder>
                </BaseModalContainer>
            </Modal>
        </>
    );
};

export default BaseModal;
