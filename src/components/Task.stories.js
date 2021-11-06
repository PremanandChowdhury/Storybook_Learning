import React from 'react'
import Task from './Task'

export default {
  component: Task,
  title: 'Task',
}

const Template = (args) => <Task {...args} />

export const Default = Template.bind({})
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
}

export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
}

export const Archieved = Template.bind({})
Archieved.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIEVED',
  },
}
