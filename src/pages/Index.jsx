import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Edit, Trash2, Save } from "lucide-react";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEditTask = (id, text) => {
    setEditTaskId(id);
    setEditTaskText(text);
  };

  const handleSaveTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: editTaskText } : task));
    setEditTaskId(null);
    setEditTaskText('');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Add New Task</CardTitle>
        </CardHeader>
        <CardContent>
          <Input 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter new task"
          />
        </CardContent>
        <CardFooter>
          <Button onClick={handleAddTask}>Add Task</Button>
        </CardFooter>
      </Card>

      <div className="space-y-4">
        {tasks.map(task => (
          <Card key={task.id}>
            <CardContent>
              {editTaskId === task.id ? (
                <Input 
                  value={editTaskText}
                  onChange={(e) => setEditTaskText(e.target.value)}
                />
              ) : (
                <span>{task.text}</span>
              )}
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              {editTaskId === task.id ? (
                <Button onClick={() => handleSaveTask(task.id)}>
                  <Save className="mr-2 h-4 w-4" /> Save
                </Button>
              ) : (
                <Button onClick={() => handleEditTask(task.id, task.text)}>
                  <Edit className="mr-2 h-4 w-4" /> Edit
                </Button>
              )}
              <Button variant="destructive" onClick={() => handleDeleteTask(task.id)}>
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;