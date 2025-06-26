
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, PlayCircle, FileText, Brain } from "lucide-react";

const OfficeProductivityCourse = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [quizScores, setQuizScores] = useState<{[key: number]: number}>({});

  const modules = [
    {
      title: "Word Processing",
      content: `
        <h3>Introduction to Word Processing</h3>
        <p>Word processing software helps create, edit, and format text documents. Microsoft Word is the most common example.</p>
        
        <h4>Basic Features:</h4>
        <ul>
          <li><strong>Text Formatting:</strong> Font, size, color, bold, italic, underline</li>
          <li><strong>Paragraph Formatting:</strong> Alignment, spacing, indentation</li>
          <li><strong>Page Layout:</strong> Margins, orientation, page breaks</li>
          <li><strong>Insert Elements:</strong> Images, tables, headers, footers</li>
        </ul>

        <h4>Essential Tools:</h4>
        <ul>
          <li>Spell check and grammar check</li>
          <li>Find and replace</li>
          <li>Track changes and comments</li>
          <li>Document templates</li>
        </ul>
      `,
      quiz: [
        {
          question: "Which feature helps identify spelling errors?",
          options: ["Track changes", "Spell check", "Find and replace", "Word count"],
          correct: 1
        },
        {
          question: "What is the purpose of headers and footers?",
          options: ["Add color", "Insert images", "Display info on every page", "Change font size"],
          correct: 2
        }
      ],
      exercise: {
        title: "Document Creation Practice",
        description: "Create a professional document using word processing features.",
        tasks: [
          "Create a business letter with proper formatting",
          "Insert a table with data",
          "Add headers and footers with page numbers"
        ]
      }
    },
    {
      title: "Spreadsheets",
      content: `
        <h3>Understanding Spreadsheets</h3>
        <p>Spreadsheets organize data in rows and columns, enabling calculations and data analysis. Excel is the most popular spreadsheet application.</p>
        
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Cells:</strong> Individual boxes that hold data</li>
          <li><strong>Formulas:</strong> Calculations that start with = sign</li>
          <li><strong>Functions:</strong> Built-in formulas (SUM, AVERAGE, COUNT)</li>
          <li><strong>Charts:</strong> Visual representations of data</li>
        </ul>

        <h4>Common Functions:</h4>
        <ul>
          <li>=SUM(A1:A10) - Adds values in range</li>
          <li>=AVERAGE(B1:B10) - Calculates average</li>
          <li>=COUNT(C1:C10) - Counts numbers</li>
          <li>=IF(D1>100,"High","Low") - Conditional logic</li>
        </ul>
      `,
      quiz: [
        {
          question: "What symbol starts all formulas in spreadsheets?",
          options: ["#", "@", "=", "%"],
          correct: 2
        },
        {
          question: "Which function calculates the total of a range?",
          options: ["AVERAGE", "COUNT", "SUM", "MAX"],
          correct: 2
        }
      ],
      exercise: {
        title: "Budget Spreadsheet Creation",
        description: "Build a personal budget using spreadsheet functions.",
        tasks: [
          "Create income and expense categories",
          "Use SUM function to calculate totals",
          "Create a chart showing spending breakdown"
        ]
      }
    },
    {
      title: "Presentations",
      content: `
        <h3>Creating Effective Presentations</h3>
        <p>Presentation software like PowerPoint helps create visual slideshows for communicating ideas effectively.</p>
        
        <h4>Design Principles:</h4>
        <ul>
          <li><strong>Consistency:</strong> Use the same fonts, colors, and layout</li>
          <li><strong>Clarity:</strong> Keep text simple and readable</li>
          <li><strong>Visual Impact:</strong> Use images and graphics effectively</li>
          <li><strong>Flow:</strong> Organize content logically</li>
        </ul>

        <h4>Essential Features:</h4>
        <ul>
          <li>Slide layouts and templates</li>
          <li>Animations and transitions</li>
          <li>Speaker notes</li>
          <li>Slide master for consistency</li>
        </ul>
      `,
      quiz: [
        {
          question: "What is the recommended maximum number of bullet points per slide?",
          options: ["3-5", "7-10", "10-15", "No limit"],
          correct: 0
        },
        {
          question: "What feature ensures consistent formatting across slides?",
          options: ["Animation", "Transition", "Slide Master", "Template"],
          correct: 2
        }
      ],
      exercise: {
        title: "Business Presentation Creation",
        description: "Design a professional presentation on a topic of your choice.",
        tasks: [
          "Create 5-7 slides with consistent design",
          "Include charts or images to support content",
          "Add appropriate transitions between slides"
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
        <h2 className="text-2xl font-bold">Office Productivity</h2>
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

export default OfficeProductivityCourse;
