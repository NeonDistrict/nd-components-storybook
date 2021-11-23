import React, { InputHTMLAttributes } from 'react';

import { CSS } from '../../system';

import { Flex } from '../flex';

import * as S from './styles';

export type InputProps = {
  /**
   * Input label
   */
  label?: string;
  /**
   * Show input message
   */
  hint?: string | string[];
  /**
   * Show input error
   */
  error?: string | string[];
  /**
   *
   * @default "default"
   */
  variant?: 'default' | 'line';
  /**
   * CSS properties
   */
  leftIcon?: React.ReactNode;
  /**
   * CSS properties
   */
  rightIcon?: React.ReactNode;
  /**
   * CSS properties
   */
  css?: CSS;
} & InputHTMLAttributes<HTMLInputElement>;

/**
 * Input component
 *
 * @description is a component that is used to get user input in a text field.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, hint, error, disabled, leftIcon, rightIcon, css, ...props },
    ref,
  ) => {
    return (
      <S.Wrapper css={css}>
        {label && <S.Label disabled={disabled}>{label}</S.Label>}

        <Flex css={{ position: 'relative' }}>
          {!!leftIcon && <S.LeftIcon>{leftIcon}</S.LeftIcon>}

          <S.Input
            ref={ref}
            disabled={disabled}
            leftIcon={!!leftIcon}
            rightIcon={!!rightIcon}
            error={!!error}
            {...props}
          />

          {!!rightIcon && <S.RightIcon>{rightIcon}</S.RightIcon>}
        </Flex>

        <S.Error>{error}</S.Error>

        <S.Message disabled={disabled}>{hint}</S.Message>
      </S.Wrapper>
    );
  },
);

Input.displayName = 'Input';
