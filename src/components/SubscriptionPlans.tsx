
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, CreditCard, Wallet } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const paymentMethods = [
  { id: 'paypal', name: 'PayPal', icon: <CreditCard className="h-4 w-4" /> },
  { id: 'mpesa', name: 'M-Pesa', icon: <Wallet className="h-4 w-4" /> },
  { id: 'tigo-pesa', name: 'Tigo Pesa', icon: <Wallet className="h-4 w-4" /> },
  { id: 'credit-card', name: 'Credit Card', icon: <CreditCard className="h-4 w-4" /> }
];

type PlanFeature = {
  name: string;
  included: boolean;
};

type SubscriptionPlan = {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: PlanFeature[];
  highlight?: boolean;
};

const plans: SubscriptionPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 10,
    period: 'month',
    description: 'Perfect for getting started with SisterHood',
    features: [
      { name: 'Access to basic resources', included: true },
      { name: 'Join community discussions', included: true },
      { name: 'Basic mentorship support', included: true },
      { name: 'Basic safety resources', included: true },
      { name: 'Digital skills foundation course', included: true },
      { name: 'Advanced mentorship programs', included: false },
      { name: 'Premium resources', included: false },
      { name: 'Entrepreneurship courses', included: false },
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 20,
    period: 'month',
    description: 'Full access to mentorship and resources',
    highlight: true,
    features: [
      { name: 'Access to all basic resources', included: true },
      { name: 'Join community discussions', included: true },
      { name: 'Advanced mentorship support', included: true },
      { name: 'Premium safety resources', included: true },
      { name: 'All digital skills courses', included: true },
      { name: 'Entrepreneurship courses', included: true },
      { name: 'Monthly mentor 1-on-1 session', included: true },
      { name: 'Exclusive workshops', included: false },
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 50,
    period: 'month',
    description: 'For those seeking intensive growth opportunities',
    features: [
      { name: 'All Pro features included', included: true },
      { name: 'Priority mentorship matching', included: true },
      { name: 'Weekly mentor 1-on-1 sessions', included: true },
      { name: 'All exclusive workshops', included: true },
      { name: 'Business networking events', included: true },
      { name: 'Investor connection opportunities', included: true },
      { name: 'Personal growth coaching', included: true },
      { name: 'Leadership development training', included: true },
    ]
  }
];

const SubscriptionPlans = () => {
  return (
    <div className="container py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-sisterhood-primary mb-4">Subscription Plans</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the plan that best fits your needs. All plans provide valuable resources and support for women in Tanzania and across Africa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card 
            key={plan.id} 
            className={`relative ${plan.highlight ? 'border-sisterhood-primary shadow-md' : ''}`}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-0 right-0 flex justify-center">
                <Badge className="bg-sisterhood-primary">Most Popular</Badge>
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold text-sisterhood-primary">${plan.price}</span>
                <span className="text-gray-500">/{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className={`flex items-start gap-2 ${!feature.included ? 'text-gray-400' : ''}`}>
                    <Check className={`h-5 w-5 shrink-0 ${feature.included ? 'text-green-500' : 'text-gray-300'}`} />
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button 
                className={`w-full ${plan.highlight ? 'bg-sisterhood-primary' : ''}`}
              >
                Subscribe Now
              </Button>
              <div className="text-xs text-gray-500">
                <p className="mb-1">Payment methods accepted:</p>
                <div className="flex flex-wrap gap-2">
                  {paymentMethods.map(method => (
                    <span key={method.id} className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full">
                      {method.icon} {method.name}
                    </span>
                  ))}
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>All prices are in USD. Subscriptions renew automatically but can be canceled anytime.</p>
        <p>Local payment methods like M-Pesa and Tigo Pesa are available for Tanzania-based members.</p>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
