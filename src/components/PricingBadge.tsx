
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Check, Lock, DollarSign } from 'lucide-react';

type PricingBadgeProps = {
  type: 'free' | 'paid' | 'premium';
  price?: number;
};

const PricingBadge = ({ type, price }: PricingBadgeProps) => {
  if (type === 'free') {
    return (
      <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200 border-0 gap-1">
        <Check className="h-3 w-3" />
        Free
      </Badge>
    );
  }

  if (type === 'paid') {
    return (
      <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-0 gap-1">
        <Lock className="h-3 w-3" />
        {price ? `$${price}` : 'Paid'}
      </Badge>
    );
  }

  return (
    <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200 border-0 gap-1">
      <DollarSign className="h-3 w-3" />
      Premium
    </Badge>
  );
};

export default PricingBadge;
