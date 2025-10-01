import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Briefcase, 
  Users, 
  Star, 
  BarChart3, 
  MessageSquare, 
  Plus,
  Eye,
  LogOut,
  User,
  Settings,
  Bell,
  Building2,
  Calendar,
  MapPin,
  Clock,
  TrendingUp,
  Filter,
  Search
} from 'lucide-react';

interface IndustryDashboardProps {
  onLogout: () => void;
}

export function IndustryDashboard({ onLogout }: IndustryDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const mockInternships = [
    {
      id: 1,
      title: 'Software Development Intern',
      department: 'Engineering',
      location: 'Bangalore, India',
      duration: '6 months',
      applications: 45,
      hired: 2,
      status: 'active',
      postedDate: '2024-01-01',
      deadline: '2024-01-30'
    },
    {
      id: 2,
      title: 'Data Science Intern',
      department: 'Analytics',
      location: 'Mumbai, India', 
      duration: '4 months',
      applications: 32,
      hired: 1,
      status: 'active',
      postedDate: '2024-01-05',
      deadline: '2024-02-05'
    },
    {
      id: 3,
      title: 'Marketing Research Intern',
      department: 'Marketing',
      location: 'Remote',
      duration: '3 months',
      applications: 28,
      hired: 0,
      status: 'draft',
      postedDate: '2024-01-10',
      deadline: '2024-02-10'
    }
  ];

  const mockApplicants = [
    {
      id: 1,
      name: 'Priya Sharma',
      course: 'Computer Science',
      college: 'IIT Bombay',
      skills: ['React', 'Node.js', 'Python'],
      gpa: '8.7/10',
      position: 'Software Development Intern',
      status: 'shortlisted',
      appliedDate: '2024-01-12'
    },
    {
      id: 2,
      name: 'Rahul Patel',
      course: 'Data Science',
      college: 'IISc Bangalore',
      skills: ['Python', 'Machine Learning', 'SQL'],
      gpa: '9.1/10',
      position: 'Data Science Intern',
      status: 'under_review',
      appliedDate: '2024-01-14'
    },
    {
      id: 3,
      name: 'Ananya Gupta',
      course: 'Marketing',
      college: 'XLRI Jamshedpur',
      skills: ['Market Research', 'Analytics', 'Communication'],
      gpa: '8.9/10',
      position: 'Marketing Research Intern',
      status: 'new',
      appliedDate: '2024-01-15'
    }
  ];

  const mockCurrentInterns = [
    {
      id: 1,
      name: 'Karthik Reddy',
      position: 'Software Development Intern',
      supervisor: 'John Smith',
      startDate: '2023-12-01',
      progress: 85,
      rating: 4.8,
      department: 'Engineering'
    },
    {
      id: 2,
      name: 'Meera Shah',
      position: 'Data Science Intern',
      supervisor: 'Sarah Chen',
      startDate: '2023-11-15',
      progress: 92,
      rating: 4.9,
      department: 'Analytics'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-purple-600 mr-3" />
              <h1 className="text-xl font-semibold text-gray-900">InternConnect Industry</h1>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Industry Partner Dashboard</h2>
          <p className="text-gray-600">Manage internship postings, applications, and intern performance</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="postings">Job Postings</TabsTrigger>
            <TabsTrigger value="applicants">Applicants</TabsTrigger>
            <TabsTrigger value="interns">Current Interns</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Briefcase className="h-8 w-8 text-purple-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Active Postings</p>
                      <p className="text-2xl font-bold text-gray-900">5</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Users className="h-8 w-8 text-blue-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Applications</p>
                      <p className="text-2xl font-bold text-gray-900">127</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Star className="h-8 w-8 text-green-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Current Interns</p>
                      <p className="text-2xl font-bold text-gray-900">8</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <TrendingUp className="h-8 w-8 text-orange-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                      <p className="text-2xl font-bold text-gray-900">4.7/5</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Applications */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>Latest applications received for your internship postings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockApplicants.slice(0, 3).map(applicant => (
                    <div key={applicant.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{applicant.name}</h4>
                          <p className="text-gray-600">{applicant.course} • {applicant.college}</p>
                          <p className="text-sm text-gray-500">Applied for: {applicant.position}</p>
                        </div>
                        <Badge variant={
                          applicant.status === 'shortlisted' ? 'default' :
                          applicant.status === 'under_review' ? 'secondary' : 'outline'
                        }>
                          {applicant.status === 'shortlisted' ? 'Shortlisted' :
                           applicant.status === 'under_review' ? 'Under Review' : 'New'}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          {applicant.skills.slice(0, 3).map(skill => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">GPA: {applicant.gpa}</span>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            Review
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Current Interns Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Current Interns</CardTitle>
                <CardDescription>Performance overview of your current interns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockCurrentInterns.map(intern => (
                    <div key={intern.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{intern.name}</h4>
                          <p className="text-gray-600">{intern.position}</p>
                          <p className="text-sm text-gray-500">Supervisor: {intern.supervisor}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center mb-1">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm font-medium">{intern.rating}/5</span>
                          </div>
                          <Badge variant="default">Active</Badge>
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{intern.progress}%</span>
                        </div>
                        <Progress value={intern.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="postings" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Internship Postings</CardTitle>
                    <CardDescription>Manage your active and draft internship postings</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Posting
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockInternships.map(posting => (
                    <div key={posting.id} className="border rounded-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900">{posting.title}</h4>
                          <p className="text-gray-600">{posting.department}</p>
                          <Badge variant={posting.status === 'active' ? 'default' : 'secondary'} className="mt-1">
                            {posting.status === 'active' ? 'Active' : 'Draft'}
                          </Badge>
                        </div>
                        <div>
                          <div className="flex items-center text-sm text-gray-500 mb-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            {posting.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {posting.duration}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Applications: <span className="font-semibold">{posting.applications}</span></p>
                          <p className="text-sm text-gray-600">Hired: <span className="font-semibold">{posting.hired}</span></p>
                          <p className="text-sm text-gray-500">Deadline: {posting.deadline}</p>
                        </div>
                        <div className="flex items-center justify-end space-x-2">
                          <Button size="sm" variant="outline">Edit</Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applicants" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Applicant Management</CardTitle>
                    <CardDescription>Review and manage internship applications</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Search className="h-4 w-4 mr-2" />
                      Search
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockApplicants.map(applicant => (
                    <div key={applicant.id} className="border rounded-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900">{applicant.name}</h4>
                          <p className="text-gray-600">{applicant.course}</p>
                          <p className="text-sm text-gray-500">{applicant.college}</p>
                          <Badge variant="outline" className="mt-1">
                            GPA: {applicant.gpa}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-600 mb-2">Applied for:</p>
                          <p className="text-gray-900">{applicant.position}</p>
                          <p className="text-sm text-gray-500">Applied: {applicant.appliedDate}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-600 mb-2">Skills:</p>
                          <div className="flex flex-wrap gap-1">
                            {applicant.skills.map(skill => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Badge variant={
                            applicant.status === 'shortlisted' ? 'default' :
                            applicant.status === 'under_review' ? 'secondary' : 'outline'
                          }>
                            {applicant.status === 'shortlisted' ? 'Shortlisted' :
                             applicant.status === 'under_review' ? 'Under Review' : 'New'}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            View Profile
                          </Button>
                          <Button size="sm">Shortlist</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interns" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Interns</CardTitle>
                <CardDescription>Monitor and provide feedback to your current interns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockCurrentInterns.map(intern => (
                    <div key={intern.id} className="border rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{intern.name}</h4>
                          <p className="text-gray-600">{intern.position}</p>
                          <p className="text-sm text-gray-500">Department: {intern.department}</p>
                          <p className="text-sm text-gray-500">Supervisor: {intern.supervisor}</p>
                          <p className="text-sm text-gray-500">Started: {intern.startDate}</p>
                        </div>
                        <div>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm text-gray-600 mb-1">
                                <span>Progress</span>
                                <span>{intern.progress}%</span>
                              </div>
                              <Progress value={intern.progress} className="h-2" />
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-500 mr-1" />
                              <span className="text-sm font-medium">Rating: {intern.rating}/5</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Give Feedback
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            View Progress
                          </Button>
                          <Button size="sm" variant="outline">
                            Schedule Review
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analytics & Insights</CardTitle>
                <CardDescription>Performance metrics and hiring analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Application Rate</h4>
                      <div className="text-2xl font-bold text-blue-600 mb-1">127</div>
                      <p className="text-sm text-gray-600">Applications this month</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Hiring Success Rate</h4>
                      <div className="text-2xl font-bold text-green-600 mb-1">18%</div>
                      <p className="text-sm text-gray-600">Applications to hires ratio</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Average Intern Rating</h4>
                      <div className="text-2xl font-bold text-purple-600 mb-1">4.7/5</div>
                      <p className="text-sm text-gray-600">Performance evaluation</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Top Source College</h4>
                      <div className="text-lg font-bold text-orange-600 mb-1">IIT Bombay</div>
                      <p className="text-sm text-gray-600">Most applications from</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Completion Rate</h4>
                      <div className="text-2xl font-bold text-teal-600 mb-1">94%</div>
                      <p className="text-sm text-gray-600">Interns completing program</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Retention Rate</h4>
                      <div className="text-2xl font-bold text-red-600 mb-1">65%</div>
                      <p className="text-sm text-gray-600">Interns offered full-time</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-6 flex space-x-4">
                  <Button>
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Detailed Analytics
                  </Button>
                  <Button variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Report
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