import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Search, 
  BookOpen, 
  Bell, 
  FileText, 
  TrendingUp, 
  Calendar, 
  MapPin, 
  Clock,
  Star,
  LogOut,
  User,
  Settings,
  Award,
  Target
} from 'lucide-react';

interface StudentDashboardProps {
  onLogout: () => void;
}

export function StudentDashboard({ onLogout }: StudentDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const mockInternships = [
    {
      id: 1,
      title: 'Software Development Intern',
      company: 'TechCorp Solutions',
      location: 'Bangalore, India',
      status: 'active',
      duration: '6 months',
      progress: 75,
      startDate: '2024-01-15',
      endDate: '2024-07-15'
    },
    {
      id: 2,
      title: 'Data Analytics Intern',
      company: 'DataFlow Inc',
      location: 'Mumbai, India',
      status: 'applied',
      duration: '4 months',
      progress: 0,
      startDate: '2024-02-01',
      endDate: '2024-06-01'
    }
  ];

  const mockRecommendations = [
    {
      id: 1,
      title: 'UI/UX Design Intern',
      company: 'DesignHub',
      location: 'Remote',
      match: 92,
      deadline: '2024-01-30'
    },
    {
      id: 2,
      title: 'Marketing Research Intern',
      company: 'BrandBoost',
      location: 'Delhi, India',
      match: 87,
      deadline: '2024-02-05'
    }
  ];

  const mockSkillModules = [
    { name: 'Technical Communication', progress: 85, status: 'completed' },
    { name: 'Project Management', progress: 60, status: 'in-progress' },
    { name: 'Industry Awareness', progress: 30, status: 'in-progress' },
    { name: 'Professional Ethics', progress: 0, status: 'not-started' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600 mr-3" />
              <h1 className="text-xl font-semibold text-gray-900">InternConnect</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="sm" onClick={onLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Neha!</h2>
          <p className="text-gray-600">Track your internship journey and explore new opportunities</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="search">Search</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="logbook">Logbook</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Target className="h-8 w-8 text-blue-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Active Internships</p>
                      <p className="text-2xl font-bold text-gray-900">1</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Clock className="h-8 w-8 text-green-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Applications</p>
                      <p className="text-2xl font-bold text-gray-900">3</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Award className="h-8 w-8 text-purple-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Skills Completed</p>
                      <p className="text-2xl font-bold text-gray-900">2/4</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <TrendingUp className="h-8 w-8 text-orange-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Progress</p>
                      <p className="text-2xl font-bold text-gray-900">75%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Active Internships */}
            <Card>
              <CardHeader>
                <CardTitle>Active Internships</CardTitle>
                <CardDescription>Your current internship assignments</CardDescription>
              </CardHeader>
              <CardContent>
                {mockInternships.filter(i => i.status === 'active').map(internship => (
                  <div key={internship.id} className="border rounded-lg p-4 mb-4 last:mb-0">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{internship.title}</h4>
                        <p className="text-gray-600">{internship.company}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {internship.location}
                          <Clock className="h-4 w-4 ml-3 mr-1" />
                          {internship.duration}
                        </div>
                      </div>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{internship.progress}%</span>
                      </div>
                      <Progress value={internship.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recommended Internships */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
                <CardDescription>Internships matching your skills and interests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockRecommendations.map(rec => (
                    <div key={rec.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{rec.title}</h4>
                          <p className="text-gray-600">{rec.company}</p>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            {rec.location}
                            <Calendar className="h-4 w-4 ml-3 mr-1" />
                            Deadline: {rec.deadline}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center mb-2">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm font-medium">{rec.match}% match</span>
                          </div>
                          <Button size="sm">Apply Now</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="search" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Find Internships</CardTitle>
                <CardDescription>Search and filter internship opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 mb-6">
                  <div className="flex-1">
                    <input 
                      type="text" 
                      placeholder="Search by title, company, or skills..." 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <Button>
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mockRecommendations.map(internship => (
                    <Card key={internship.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{internship.title}</h4>
                        <p className="text-gray-600 mb-2">{internship.company}</p>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <MapPin className="h-4 w-4 mr-1" />
                          {internship.location}
                        </div>
                        <div className="flex justify-between items-center">
                          <Badge variant="outline">{internship.match}% match</Badge>
                          <Button size="sm">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Applications</CardTitle>
                <CardDescription>Track the status of your internship applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockInternships.map(app => (
                    <div key={app.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-900">{app.title}</h4>
                          <p className="text-gray-600">{app.company}</p>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            {app.location}
                          </div>
                        </div>
                        <Badge variant={app.status === 'active' ? 'default' : 'secondary'}>
                          {app.status === 'active' ? 'Accepted' : 'Under Review'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Skill Development Modules</CardTitle>
                <CardDescription>Complete modules to enhance your readiness for internships</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockSkillModules.map((module, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold text-gray-900">{module.name}</h4>
                        <Badge variant={
                          module.status === 'completed' ? 'default' : 
                          module.status === 'in-progress' ? 'secondary' : 'outline'
                        }>
                          {module.status === 'completed' ? 'Completed' : 
                           module.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                        </Badge>
                      </div>
                      <div className="mb-2">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{module.progress}%</span>
                        </div>
                        <Progress value={module.progress} className="h-2" />
                      </div>
                      <Button size="sm" variant="outline">
                        {module.status === 'not-started' ? 'Start Module' : 'Continue'}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logbook" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Internship Logbook</CardTitle>
                <CardDescription>Document your daily activities and learning experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button>Add New Entry</Button>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">Week 12 - API Integration</h4>
                      <span className="text-sm text-gray-500">Dec 15, 2024</span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Worked on integrating third-party APIs for the payment gateway. 
                      Learned about authentication tokens and error handling.
                    </p>
                    <div className="flex space-x-2">
                      <Badge variant="outline">API Development</Badge>
                      <Badge variant="outline">Problem Solving</Badge>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">Week 11 - Database Design</h4>
                      <span className="text-sm text-gray-500">Dec 8, 2024</span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Designed database schema for user management system. 
                      Applied normalization principles and optimized queries.
                    </p>
                    <div className="flex space-x-2">
                      <Badge variant="outline">Database</Badge>
                      <Badge variant="outline">SQL</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Progress Reports</CardTitle>
                <CardDescription>Auto-generated reports and analytics of your internship journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Weekly Progress</h4>
                      <div className="text-2xl font-bold text-blue-600 mb-1">85%</div>
                      <p className="text-sm text-gray-600">Completion rate this week</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Skills Acquired</h4>
                      <div className="text-2xl font-bold text-green-600 mb-1">12</div>
                      <p className="text-sm text-gray-600">New skills learned</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Mentor Rating</h4>
                      <div className="text-2xl font-bold text-purple-600 mb-1">4.8/5</div>
                      <p className="text-sm text-gray-600">Average feedback score</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Hours Completed</h4>
                      <div className="text-2xl font-bold text-orange-600 mb-1">180</div>
                      <p className="text-sm text-gray-600">Out of 240 total hours</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-6">
                  <Button>Generate Detailed Report</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}