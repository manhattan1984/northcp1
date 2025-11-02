import React from 'react';
import { CategoryList, Category } from '@/components/ui/category-list';
import { LayoutGrid, Bot, Code, Palette, ArrowRight, Zap, Network, Database } from 'lucide-react';

const automationCategories: Category[] = [
  {
    id: 1,
    title: 'Lead Automation',
    subtitle: 'Capture, qualify, and follow-up with leads 24/7.',
    onClick: () => console.log('Navigating to Lead Automation...'),
    icon: <ArrowRight className="w-8 h-8" />,
    featured: true,
  },
  {
    id: 2,
    title: 'AI Workflow Systems',
    subtitle: 'Intelligent systems that execute and scale autonomously.',
    onClick: () => console.log('Navigating to AI Workflows...'),
    icon: <Bot className="w-8 h-8" />,
  },
  {
    id: 3,
    title: 'Process Automation',
    subtitle: 'Eliminate repetitive tasks and save 60% of your time.',
    onClick: () => console.log('Navigating to Process Automation...'),
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: 4,
    title: 'API Integration',
    subtitle: 'Connect your tools and create seamless data flows.',
    onClick: () => console.log('Navigating to API Integration...'),
    icon: <Network className="w-8 h-8" />,
  },
  {
    id: 5,
    title: 'Data Intelligence',
    subtitle: 'Transform raw data into actionable business insights.',
    onClick: () => console.log('Navigating to Data Intelligence...'),
    icon: <Database className="w-8 h-8" />,
  },
  {
    id: 6,
    title: 'Custom Solutions',
    subtitle: 'Tailored automation systems for your unique needs.',
    onClick: () => console.log('Navigating to Custom Solutions...'),
    icon: <Code className="w-8 h-8" />,
  },
];

const CategoryListDemo = () => {
  return (
    <div className="w-full min-h-screen bg-background">
      <CategoryList
        title="Automation"
        subtitle="Solutions"
        categories={automationCategories}
        headerIcon={<LayoutGrid className="w-8 h-8" />}
      />
    </div>
  );
};

export default CategoryListDemo;
