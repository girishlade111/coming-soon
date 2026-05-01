'use client';

import { useState, useEffect, FormEvent } from 'react';
import { Mail, Github, Linkedin, ArrowRight, Globe, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/20 p-4">
      <div className="w-full max-w-3xl text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Something Amazing is <span className="text-primary">Coming Soon</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-xl mx-auto">
          We are working hard to bring you something extraordinary. Stay tuned and be the first to know when we launch.
        </p>

        <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
          {Object.entries(countdown).map(([unit, value]) => (
            <Card key={unit} className="p-4 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">{value}</span>
              <span className="text-xs text-muted-foreground capitalize">{unit}</span>
            </Card>
          ))}
        </div>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button type="submit" className="whitespace-nowrap">
              Notify Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          {isSubmitted && <p className="mt-2 text-sm text-green-600">Thanks! We will notify you when we launch.</p>}
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <a 
            href="https://www.instagram.com/girish_lade_/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/girish-lade-075bba201/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            aria-label="Connect on LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="https://github.com/girishlade111" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            aria-label="Follow on GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="https://codepen.io/Girish-Lade-the-looper" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            aria-label="View on CodePen"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6 0 5.302-4.298 9.6-9.6 9.6-5.302 0-9.6-4.298-9.6-9.6 0-5.302 4.298-9.6 9.6-9.6zm-2.4 4.8v7.2l6 3.6-6 3.6v-7.2l-6-3.6 6-3.6zm12 0v7.2l6-3.6v7.2l-6-3.6 6-3.6z"/>
            </svg>
          </a>
          <a 
            href="mailto:admin@ladestack.in" 
            className="p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            aria-label="Send us an email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a 
            href="https://ladestack.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            aria-label="Visit our website"
          >
            <Globe className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}