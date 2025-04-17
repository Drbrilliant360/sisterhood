
import React from 'react';
import { Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DailyInspiration = () => {
  return (
    <Card className="mb-8 border-sisterhood-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center text-sisterhood-primary">
          <Heart className="mr-2 h-5 w-5" />
          Daily Inspiration
        </CardTitle>
      </CardHeader>
      <CardContent>
        <blockquote className="italic text-xl text-gray-700 border-l-4 border-sisterhood-primary pl-4">
          "The most effective way to do it is to do it."
        </blockquote>
        <p className="mt-2 text-right text-gray-500">- Amelia Earhart</p>
      </CardContent>
    </Card>
  );
};

export default DailyInspiration;
