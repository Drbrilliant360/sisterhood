
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Bot, Image, Send, Mic } from "lucide-react";

type ChatMessage = {
  role: string,
  content: string
};

interface LavinaChatProps {
  defaultHistory?: Array<ChatMessage>
}

const LavinaChat: React.FC<LavinaChatProps> = ({
  defaultHistory = [
    { role: 'assistant', content: "Hello! I'm Lavina, your comprehensive AI assistant. I'm here to help you with any questions or topics you'd like to explore. Whether it's about entrepreneurship, health, technology, science, arts, personal development, or any other subject, I'm ready to provide detailed and thoughtful responses. What would you like to discuss today?" }
  ]
}) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<ChatMessage>>(defaultHistory);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Enhanced response generation with detailed, paragraph-style answers
  const generateDetailedResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Health and wellness topics
    if (lowerMessage.includes('health') || lowerMessage.includes('wellness') || lowerMessage.includes('medical') || lowerMessage.includes('nutrition') || lowerMessage.includes('exercise') || lowerMessage.includes('mental health')) {
      return "Health and wellness are fundamental pillars of a fulfilling life, encompassing physical, mental, and emotional well-being. Maintaining good health requires a holistic approach that includes regular physical activity, balanced nutrition, adequate sleep, stress management, and preventive healthcare. Physical exercise not only strengthens your cardiovascular system and builds muscle mass but also releases endorphins that improve mood and cognitive function. A balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats provides the essential nutrients your body needs to function optimally. Mental health is equally important and involves developing healthy coping mechanisms, building strong relationships, practicing mindfulness or meditation, and seeking professional help when needed. Sleep quality directly impacts immune function, memory consolidation, and emotional regulation, making it crucial to maintain consistent sleep schedules and create a conducive sleep environment. Regular health screenings and preventive care can help detect potential issues early, allowing for more effective treatment and better long-term outcomes. What specific aspect of health and wellness would you like to explore further?";
    }
    
    // Safety and security topics
    if (lowerMessage.includes('safety') || lowerMessage.includes('security') || lowerMessage.includes('protection') || lowerMessage.includes('privacy') || lowerMessage.includes('cybersecurity')) {
      return "Safety and security encompass multiple dimensions of protection in our modern world, from personal physical safety to digital privacy and cybersecurity. Personal safety involves developing situational awareness, trusting your instincts, and taking proactive measures to protect yourself in various environments. This includes understanding your surroundings, having emergency contact information readily available, and learning basic self-defense techniques. In the digital realm, cybersecurity has become increasingly critical as we rely more heavily on technology for work, communication, and personal activities. Protecting your digital identity involves using strong, unique passwords for different accounts, enabling two-factor authentication, being cautious about sharing personal information online, and keeping software and security systems updated. Financial security includes protecting against identity theft, fraud, and scams by monitoring your accounts regularly, being cautious with personal information, and understanding common tactics used by criminals. Home security involves physical measures like proper lighting, secure locks, and possibly security systems, as well as being mindful of what information you share about your location and activities on social media. Workplace safety encompasses understanding emergency procedures, reporting hazards, and maintaining awareness of your work environment. What specific safety concerns or security topics would you like me to address in more detail?";
    }
    
    // Business and entrepreneurship topics
    if (lowerMessage.includes('business') || lowerMessage.includes('entrepreneur') || lowerMessage.includes('startup') || lowerMessage.includes('marketing') || lowerMessage.includes('finance') || lowerMessage.includes('leadership')) {
      return "Entrepreneurship and business development are dynamic fields that require a combination of vision, strategic thinking, practical skills, and resilience. Starting a successful business begins with identifying a genuine market need and developing a solution that provides real value to customers. This process involves conducting thorough market research, analyzing competitors, understanding your target audience, and validating your business idea through testing and feedback. Creating a comprehensive business plan is essential, as it serves as your roadmap and helps you secure funding, make informed decisions, and track progress. Financial management is crucial and includes understanding cash flow, budgeting, pricing strategies, and various funding options such as bootstrapping, angel investors, venture capital, or traditional loans. Marketing and branding are vital for business success, involving the development of a strong brand identity, understanding customer psychology, leveraging digital marketing channels, and building authentic relationships with your audience. Leadership skills become increasingly important as your business grows, encompassing team building, communication, decision-making, and the ability to inspire and motivate others. The entrepreneurial journey also requires adaptability, as markets change, technologies evolve, and unexpected challenges arise. Building a strong network of mentors, peers, and industry contacts can provide valuable support, advice, and opportunities. Risk management and legal considerations, including intellectual property protection, contracts, and compliance with regulations, are also essential components of business success. What specific aspect of entrepreneurship or business development would you like to explore in greater depth?";
    }
    
    // Technology topics
    if (lowerMessage.includes('technology') || lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence') || lowerMessage.includes('programming') || lowerMessage.includes('software') || lowerMessage.includes('computer')) {
      return "Technology continues to reshape our world at an unprecedented pace, influencing how we work, communicate, learn, and solve complex problems. Artificial intelligence and machine learning represent some of the most transformative technological developments of our time, enabling computers to perform tasks that traditionally required human intelligence, such as pattern recognition, natural language processing, and decision-making. These technologies are being applied across numerous fields, from healthcare diagnostics and drug discovery to financial analysis, autonomous vehicles, and personalized education. Programming and software development have become increasingly accessible, with numerous languages, frameworks, and tools available for creating everything from mobile applications to complex enterprise systems. Understanding basic programming concepts can be valuable even for non-developers, as it provides insight into how digital systems work and enables better communication with technical teams. Cloud computing has revolutionized how businesses store data, deploy applications, and scale their operations, offering flexibility, cost-effectiveness, and global accessibility. Cybersecurity remains a critical concern as our reliance on digital systems grows, requiring ongoing vigilance and adaptation to emerging threats. The Internet of Things (IoT) is connecting everyday objects to the internet, creating smart homes, cities, and industrial systems that can collect data and automate processes. Blockchain technology is exploring new models for secure, decentralized transactions and data management. As technology evolves, it's important to consider both the opportunities and challenges it presents, including privacy concerns, job displacement, digital divides, and the need for ethical frameworks to guide development and implementation. What specific technology topics or trends would you like me to discuss in more detail?";
    }
    
    // Education and learning topics
    if (lowerMessage.includes('education') || lowerMessage.includes('learning') || lowerMessage.includes('skill') || lowerMessage.includes('study') || lowerMessage.includes('knowledge') || lowerMessage.includes('training')) {
      return "Education and continuous learning are fundamental to personal growth, career advancement, and adapting to our rapidly changing world. Effective learning involves understanding how your brain processes and retains information, which can help you develop personalized study strategies and learning techniques. Active learning methods, such as summarizing information in your own words, teaching concepts to others, practicing retrieval, and applying knowledge to real-world scenarios, tend to be more effective than passive reading or listening. The concept of lifelong learning has become increasingly important as technological advances and economic changes require workers to continuously update their skills and knowledge. This includes both formal education opportunities, such as degrees, certifications, and professional development courses, as well as informal learning through books, podcasts, online resources, mentorship, and hands-on experience. Different learning styles and preferences mean that some people learn better through visual aids, others through auditory information, and still others through kinesthetic or hands-on activities. Understanding your preferred learning style can help you choose more effective educational approaches. Time management and goal-setting are crucial skills for successful learning, involving the ability to prioritize tasks, break large goals into manageable steps, and maintain motivation over time. Critical thinking skills enable you to evaluate information sources, analyze arguments, identify biases, and make informed decisions. In today's digital age, digital literacy has become essential, encompassing not just the ability to use technology, but also to understand how digital systems work, evaluate online information critically, and navigate digital environments safely and effectively. What specific learning goals or educational topics would you like to explore further?";
    }
    
    // Career and professional development
    if (lowerMessage.includes('career') || lowerMessage.includes('job') || lowerMessage.includes('professional') || lowerMessage.includes('resume') || lowerMessage.includes('interview') || lowerMessage.includes('workplace')) {
      return "Career development is a lifelong process that involves identifying your interests, values, and strengths, then aligning them with opportunities in the job market. Building a successful career requires both technical skills specific to your field and soft skills such as communication, problem-solving, teamwork, and adaptability. Networking plays a crucial role in career advancement, not just for finding job opportunities, but also for learning about industry trends, gaining mentorship, and building professional relationships that can provide support and collaboration throughout your career. Creating an effective resume involves highlighting your most relevant experiences, quantifying your achievements where possible, and tailoring your application materials to specific positions and companies. Interview preparation includes researching the company and role, practicing common interview questions, preparing thoughtful questions to ask the interviewer, and developing clear examples that demonstrate your skills and experience. Professional development should be ongoing and can include attending conferences, pursuing additional certifications, joining professional associations, reading industry publications, and seeking feedback from supervisors and colleagues. Understanding workplace dynamics, including organizational culture, communication styles, and professional etiquette, can help you navigate different work environments successfully. Career transitions, whether voluntary or involuntary, require careful planning, skill assessment, and sometimes additional training or education. Building a personal brand through professional social media presence, thought leadership, and consistent quality work can help you stand out in competitive job markets. Work-life balance is increasingly important for long-term career sustainability and personal well-being. What specific aspects of career development or professional growth would you like to discuss in more detail?";
    }
    
    // Science topics
    if (lowerMessage.includes('science') || lowerMessage.includes('research') || lowerMessage.includes('climate') || lowerMessage.includes('environment') || lowerMessage.includes('physics') || lowerMessage.includes('chemistry') || lowerMessage.includes('biology')) {
      return "Science is humanity's systematic approach to understanding the natural world through observation, experimentation, and analysis. The scientific method provides a framework for investigating phenomena, testing hypotheses, and building knowledge that can be verified and replicated by others. Different scientific disciplines focus on various aspects of our universe, from the subatomic particles studied in physics to the complex ecosystems examined in ecology. Modern scientific research is increasingly interdisciplinary, combining insights from multiple fields to address complex challenges such as climate change, disease treatment, sustainable energy, and space exploration. Climate science has become particularly urgent as we grapple with the effects of human activities on Earth's atmosphere, oceans, and ecosystems. Understanding climate change involves complex interactions between atmospheric chemistry, ocean currents, ice dynamics, and biological systems, requiring sophisticated modeling and long-term data collection. Environmental science examines how human activities impact natural systems and explores sustainable practices that can help preserve biodiversity and ecosystem health for future generations. Advances in biotechnology and genetics are revolutionizing medicine, agriculture, and our understanding of life itself, while raising important ethical questions about genetic modification, privacy, and access to treatments. Space science continues to expand our understanding of the universe, from discovering exoplanets that might harbor life to developing technologies for human space exploration. The process of peer review and scientific publication helps ensure that research meets rigorous standards, though science is also self-correcting, with new evidence sometimes challenging or refining previous understanding. What specific scientific topics or current research areas would you like me to explore in greater depth?";
    }
    
    // Arts and creativity
    if (lowerMessage.includes('art') || lowerMessage.includes('creative') || lowerMessage.includes('music') || lowerMessage.includes('writing') || lowerMessage.includes('design') || lowerMessage.includes('culture')) {
      return "Arts and creativity are fundamental aspects of human expression and culture, serving not only as forms of entertainment but also as means of communication, social commentary, and personal exploration. Creative pursuits engage different parts of the brain and can provide therapeutic benefits, stress relief, and opportunities for personal growth. The arts encompass a vast range of disciplines, including visual arts like painting, sculpture, and photography; performing arts such as theater, dance, and music; literary arts including poetry, fiction, and creative nonfiction; and digital arts that leverage technology for new forms of expression. Developing creativity involves cultivating curiosity, embracing experimentation, learning to see familiar things from new perspectives, and developing comfort with ambiguity and failure as part of the creative process. Many creative professionals emphasize the importance of regular practice, studying the work of others, and developing both technical skills and conceptual thinking. The creative industries have become increasingly important economically, encompassing everything from traditional media and entertainment to advertising, video game development, user experience design, and content creation. Cultural appreciation involves understanding how different societies express themselves through art, recognizing the historical and social contexts that influence artistic movements, and developing the ability to engage thoughtfully with works that may challenge or differ from your own perspective. Digital technologies have democratized many forms of creative expression, making tools for music production, video editing, graphic design, and publishing more accessible to broader audiences. At the same time, questions about authenticity, intellectual property, and the impact of artificial intelligence on creative work continue to evolve. What specific creative pursuits or artistic topics would you like to explore further?";
    }
    
    // Relationships and social topics
    if (lowerMessage.includes('relationship') || lowerMessage.includes('communication') || lowerMessage.includes('social') || lowerMessage.includes('family') || lowerMessage.includes('friendship') || lowerMessage.includes('love')) {
      return "Relationships and social connections are fundamental to human well-being, providing emotional support, personal growth opportunities, and a sense of belonging. Healthy relationships, whether romantic, familial, or platonic, are built on foundations of trust, respect, effective communication, and mutual support. Communication skills are perhaps the most important aspect of relationship success, involving not just the ability to express yourself clearly, but also active listening, empathy, and the capacity to understand and respond to non-verbal cues. Conflict resolution is an inevitable part of any meaningful relationship, requiring skills such as remaining calm under pressure, focusing on specific behaviors rather than character attacks, finding common ground, and working collaboratively toward solutions. Different types of relationships serve different purposes in our lives: family relationships often provide our earliest models for social interaction and ongoing support systems; friendships offer companionship, shared interests, and often more choice in the level of involvement; romantic relationships can provide intimate emotional and physical connection, partnership, and sometimes the foundation for building families. Social skills extend beyond personal relationships to professional and community interactions, involving the ability to navigate group dynamics, understand social norms in different contexts, build rapport with diverse individuals, and contribute positively to team efforts. The digital age has transformed how we form and maintain relationships, offering new opportunities for connection across geographic distances while also presenting challenges related to the quality and depth of online versus in-person interactions. Cultural differences can influence relationship expectations and communication styles, making cultural competency an important skill in our increasingly connected world. What specific aspects of relationships or social interactions would you like to discuss in more detail?";
    }
    
    // General knowledge and miscellaneous topics
    if (lowerMessage.includes('history') || lowerMessage.includes('philosophy') || lowerMessage.includes('psychology') || lowerMessage.includes('travel') || lowerMessage.includes('food') || lowerMessage.includes('sports')) {
      return "Human knowledge spans an incredible range of subjects, each offering unique insights into our world and ourselves. History provides crucial context for understanding current events, social structures, and human behavior by examining how societies have developed, what challenges they've faced, and how they've adapted over time. Understanding historical patterns can help us make more informed decisions about contemporary issues and avoid repeating past mistakes. Philosophy encourages deep thinking about fundamental questions regarding existence, morality, knowledge, and meaning, providing frameworks for ethical decision-making and critical analysis of assumptions we might otherwise take for granted. Psychology explores how the human mind works, including topics such as memory, perception, emotion, motivation, and behavior, offering insights that can improve personal relationships, educational approaches, and mental health treatment. Travel, whether physical or through learning about different cultures, broadens perspectives by exposing us to different ways of life, challenging assumptions, and developing cultural sensitivity and adaptability. Food culture reflects history, geography, economics, and social values, while nutrition science helps us understand how different foods affect our health and well-being. Sports and physical activities provide entertainment, promote physical fitness, and often serve important social functions by bringing communities together and teaching valuable lessons about teamwork, perseverance, and handling both victory and defeat gracefully. Each of these areas connects to others in complex ways, demonstrating the interconnected nature of human knowledge and experience. What specific topic or area of knowledge would you like me to explore in greater detail?";
    }
    
    // Greetings and general conversation
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('good morning') || lowerMessage.includes('good afternoon')) {
      return "Hello there! It's wonderful to connect with you today. I'm here as your comprehensive AI assistant, ready to engage in meaningful conversations and provide detailed, thoughtful responses on virtually any topic that interests you. Whether you're curious about complex scientific concepts, looking for practical advice on personal or professional matters, wanting to explore creative ideas, or simply interested in learning something new, I'm equipped to provide in-depth explanations and insights. I believe in the value of thorough, nuanced responses that not only answer your immediate question but also provide context, related information, and different perspectives that might enrich your understanding. My goal is to be genuinely helpful by taking the time to explore topics comprehensively rather than providing brief, surface-level answers. Feel free to ask me about anything that's on your mind – from practical everyday concerns to abstract philosophical questions, current events to historical analysis, or creative projects to technical challenges. What would you like to explore together today?";
    }
    
    // Questions about capabilities
    if (lowerMessage.includes('what can you') || lowerMessage.includes('help me') || lowerMessage.includes('can you') || lowerMessage.includes('what do you know')) {
      return "I'm designed to be a comprehensive AI assistant capable of engaging with virtually any topic or question you might have. My knowledge spans across numerous fields including science, technology, arts, humanities, social sciences, practical life skills, and much more. I can help you understand complex concepts by breaking them down into digestible parts, provide detailed explanations that include context and multiple perspectives, assist with problem-solving by offering various approaches and considerations, engage in creative brainstorming and ideation, provide guidance on personal and professional development, explain historical events and their significance, discuss philosophical questions and ethical dilemmas, offer insights into different cultures and perspectives, help with learning strategies and educational goals, provide information about health and wellness topics, discuss current events and their implications, explore scientific discoveries and technological developments, and much more. My approach is to provide thorough, thoughtful responses that not only address your immediate question but also offer additional context, related information, and different angles that might deepen your understanding or spark further curiosity. I aim to be genuinely conversational while maintaining accuracy and depth in my responses. Rather than giving brief, generic answers, I prefer to explore topics comprehensively and help you think through questions in meaningful ways. What specific area or question would you like to dive into? I'm genuinely excited to explore whatever interests you most.";
    }
    
    // Default comprehensive response for any other topic
    return "That's a fascinating question that touches on important aspects of human knowledge and experience. I appreciate you bringing this topic to my attention, as it gives me an opportunity to explore the subject in depth with you. Every question, no matter how specific or general, connects to broader themes and concepts that can enrich our understanding of the world around us. When approaching any topic, I like to consider multiple perspectives, examine the underlying principles or mechanisms involved, and think about how the subject relates to other areas of knowledge. This interconnected approach often reveals insights that might not be apparent when looking at a topic in isolation. I'm particularly interested in helping you think through not just the immediate aspects of your question, but also the broader implications, related concepts, and practical applications that might be relevant to your interests or goals. Context is incredibly important for deep understanding, so I try to provide background information, historical development, current state of knowledge, and future directions when discussing any subject. I also believe in acknowledging complexity and nuance rather than oversimplifying, while still making information accessible and engaging. Would you like me to explore your question from a particular angle, or would you prefer that I provide a comprehensive overview that covers multiple dimensions of the topic? I'm here to engage with whatever level of detail and whatever specific aspects would be most helpful and interesting for you.";
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setIsLoading(true);
    const userMessage = message;
    
    // Add user message to chat history
    setChatHistory(prev => [...prev, { role: 'user', content: userMessage }]);
    setMessage('');
    
    // Simulate processing time for better UX
    setTimeout(() => {
      const aiResponse = generateDetailedResponse(userMessage);
      setChatHistory(prev => [...prev, { role: 'assistant', content: aiResponse }]);
      setIsLoading(false);
    }, 1500);
  };

  const handleImageUpload = () => {
    toast({
      title: "Coming Soon!",
      description: "Image analysis will be available in the next update.",
      duration: 3000,
    });
  };

  const handleVoiceInput = () => {
    toast({
      title: "Coming Soon!",
      description: "Voice input will be available in the next update.",
      duration: 3000,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="text-sisterhood-primary" />
          Chat with Lavina
        </CardTitle>
        <CardDescription>
          Your comprehensive AI assistant - ask me anything and get detailed, thoughtful responses
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4 h-96 overflow-y-auto flex flex-col space-y-4">
          {chatHistory.map((chat, index) => (
            <div 
              key={index} 
              className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-4/5 rounded-lg p-3 ${
                  chat.role === 'user' 
                    ? 'bg-sisterhood-primary text-white' 
                    : 'bg-sisterhood-light border border-sisterhood-primary/20'
                }`}
              >
                <div className="whitespace-pre-wrap">{chat.content}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-4/5 rounded-lg p-3 bg-sisterhood-light border border-sisterhood-primary/20">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-sisterhood-primary animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-sisterhood-primary animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-sisterhood-primary animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full gap-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleImageUpload}
            title="Upload image"
          >
            <Image size={20} />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleVoiceInput}
            title="Voice input"
          >
            <Mic size={20} />
          </Button>
          <Input
            placeholder="Ask me anything - I can discuss any topic in detail..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
            className="flex-grow"
          />
          <Button onClick={handleSendMessage} disabled={!message.trim() || isLoading}>
            <Send size={20} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LavinaChat;
