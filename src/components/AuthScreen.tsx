import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface AuthScreenProps {
  onLogin: (user: { id: string; name: string; email: string }) => void;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

const AuthScreen = ({ onLogin }: AuthScreenProps) => {
  const [loginData, setLoginData] = useState({ email: 'tondekawere@gmail.com', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: 'tondekawere@gmail.com', password: '', confirmPassword: '' });
  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');
  const [backgroundCode, setBackgroundCode] = useState(0);

  // Background code animation
  useState(() => {
    const interval = setInterval(() => {
      setBackgroundCode(prev => (prev + 1) % 100);
    }, 200);
    return () => clearInterval(interval);
  });

  const loadUsers = (): UserData[] => {
    try {
      const users = localStorage.getItem('tondev_users');
      return users ? JSON.parse(users) : [];
    } catch {
      return [];
    }
  };

  const saveUsers = (users: UserData[]) => {
    localStorage.setItem('tondev_users', JSON.stringify(users));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    if (!loginData.email || !loginData.password) {
      setLoginError('Please fill in all fields');
      return;
    }

    const users = loadUsers();
    const user = users.find(u => u.email === loginData.email && u.password === loginData.password);

    if (user) {
      localStorage.setItem('tondev_current_user', JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email
      }));
      onLogin({ id: user.id, name: user.name, email: user.email });
    } else {
      setLoginError('Invalid email or password');
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setSignupError('');

    if (!signupData.name || !signupData.email || !signupData.password || !signupData.confirmPassword) {
      setSignupError('Please fill in all fields');
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      setSignupError('Passwords do not match');
      return;
    }

    if (signupData.password.length < 6) {
      setSignupError('Password must be at least 6 characters');
      return;
    }

    const users = loadUsers();
    
    if (users.find(u => u.email === signupData.email)) {
      setSignupError('Email already exists');
      return;
    }

    const newUser: UserData = {
      id: Date.now().toString(),
      name: signupData.name,
      email: signupData.email,
      password: signupData.password,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);

    localStorage.setItem('tondev_current_user', JSON.stringify({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email
    }));
    
    onLogin({ id: newUser.id, name: newUser.name, email: newUser.email });
  };

  const codeSnippets = [
    "const ai = new TondevMentor();",
    "function learnCode() { return 'success'; }",
    "ai.teach('React', 'advanced');",
    "const knowledge = await ai.process();",
    "mentor.guide(student, 'fullstack');",
    "ai.personality.cybersecurity.activate();",
    "const skills = ['frontend', 'backend'];",
    "mentor.chat.initialize(user);",
  ];

  return (
    <div className="fixed inset-0 h-screen max-h-screen overflow-hidden bg-[#0B132B] flex items-center justify-center">
      <div className="w-full h-full max-h-screen flex items-center justify-center p-2 sm:p-3 md:p-4 overflow-y-auto">
        
        {/* Background code animation - hidden on small screens for performance */}
        <div className="absolute inset-0 opacity-[0.07] font-mono text-xs text-blue-400 overflow-hidden hidden md:block pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${(i * 5) % 100}%`,
                top: `${(i * 7 + backgroundCode) % 100}%`,
                animationDelay: `${i * 100}ms`
              }}
            >
              {codeSnippets[i % codeSnippets.length]}
            </div>
          ))}
        </div>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md relative z-10 flex flex-col justify-center min-h-0">
          {/* Header */}
          <div className="text-center mb-3 sm:mb-4 md:mb-6 flex-shrink-0">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#2563EB] rounded-2xl mb-2 sm:mb-3 shadow-md border border-blue-500/20">
              <span className="text-base sm:text-lg md:text-2xl">🤖</span>
            </div>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-1 leading-tight px-2 tracking-tight">
              Tondev AI Mentors
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base px-2 leading-tight">
              Advanced AI mentors for software engineering excellence
            </p>
            <div className="w-12 sm:w-16 md:w-24 h-0.5 bg-blue-500 rounded-full mx-auto mt-2 sm:mt-3"></div>
          </div>

          {/* Auth Card */}
          <Card className="bg-[#1C2541]/80 backdrop-blur-lg border-[#243B6B]/40 shadow-2xl mx-1 sm:mx-2 flex-shrink-0">
            <CardHeader className="text-center p-2 sm:p-3 md:p-4">
              <CardTitle className="text-white text-base sm:text-lg md:text-xl font-bold tracking-tight">Welcome</CardTitle>
              <CardDescription className="text-slate-300 text-xs sm:text-sm leading-tight">
                Join the future of AI-powered learning
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 sm:p-3 md:p-4 pt-0">
              <Tabs defaultValue="login" className="space-y-2 sm:space-y-3">
                <TabsList className="grid w-full grid-cols-2 bg-[#0B132B]/50 border border-[#243B6B]/30 h-7 sm:h-8 md:h-10">
                  <TabsTrigger value="login" className="text-slate-300 data-[state=active]:bg-blue-600/30 data-[state=active]:text-white text-xs sm:text-sm py-1 sm:py-1.5 font-semibold">
                    Login
                  </TabsTrigger>
                  <TabsTrigger value="signup" className="text-slate-300 data-[state=active]:bg-blue-600/30 data-[state=active]:text-white text-xs sm:text-sm py-1 sm:py-1.5 font-semibold">
                    Sign Up
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-2 sm:space-y-3">
                    <div className="space-y-1">
                      <Label htmlFor="email" className="text-slate-200 text-xs sm:text-sm font-medium">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        className="bg-[#0B132B]/60 border-[#243B6B]/40 text-white placeholder-slate-400 h-7 sm:h-8 md:h-10 text-xs sm:text-sm focus:border-blue-500 focus:ring-blue-900/50"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="password" className="text-slate-200 text-xs sm:text-sm font-medium">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        className="bg-[#0B132B]/60 border-[#243B6B]/40 text-white placeholder-slate-400 h-7 sm:h-8 md:h-10 text-xs sm:text-sm focus:border-blue-500 focus:ring-blue-900/50"
                        placeholder="Enter your password"
                      />
                    </div>
                    {loginError && (
                      <p className="text-red-400 text-[10px] sm:text-xs leading-tight break-words font-medium">{loginError}</p>
                    )}
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-7 sm:h-8 md:h-10 text-xs sm:text-sm shadow-md cursor-pointer transition-all active:scale-98">
                      Login
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="signup">
                  <form onSubmit={handleSignup} className="space-y-2 sm:space-y-3">
                    <div className="space-y-1">
                      <Label htmlFor="name" className="text-slate-200 text-xs sm:text-sm font-medium">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        value={signupData.name}
                        onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                        className="bg-[#0B132B]/60 border-[#243B6B]/40 text-white placeholder-slate-400 h-7 sm:h-8 md:h-10 text-xs sm:text-sm focus:border-blue-500 focus:ring-blue-900/50"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="signup-email" className="text-slate-200 text-xs sm:text-sm font-medium">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        value={signupData.email}
                        onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                        className="bg-[#0B132B]/60 border-[#243B6B]/40 text-white placeholder-slate-400 h-7 sm:h-8 md:h-10 text-xs sm:text-sm focus:border-blue-500 focus:ring-blue-900/50"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="signup-password" className="text-slate-200 text-xs sm:text-sm font-medium">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        value={signupData.password}
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                        className="bg-[#0B132B]/60 border-[#243B6B]/40 text-white placeholder-slate-400 h-7 sm:h-8 md:h-10 text-xs sm:text-sm focus:border-blue-500 focus:ring-blue-900/50"
                        placeholder="Create a password"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="confirm-password" className="text-slate-200 text-xs sm:text-sm font-medium">Confirm Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        value={signupData.confirmPassword}
                        onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                        className="bg-[#0B132B]/60 border-[#243B6B]/40 text-white placeholder-slate-400 h-7 sm:h-8 md:h-10 text-xs sm:text-sm focus:border-blue-500 focus:ring-blue-900/50"
                        placeholder="Confirm your password"
                      />
                    </div>
                    {signupError && (
                      <p className="text-red-400 text-[10px] sm:text-xs leading-tight break-words font-medium">{signupError}</p>
                    )}
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-7 sm:h-8 md:h-10 text-xs sm:text-sm shadow-md cursor-pointer transition-all active:scale-98">
                      Sign Up
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="text-center mt-2 sm:mt-3 md:mt-4 px-2 flex-shrink-0">
            <p className="text-slate-400 text-[9px] sm:text-[10px] md:text-xs leading-tight">
              💡 Developed with precision by{' '}
              <span className="text-blue-400 font-bold">Tonde Kawere</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
