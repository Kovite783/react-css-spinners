import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grid, Heart, Ripple } from '../src'

storiesOf('Spinners', module)
  .add('Grid', () => <Grid />)
  .add('Heart', () => <Heart />)
  .add('Ripple', () => <Ripple />)
