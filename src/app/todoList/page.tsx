import { getSchedule, getTaskFinish } from "../lib/action";
import ListFinish from "./components/ListFinish";
import TaskList from "./components/TaskList";

export default async function page() {
  const schedule = await getSchedule()
  const taskFinish = await getTaskFinish()
  
  return (
    <>
        <TaskList datas={schedule.data}/>
        <ListFinish datas={taskFinish.data}/>
    </>
  );
}