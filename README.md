# 📝 Enhanced TodoList

The Enhanced TodoList  is an application that allows users to create, edit, and delete tasks (todos). Additional features include the ability to drag tasks between columns and add images to individual tasks. Data is stored on the [Appwrite](https://appwrite.io/) platform.

## 🚀 Technologies

- [Next.js](https://nextjs.org/) - React framework for building web interfaces
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [Zustand](https://zustand.surge.sh/) - Library for managing global application state

## 🎯 Features

- Adding new tasks to the list
- Dragging tasks between columns
- Adding images to tasks
- Deleting tasks

## 🌐 Appwrite Integration

The application utilizes the Appwrite platform for data storage. Make sure you have configured the appropriate parameters in the configuration file.

```json
{
  "appwrite": {
    "endpoint": "https://api.appwrite.io/v1",
    "project": "YOUR_PROJECT_ID",
    "collection": "todoCollection",
    "apiKey": "YOUR_API_KEY"
  }
}
```


## 🔗 Link to page preview

https://rs-todo-chekiro-chekiros-projects.vercel.app/
