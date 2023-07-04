'use client'

import {
  Section,
  Container,
  Button,
  Checkbox,
  Label,
  InputGroup,
  RadioGroup,
  RadioGroupItem
} from '@playmr/design-system';
import { flex } from '@playmr/styled-system/patterns';

export default function Page() {
  const clickHandler = () => {
    alert('hi');
  }

  return (
    <>
      <Section type="hero">
        <Container>
          HERO!
        </Container>
      </Section>
      <Section type="body">
        <Container>
          <Button size="large" color="secondary" onClick={clickHandler} aria-disabled={false}>Why No Click?</Button>
          <InputGroup
            inputElement={<Checkbox size="lg" id="testcb" />}
            labelElement={<Label htmlFor="testcb">This is a test for checkbox</Label>}
            orientation="horizontal"
            inputFirst={true}
          />
          <InputGroup
            inputElement={<input type="text" id="textinput" />}
            labelElement={<Label htmlFor="textinput">Input Group with text input</Label>}
            orientation="vertical"
          />
          <RadioGroup>
            <InputGroup
              inputElement={<RadioGroupItem size="sm" value="option1" id="r1" />}
              labelElement={<Label htmlFor="r1">Option 1</Label>}
              orientation="horizontal"
              inputFirst={true}
            />
            <InputGroup
              inputElement={<RadioGroupItem size="sm" value="option2" id="r2" />}
              labelElement={<Label htmlFor="r2">Option 2</Label>}
              orientation="horizontal"
              inputFirst={true}
            />
            <InputGroup
              inputElement={<RadioGroupItem size="lg" value="option3" id="r3" />}
              labelElement={<Label htmlFor="r3">Option 3</Label>}
              orientation="horizontal"
              inputFirst={true}
            />
          </RadioGroup>
          <div className={flex({ direction: 'column', gap: '8' })}>
            <Section>
              <h1>Header 1</h1>
              <p>This is a normal paragraph.</p>
            </Section>
            <Section>
              Section 2
            </Section>
          </div>
        </Container>
      </Section>
    </>
  );
};