'use client'

import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { checkbox } from '@playmr/styled-system/recipes';
import { type RecipeVariantProps } from '@playmr/styled-system/css';

type BaseProps = RecipeVariantProps<typeof checkbox>

type CheckboxPrimitiveProps = React.ComponentProps<typeof CheckboxPrimitive.Root>

type CheckboxProps = BaseProps & Omit<CheckboxPrimitiveProps, keyof BaseProps>

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({
    size,
    ...rest
  }, forwardedRef) => {
    return (
      <CheckboxPrimitive.Root className={checkbox({ size })} {...rest} ref={forwardedRef}>
        <CheckboxPrimitive.Indicator>
          <CheckIcon />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    )
  }
);

export default Checkbox;