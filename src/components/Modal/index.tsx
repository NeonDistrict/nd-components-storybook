import React, { useRef, useCallback, useEffect } from 'react';
import { Button } from '../Button';
import { MdClose } from 'react-icons/md';
import {
  Actions,
  Background,
  CloseHeader,
  Content,
  Divider,
  Header,
  ModalContainer,
  ModalInsideContainer,
  Subtitle,
  Title
} from './styles';

interface ModalProps {
  showModal;
  setShowModal;
  confirmFunction: () => void;
  title: string;
  subtitle: string;
  children: JSX.Element | JSX.Element[];
}

export const Modal = ({
  showModal,
  setShowModal,
  confirmFunction,
  title,
  subtitle,
  children
}: ModalProps) => {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const CloseIcon = () => <MdClose size={24} />;

  return (
    <>
      {showModal ? (
        <Background>
          <ModalContainer>
            <CloseHeader>
              <CloseIcon />
            </CloseHeader>
            <ModalInsideContainer>
              <Header>
                <Title>{title}</Title>
                <Divider />
                <Subtitle>{subtitle}</Subtitle>
              </Header>
              <Content>{children}</Content>
              <Actions>
                <Button
                  onClick={confirmFunction}
                  buttonType="standard"
                  label="Standard"
                />
                <Button
                  onClick={() => setShowModal(state => !state)}
                  label="Negative"
                  buttonType="negative"
                />
              </Actions>
            </ModalInsideContainer>
          </ModalContainer>
        </Background>
      ) : null}
    </>
  );
};
