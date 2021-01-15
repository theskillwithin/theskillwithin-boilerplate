import React from 'react'
import styled from '@emotion/styled'
// import { css } from '@emotion/react'

import Icon, { iconList } from '~/components/icons/Icon'

const Meta = styled.div`
  font-size: 12px;
`

const Item = styled.li`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 20%;
  min-width: 120px;
  padding: 0px 7.5px 20px;
  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`

export default {
  title: 'Components/icons/Icon',
  component: Icon,
  argTypes: {
    color: { control: 'color' },
    width: { control: 'number' },
    height: { control: 'number' },
  },
}

export const Labels = (args) => (
  <>
    There are {iconList.length} icons
    <List>
      {iconList.map((key) => (
        <Item key={key}>
          <Icon icon={key} {...args} />
          <Meta>{key}</Meta>
        </Item>
      ))}
    </List>
  </>
)

Labels.args = {}

export const NoLabels = (args) => (
  <List>
    {iconList.map((key) => (
      <Item minimal key={key}>
        <Icon icon={key} aria-label={key} {...args} />
      </Item>
    ))}
  </List>
)

NoLabels.args = {}
