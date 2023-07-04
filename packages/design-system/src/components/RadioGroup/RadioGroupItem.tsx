'use client'

import React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { CheckIcon } from '@radix-ui/react-icons';
import { radio } from '@playmr/styled-system/recipes';
import { type RecipeVariantProps } from '@playmr/styled-system/css';

type BaseProps = RecipeVariantProps<typeof radio>

type RadioGroupItemPrimitiveProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>

type RadioGroupItemProps = BaseProps & Omit<RadioGroupItemPrimitiveProps, keyof BaseProps>

const RadioGroupItem = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, RadioGroupItemProps>(
  ({
    size,
    ...rest
  }, forwardedRef) => {
    return (
      <RadioGroupPrimitive.Item className={radio({ size: 'lg' })} {...rest} ref={forwardedRef}>
        <RadioGroupPrimitive.Indicator>
          <CheckIcon />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    )
  }
);

export default RadioGroupItem;