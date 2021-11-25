import React, { HTMLAttributes } from 'react';

import { NeonIcon, JuiceIcon, PartsIcon } from './icons';

import { CSS } from '../../system';

import * as S from './styles';

export type ResourcesProps = {
  /**
   * Neon value
   *
   * @default '0'
   */
  neon: number;
  /**
   * Juice value
   *
   * @default '0'
   */
  juice: number;
  /**
   * Parts value
   *
   * @default '0'
   */
  parts: number;
  /**
   * Show icon
   *
   * @default 'true'
   */
  hasIcon?: boolean;
  /**
   * Show text
   *
   * @default 'true'
   */
  hasText?: boolean;
  /**
   * CSS properties
   */
  css?: CSS;
} & HTMLAttributes<HTMLDivElement>;

const Resources = ({
  neon = 0,
  juice = 0,
  parts = 0,
  hasIcon = true,
  hasText = true,
  ...props
}: ResourcesProps) => {
  return (
    <S.Wrapper {...props}>
      <S.Item>
        {hasIcon && <NeonIcon />}
        <S.Text>
          {hasText && 'Neon: '}
          {neon}
        </S.Text>
        <S.Separator />
      </S.Item>
      <S.Item>
        {hasIcon && <JuiceIcon />}
        <S.Text>
          {hasText && 'Juice: '}
          {juice}
        </S.Text>
        <S.Separator />
      </S.Item>
      <S.Item>
        {hasIcon && <PartsIcon />}
        <S.Text>
          {hasText && 'Parts: '}
          {parts}
        </S.Text>
      </S.Item>
    </S.Wrapper>
  );
};

export { Resources };
