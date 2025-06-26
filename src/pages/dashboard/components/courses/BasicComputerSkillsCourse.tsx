
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, PlayCircle, FileText, Brain } from "lucide-react";

const BasicComputerSkillsCourse = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [quizScores, setQuizScores] = useState<{[key: number]: number}>({});

  const modules = [
    {
      title: "Computer Basics",
      content: `
        <h3>What is a Computer?</h3>
        <p>A computer is an electronic device that processes data according to instructions. It consists of hardware and software components working together.</p>
        
        <h4>Main Components:</h4>
        <ul>
          <li><strong>CPU (Central Processing Unit):</strong> The brain of the computer</li>
          <li><strong>RAM (Random Access Memory):</strong> Temporary storage for active programs</li>
          <li><strong>Storage:</strong> Hard drives or SSDs for permanent data storage</li>
          <li><strong>Input/Output Devices:</strong> Keyboard, mouse, monitor, speakers</li>
        </ul>

        <h4>Operating Systems:</h4>
        <p>Software that manages computer hardware and software resources. Common examples include Windows, macOS, and Linux.</p>
      `,
      quiz: [
        {
          question: "What is the main function of the CPU?",
          options: ["Store data", "Process instructions", "Display images", "Connect to internet"],
          correct: 1
        },
        {
          question: "Which component provides temporary storage?",
          options: ["Hard drive", "CPU", "RAM", "Monitor"],
          correct: 2
        }
      ],
      exercise: {
        title: "Computer Parts Identification",
        description: "Practice identifying computer components and their functions.",
        tasks: [
          "Name three input devices",
          "Explain the difference between RAM and storage",
          "List two operating systems"
        ]
      }
    },
    {
      title: "File Management",
      content: `
        <h3>Understanding Files and Folders</h3>
        <p>Files are collections of data stored on your computer. Folders (directories) help organize files into a hierarchical structure.</p>
        
        <h4>File Types:</h4>
        <ul>
          <li><strong>Documents:</strong> .txt, .doc, .pdf</li>
          <li><strong>Images:</strong> .jpg, .png, .gif</li>
          <li><strong>Videos:</strong> .mp4, .avi, .mov</li>
          <li><strong>Audio:</strong> .mp3, .wav, .m4a</li>
        </ul>

        <h4>Basic Operations:</h4>
        <ul>
          <li>Creating folders</li>
          <li>Moving and copying files</li>
          <li>Renaming files and folders</li>
          <li>Deleting and restoring from recycle bin</li>
        </ul>
      `,
      quiz: [
        {
          question: "What file extension is commonly used for text documents?",
          options: [".jpg", ".txt", ".mp3", ".exe"],
          correct: 1
        },
        {
          question: "Where do deleted files typically go first?",
          options: ["Permanently deleted", "Recycle Bin", "Desktop", "Downloads"],
          correct: 1
        }
      ],
      exercise: {
        title: "File Organization Practice",
        description: "Learn to organize files efficiently using folders and naming conventions.",
        tasks: [
          "Create a folder structure for personal documents",
          "Practice renaming files with descriptive names",
          "Organize sample files by type and date"
        ]
      }
    },
    {
      title: "Internet Basics",
      content: `
        <h3>Understanding the Internet</h3>
        <p>The internet is a global network of interconnected computers that communicate using standardized protocols.</p>
        
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Web Browser:</strong> Software to access websites (Chrome, Firefox, Safari)</li>
          <li><strong>URL:</strong> Web address that locates a specific webpage</li>
          <li><strong>Search Engines:</strong> Tools to find information (Google, Bing, Yahoo)</li>
          <li><strong>Email:</strong> Electronic mail system for communication</li>
        </ul>

        <h4>Internet Safety:</h4>
        <ul>
          <li>Use strong passwords</li>
          <li>Be cautious with personal information</li>
          <li>Verify website security (https://)</li>
          <li>Avoid suspicious links and downloads</li>
        </ul>
      `,
      quiz: [
        {
          question: "What does URL stand for?",
          options: ["Universal Resource Locator", "Uniform Resource Locator", "United Resource Link", "Universal Reference Link"],
          correct: 1
        },
        {
          question: "Which protocol indicates a secure website?",
          options: ["http://", "https://", "ftp://", "www."],
          correct: 1
        }
      ],
      exercise: {
        title: "Internet Navigation Practice",
        description: "Practice safe and effective internet browsing techniques.",
        tasks: [
          "Identify secure vs. unsecure websites",
          "Practice effective search techniques",
          "Set up email security features"
        ]
      }
    }
  ];

  const handleQuizSubmit = (moduleIndex: number, answers: number[]) => {
    const quiz = modules[moduleIndex].quiz;
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === quiz[index].correct) score++;
    });
    const percentage = Math.round((score / quiz.length) * 100);
    setQuizScores({...quizScores, [moduleIndex]: percentage});
    
    if (percentage >= 70 && !completedModules.includes(moduleIndex)) {
      setCompletedModules([...completedModules, moduleIndex]);
    }
  };

  const QuizComponent = ({ moduleIndex }: { moduleIndex: number }) => {
    const [answers, setAnswers] = useState<number[]>([]);
    const [submitted, setSubmitted] = useState(false);
    const quiz = modules[moduleIndex].quiz;

    const handleSubmit = () => {
      handleQuizSubmit(moduleIndex, answers);
      setSubmitted(true);
    };

    return (
      <div className="space-y-4">
        {quiz.map((question, qIndex) => (
          <Card key={qIndex}>
            <CardContent className="p-4">
              <h4 className="font-medium mb-3">{question.question}</h4>
              <div className="space-y-2">
                {question.options.map((option, oIndex) => (
                  <label key={oIndex} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name={`question-${qIndex}`}
                      value={oIndex}
                      onChange={() => {
                        const newAnswers = [...answers];
                        newAnswers[qIndex] = oIndex;
                        setAnswers(newAnswers);
                      }}
                      disabled={submitted}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={answers.length !== quiz.length}>
            Submit Quiz
          </Button>
        ) : (
          <div className="text-center">
            <Badge className={quizScores[moduleIndex] >= 70 ? "bg-green-500" : "bg-red-500"}>
              Score: {quizScores[moduleIndex]}%
            </Badge>
          </div>
        )}
      </div>
    );
  };

  const progress = Math.round((completedModules.length / modules.length) * 100);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Basic Computer Skills</h2>
        <Badge className="bg-sisterhood-primary text-white">
          Progress: {progress}%
        </Badge>
      </div>
      
      <Progress value={progress} className="h-2" />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Course Modules</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {modules.map((module, index) => (
                <Button
                  key={index}
                  variant={currentModule === index ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setCurrentModule(index)}
                >
                  {completedModules.includes(index) && (
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  )}
                  {module.title}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center">
              <PlayCircle className="mr-2 h-5 w-5" />
              {modules[currentModule].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="content" className="flex items-center">
                  <FileText className="mr-1 h-4 w-4" />
                  Content
                </TabsTrigger>
                <TabsTrigger value="quiz" className="flex items-center">
                  <Brain className="mr-1 h-4 w-4" />
                  Quiz
                </TabsTrigger>
                <TabsTrigger value="exercise" className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4" />
                  Exercise
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="content" className="mt-4">
                <div 
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: modules[currentModule].content }}
                />
              </TabsContent>
              
              <TabsContent value="quiz" className="mt-4">
                <QuizComponent moduleIndex={currentModule} />
              </TabsContent>
              
              <TabsContent value="exercise" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>{modules[currentModule].exercise.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{modules[currentModule].exercise.description}</p>
                    <ul className="space-y-2">
                      {modules[currentModule].exercise.tasks.map((task, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="bg-sisterhood-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                            {index + 1}
                          </span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BasicComputerSkillsCourse;
