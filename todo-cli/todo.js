const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {

        const today = new Date()
        const overdueItems = [];

        for(let i=0;i<all.length-1;i++){
            if(all[i].dueDate<today.toISOString().split("T")[0]){
                overdueItems.push(all[i])
            }
        }

        return overdueItems
     
    }
  
    const dueToday = () => {
      const dueTodayItems=[]
      const today = new Date()

      for(let i=0;i<all.length-1;i++){
        if(all[i].dueDate===today.toISOString().split("T")[0]){
            dueTodayItems.push(all[i])
        }
    }

    return dueTodayItems;
       
    }
  
    const dueLater = () => {
      const dueLaterItems=[];
      const today = new Date();

      for(let i=0;i<all.length-1;i++){
        if(all[i].dueDate>today.toISOString().split("T")[0]){
            dueLaterItems.push(all[i])
        }
    }

    return dueLaterItems
  }
     

const toDisplayableList = (list) => {
    let displayableList = '';
  
    list.forEach((item)=>{
      
      const isCompleted = item.completed?'[x]':'[ ]';
      let dateDue = '';
      if (item.dueDate !== undefined && item.dueDate !== null) {
        if (item.dueDate === new Date().toISOString().split("T")[0]) {
          dateDue = '';
        } else {
          dateDue = `${item.dueDate}`;
        }
      }
  
      if(item===list[list.length-1]){
      displayableList += `${isCompleted} ${item.title} ${dateDue}`;
    }else{
        displayableList += `${isCompleted} ${item.title} ${dateDue}\n`;
    }
    })
  
    return displayableList;
  };
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")