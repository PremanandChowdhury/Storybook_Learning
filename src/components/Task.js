import React from 'react'
import PropTypes from 'prop-types'

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <div
      className={`list-item ${state}`}
      style={{ borderRadius: '5px', padding: '5px' }}>
      <label className='checkbox'>
        <input
          type='checkbox'
          defaultChecked={state === 'TASK_ARCHIEVED'}
          disabled={true}
          name='checked'
        />
        <span className='checkbox-custom' onClick={() => onArchiveTask(id)} />
      </label>
      <div
        className='title'
        style={{ background: 'cornsilk', borderRadius: '5px' }}>
        <input
          type='text'
          value={title}
          readOnly={true}
          placeholder='Input title'
          style={{ overflow: 'ellipsis' }}
        />
      </div>
      <div className='actions' onClick={(e) => e.stopPropagation()}>
        {state !== 'TASK_ARCHIEVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
}

export default Task
