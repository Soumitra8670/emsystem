import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
  return (
      <div id='tasklist' className='h-[55%] flex items-center justify-start gap-5 flex-nowrap w-full mt-10 rounded-xl py-5 overflow-x-auto'>
        {data.tasks.map((elem, idx)=>{
            if(elem.active){
                  return <AcceptTask key={idx} data={elem}/>
            }
            if(elem.newTask){
                  return <NewTask key={idx} data={elem}/>
            }
            if(elem.completed){
                  return <CompleteTask key={idx} data={elem}/>
            }
            if(elem.failed){
                  return <FailedTask key={idx} data={elem}/>
            }
        })}
        
      </div>
  )
}

export default TaskList 