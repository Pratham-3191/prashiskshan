import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { GraduationCap, Users, Building2, BookOpen } from 'lucide-react';

interface RoleSelectorProps {
  onRoleSelect: (role: 'student' | 'faculty' | 'industry') => void;
}

export function RoleSelector({ onRoleSelect }: RoleSelectorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="h-12 w-12 text-indigo-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">InternConnect</h1>
          </div>
          <h2 className="text-xl text-gray-600 mb-2">NEP 2020 Internship Management Platform</h2>
          <p className="text-gray-500">Select your role to access your dashboard</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={() => onRoleSelect('student')}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Student</CardTitle>
              <CardDescription>
                Access your internship applications, progress tracking, and skill development modules
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Enter as Student
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={() => onRoleSelect('faculty')}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">Faculty / College Admin</CardTitle>
              <CardDescription>
                Manage student progress, approve internships, and oversee academic credit allocation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Enter as Faculty
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={() => onRoleSelect('industry')}>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <Building2 className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Industry Partner</CardTitle>
              <CardDescription>
                Post internship opportunities, manage applications, and provide feedback on interns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Enter as Industry Partner
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Aligned with National Education Policy 2020 • Bridging Academia and Industry
          </p>
        </div>
      </div>
    </div>
  );
}