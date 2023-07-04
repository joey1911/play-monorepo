'use client'

import React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

type RadioGroupProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>

const RadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(
  ({
    className,
    ...rest
  }, forwardedRef) => {
    return <RadioGroupPrimitive.Root {...rest} ref={forwardedRef} />
  }
);

export default RadioGroup;