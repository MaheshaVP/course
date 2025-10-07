#project

checklist = ["Excersize","1ltr of water",'tiffin',"reading a book","office"]

completed_tasks = []
incompleted_tasks = []

print("Today's checklist : ")
for i, task in enumerate(checklist,1):
    print(f"{i} . {task}")

input("/n Enter the task numbers you completed (seperate by comma) : ")
done = input(">> ")

complete_indexes = [int(x.strip()) for x in done.split(",")]

for i, task in enumerate(checklist,1):
    if i in complete_indexes:
        completed_tasks.append(task)
    else:
        incompleted_tasks.append(task)

print("/n Completed tasks")
for i,task in enumerate(completed_tasks,1):
    print(f"{i}. {task}")

print("/n Incompleted tasks")
for i, task in enumerate(incompleted_tasks,1):
    print(f"{i}. {task}")


