import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Users, 
  CheckCircle, 
  Clock, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Award,
  LogOut,
  User,
  Settings,
  Bell,
  BookOpen,
  TrendingUp,
  Calendar,
  Filter
} from 'lucide-react';

interface FacultyDashboardProps {
  onLogout: () => void;
}

export function FacultyDashboard({ onLogout }: FacultyDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const mockStudents = [
    {
      id: 1,
      name: 'Priya Sharma',
      course: 'Computer Science',
      internship: 'Software Development Intern at TechCorp',
      progress: 75,
      status: 'active',
      mentor: 'John Smith',
      credits: 6,
      lastUpdate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Rahul Patel',
      course: 'Electronics Engineering',
      internship: 'Hardware Design Intern at CircuitLab',
      progress: 60,
      status: 'active',
      mentor: 'Sarah Johnson',
      credits: 4,
      lastUpdate: '2024-01-14'
    },
    {
      id: 3,
      name: 'Ananya Gupta',
      course: 'Data Science',
      internship: 'Data Analytics Intern at DataFlow',
      progress: 30,
      status: 'pending_approval',
      mentor: 'Mike Chen',
      credits: 0,
      lastUpdate: '2024-01-13'
    }
  ];

  const mockInternshipRequests = [
    {
      id: 1,
      student: 'Ananya Gupta',
      company: 'DataFlow Inc',
      position: 'Data Analytics Intern',
      duration: '4 months',
      credits: 6,
      status: 'pending',
      submittedDate: '2024-01-10'
    },
    {
      id: 2,
      student: 'Karthik Reddy',
      company: 'InnovateTech',
      position: 'UI/UX Design Intern',
      duration: '3 months',
      credits: 4,
      status: 'pending',
      submittedDate: '2024-01-12'
    }
  ];

  const mockFeedback = [
    {
      id: 1,
      student: 'Priya Sharma',
      mentor: 'John Smith',
      rating: 4.8,
      comment: 'Excellent problem-solving skills and great team collaboration.',
      date: '2024-01-15',
      type: 'mid-term'
    },
    {
      id: 2,
      student: 'Rahul Patel',
      mentor: 'Sarah Johnson',
      rating: 4.5,
      comment: 'Strong technical skills, needs improvement in communication.',
      date: '2024-01-14',
      type: 'weekly'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-green-600 mr-3" />
              <h1 className="text-xl font-semibold text-gray-900">InternConnect Faculty</h1>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Faculty Dashboard</h2>
          <p className="text-gray-600">Manage student internships, approvals, and academic credits</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="approvals">Approvals</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Users className="h-8 w-8 text-green-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Active Students</p>
                      <p className="text-2xl font-bold text-gray-900">24</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Clock className="h-8 w-8 text-orange-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
                      <p className="text-2xl font-bold text-gray-900">5</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Award className="h-8 w-8 text-purple-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Credits Assigned</p>
                      <p className="text-2xl font-bold text-gray-900">156</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Avg Progress</p>
                      <p className="text-2xl font-bold text-gray-900">68%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Student Updates</CardTitle>
                <CardDescription>Latest progress from your supervised students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockStudents.slice(0, 3).map(student => (
                    <div key={student.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{student.name}</h4>
                          <p className="text-gray-600">{student.internship}</p>
                          <p className="text-sm text-gray-500">{student.course}</p>
                        </div>
                        <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
                          {student.status === 'active' ? 'Active' : 'Pending'}
                        </Badge>
                      </div>
                      <div className="mb-2">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{student.progress}%</span>
                        </div>
                        <Progress value={student.progress} className="h-2" />
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>Credits: {student.credits}</span>
                        <span>Last update: {student.lastUpdate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pending Approvals */}
            <Card>
              <CardHeader>
                <CardTitle>Pending Approvals</CardTitle>
                <CardDescription>Internship applications requiring your review</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockInternshipRequests.map(request => (
                    <div key={request.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-900">{request.student}</h4>
                          <p className="text-gray-600">{request.position} at {request.company}</p>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            {request.duration}
                            <Award className="h-4 w-4 ml-3 mr-1" />
                            {request.credits} credits
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Approve
                          </Button>
                          <Button size="sm" variant="outline">Review</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Student Management</CardTitle>
                    <CardDescription>Track and manage all student internships</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button size="sm">Export Data</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockStudents.map(student => (
                    <div key={student.id} className="border rounded-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900">{student.name}</h4>
                          <p className="text-gray-600">{student.course}</p>
                          <Badge variant="outline" className="mt-1">
                            {student.status === 'active' ? 'Active' : 'Pending'}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-600">Internship</p>
                          <p className="text-gray-900">{student.internship}</p>
                          <p className="text-sm text-gray-500">Mentor: {student.mentor}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-600">Progress</p>
                          <div className="mt-1">
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                              <span>{student.progress}%</span>
                              <span>{student.credits} credits</span>
                            </div>
                            <Progress value={student.progress} className="h-2" />
                          </div>
                        </div>
                        <div className="flex items-center justify-end">
                          <Button size="sm" variant="outline">View Details</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="approvals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Internship Approvals</CardTitle>
                <CardDescription>Review and approve student internship applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockInternshipRequests.map(request => (
                    <div key={request.id} className="border rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{request.student}</h4>
                          <p className="text-gray-600">{request.position}</p>
                          <p className="text-gray-600">{request.company}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            Submitted: {request.submittedDate}
                          </p>
                        </div>
                        <div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Duration:</span>
                              <span className="text-sm font-medium">{request.duration}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Credits:</span>
                              <span className="text-sm font-medium">{request.credits}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Status:</span>
                              <Badge variant="secondary">Pending Review</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Approve
                          </Button>
                          <Button size="sm" variant="outline">
                            <FileText className="h-4 w-4 mr-2" />
                            Review Details
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Request Changes
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mentorship Feedback</CardTitle>
                <CardDescription>Monitor mentor feedback and student evaluations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockFeedback.map(feedback => (
                    <div key={feedback.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{feedback.student}</h4>
                          <p className="text-gray-600">Mentor: {feedback.mentor}</p>
                          <Badge variant="outline" className="mt-1">
                            {feedback.type === 'mid-term' ? 'Mid-term Review' : 'Weekly Feedback'}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center mb-1">
                            <span className="text-lg font-bold text-green-600">{feedback.rating}</span>
                            <span className="text-gray-500 ml-1">/5.0</span>
                          </div>
                          <p className="text-sm text-gray-500">{feedback.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"{feedback.comment}"</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analytics & Reports</CardTitle>
                <CardDescription>Insights into student performance and internship trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Completion Rate</h4>
                      <div className="text-2xl font-bold text-green-600 mb-1">92%</div>
                      <p className="text-sm text-gray-600">Students completing internships</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Average Rating</h4>
                      <div className="text-2xl font-bold text-blue-600 mb-1">4.6/5</div>
                      <p className="text-sm text-gray-600">Mentor feedback score</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Credits Awarded</h4>
                      <div className="text-2xl font-bold text-purple-600 mb-1">156</div>
                      <p className="text-sm text-gray-600">This academic year</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Top Performing Dept</h4>
                      <div className="text-lg font-bold text-orange-600 mb-1">Computer Science</div>
                      <p className="text-sm text-gray-600">Highest completion rate</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Industry Partners</h4>
                      <div className="text-2xl font-bold text-teal-600 mb-1">28</div>
                      <p className="text-sm text-gray-600">Active collaborations</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Placement Rate</h4>
                      <div className="text-2xl font-bold text-red-600 mb-1">78%</div>
                      <p className="text-sm text-gray-600">Post-internship placements</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-6 flex space-x-4">
                  <Button>
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Generate Report
                  </Button>
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Export Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}