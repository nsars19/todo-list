import startOfToday from 'date-fns/startOfToday'
import { lightFormat } from 'date-fns'

export const todo = (info = null) => {
  return {
    todoTitle:   info["todoTitle"]   || "Unnamed Todo",
    description: info["description"] || "It's self-explanatory!",
    dueDate:     info["dueDate"]     || lightFormat(startOfToday(), 'M/dd/y'),
    priority:    info["priority"]    || "None.",
  }
}
