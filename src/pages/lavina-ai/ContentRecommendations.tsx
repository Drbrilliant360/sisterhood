import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Loader2, BookOpen, Video, Headphones, GraduationCap, Calendar, BookMarked, Users, FileQuestion } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';

interface Recommendation {
  title: string;
  type: string;
  description: string;
  duration: string;
  topic: string;
}

const ContentRecommendations: React.FC = () => {
  const { toast } = useToast();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const topics = ['Entrepreneurship', 'Health & Wellness', 'Safety', 'Leadership', 'Financial Literacy', 'Technology', 'Art & Culture', 'Education', 'Social Impact'];
  const formats = ['Articles', 'Videos', 'Podcasts', 'Courses', 'Events', 'Books', 'Community Discussions', 'Case Studies'];

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
    );
  };

  const toggleFormat = (format: string) => {
    setSelectedFormats(prev => 
      prev.includes(format) ? prev.filter(f => f !== format) : [...prev, format]
    );
  };

  const getFormatIcon = (type: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      'Articles': <FileText className="h-4 w-4" />,
      'Videos': <Video className="h-4 w-4" />,
      'Podcasts': <Headphones className="h-4 w-4" />,
      'Courses': <GraduationCap className="h-4 w-4" />,
      'Events': <Calendar className="h-4 w-4" />,
      'Books': <BookMarked className="h-4 w-4" />,
      'Community Discussions': <Users className="h-4 w-4" />,
      'Case Studies': <FileQuestion className="h-4 w-4" />,
    };
    return iconMap[type] || <BookOpen className="h-4 w-4" />;
  };

  const generateRecommendations = async () => {
    if (selectedTopics.length === 0) {
      toast({
        title: "Select Topics",
        description: "Please select at least one topic of interest.",
        variant: "destructive",
      });
      return;
    }

    if (selectedFormats.length === 0) {
      toast({
        title: "Select Formats",
        description: "Please select at least one content format preference.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('lavina-recommendations', {
        body: { topics: selectedTopics, formats: selectedFormats }
      });

      if (error) throw error;

      if (data?.recommendations) {
        setRecommendations(data.recommendations);
        toast({
          title: "Recommendations Generated!",
          description: `Found ${data.recommendations.length} personalized recommendations for you.`,
        });
      }
    } catch (error: any) {
      console.error('Error generating recommendations:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to generate recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
              <span className="text-sm">📚</span>
            </div>
            Personalized Content
          </CardTitle>
          <CardDescription>
            Glory AI curates African-focused content tailored to your growth journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">What topics interest you most?</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {topics.map(topic => (
                  <Button 
                    key={topic} 
                    variant={selectedTopics.includes(topic) ? "default" : "outline"} 
                    className="justify-start"
                    onClick={() => toggleTopic(topic)}
                  >
                    {topic}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Content format preferences:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {formats.map(format => (
                  <Button 
                    key={format} 
                    variant={selectedFormats.includes(format) ? "default" : "outline"} 
                    size="sm"
                    onClick={() => toggleFormat(format)}
                  >
                    {format}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={generateRecommendations}
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Recommendations...
              </>
            ) : (
              'Generate Recommendations'
            )}
          </Button>
        </CardFooter>
      </Card>

      {recommendations.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Your Personalized Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendations.map((rec, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      {getFormatIcon(rec.type)}
                      {rec.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="secondary">{rec.type}</Badge>
                    <Badge variant="outline">{rec.topic}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{rec.description}</p>
                  <p className="text-xs text-gray-400 mt-2">⏱ {rec.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentRecommendations;
